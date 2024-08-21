import { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from '@mui/material';
import styles from './Admin.module.css';
import { supabase } from '../../Supabase/Auth';
import { toast } from 'sonner';

function AdminDash() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    ordem: '',
    image: '',
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setProduct({
        ...product,
        image: files[0],
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = '';

    if (product.image) {
      const { data, error } = await supabase.storage
        .from('produtos')
        .upload(`public/${Date.now()}_${product.image.name}`, product.image);

      if (error) {
        console.error('Erro ao fazer upload da imagem:', error);
        toast.error('Erro ao fazer upload da imagem');
        return;
      }

      const { data: data2 } = supabase.storage
        .from('produtos')
        .getPublicUrl(data.path);

      imageUrl = data2.publicUrl;
    }
    console.log(imageUrl);

    // Inserir o produto com a URL da imagem na tabela 'produtos'
    const { data, error, status } = await supabase.from('produtos').insert([
      {
        nome: product.name,
        descricao: product.description,
        preco: product.price,
        habilitado: true,
        ordem: product.ordem,
        imagem_url: imageUrl,
      },
    ]);

    if (status === 201) {
      toast.success('Produto adicionado com sucesso');
      setProduct({
        name: '',
        description: '',
        price: '',
        ordem: '',
        image: null,
      });
      setProducts([
        ...products,
        { ...product, id: data[0].id, imagem_url: imageUrl, enabled: true },
      ]);
    }

    if (error) {
      console.error('Erro ao adicionar produto:', error);
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

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('produtos').select('*');

      if (error) {
        console.error('Erro ao buscar produtos:', error);
        return;
      }

      setProducts(data);
    };

    fetchProducts();
  }, [product]);

  return (
    <div className={styles.formContainer}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Cadastro de Produtos
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome do Produto"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descrição"
                name="description"
                value={product.description}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Preço"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Ordem"
                name="ordem"
                type="number"
                value={product.ordem}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="image-upload"
                type="file"
                name="image"
                onChange={handleChange}
              />
              <label htmlFor="image-upload">
                <Button variant="contained" component="span">
                  Upload Imagem
                </Button>
                {product.image && (
                  <span style={{ marginLeft: '10px' }}>
                    {product.image.name}
                  </span>
                )}
              </label>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Cadastrar Produto
              </Button>
            </Grid>
          </Grid>
        </form>

        <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
          Produtos Cadastrados
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ordem</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Imagem</TableCell>
                <TableCell>Habilitado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .sort((a, b) => a.ordem - b.ordem)
                .map((prod, index) => (
                  <TableRow key={prod.id}>
                    <TableCell>{prod.ordem}</TableCell>
                    <TableCell>{prod.nome}</TableCell>
                    <TableCell>{prod.descricao}</TableCell>
                    <TableCell>{prod.preco}</TableCell>
                    <TableCell>
                      {prod.imagem_url && (
                        <img
                          src={prod.imagem_url}
                          alt={prod.nome}
                          style={{ width: '50px' }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={prod.habilitado}
                        onChange={() => handleToggle(index)}
                        color="primary"
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default AdminDash;
