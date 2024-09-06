import { Container } from '@mui/material';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import styles from './Home.module.css';
import Cards from '../../Components/Card/Cards';
import { useEffect, useState } from 'react';
import { supabase } from '../../Supabase/Auth';

function Home() {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .eq('habilitado', true)
        .order('ordem', { ascending: true });

      if (error) {
        console.error('Erro ao buscar produtos:', error);
        return;
      }

      setProducts(data);
    };

    fetchProducts();
  }, []);
  if (!products) return null;
  return (
    <>
      <Header />
      <Container>
        <main className={styles.main}>
          <Cards cardsData={products} />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
