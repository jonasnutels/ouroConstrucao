import { createContext, useState } from 'react';
import { supabase } from '../Supabase/Auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const ProductContext = createContext();

export const ProductStorage = ({ children }) => {
  const navigate = useNavigate();

  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchProducts = async () => {
    const { data, error } = await supabase.from('produtos').select('*');

    if (error) {
      console.error('Erro ao buscar produtos:', error);
      return;
    }

    setProducts(data);
  };
  const handleDelete = async (id) => {
    try {
     
      const { error } = await supabase.from('produtos').delete().eq('id', id);

      if (error) {
        console.error('Erro ao excluir produto:', error.message);
        toast.error('Erro ao excluir produto');
        return;
      }

     
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      toast.warning('Produto excluído com sucesso');
    } catch (error) {
      console.error('Erro ao excluir produto:', error.message);
    }
  };
  const handleToggle = async (index) => {
    const updatedProduct = {
      ...products[index],
      habilitado: !products[index].habilitado,
    };

    setProducts((prevProducts) =>
      prevProducts.map((prod, i) => (i === index ? updatedProduct : prod)),
    );

    const { error } = await supabase
      .from('produtos')
      .update({ habilitado: updatedProduct.habilitado })
      .eq('id', updatedProduct.id);

    if (error) {
      console.error('Erro ao atualizar produto:', error);
      setProducts((prevProducts) =>
        prevProducts.map((prod, i) =>
          i === index
            ? { ...prod, habilitado: !updatedProduct.habilitado }
            : prod,
        ),
      );
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        fetchProducts,
        handleDelete,
        handleToggle
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
