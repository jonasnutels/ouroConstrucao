import { Container } from '@mui/material';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import styles from './Home.module.css';
import Cards from '../../Components/Card/Cards';

function Home() {
  const cardsData = [
    {
      image:
        'https://images.tcdn.com.br/img/img_prod/985953/tabua_de_madeira_cambara_tauari_bruta_20x2x3m_205_1_688993f1ce4195f316fb5eb4c2d42c75.jpg',
      title: 'Madeira',
      description:
        'A madeira é um material de construção versátil e amplamente utilizado, conhecido por sua durabilidade e beleza natural. É comumente usada em estruturas, pisos e acabamentos em projetos de construção.',
    },
    {
      image:
        'https://d5gag3xtge2og.cloudfront.net/producao/34360658/G/blocos_18.jpg',
      title: 'Tijolo',
      description:
        'O tijolo é um material de construção clássico feito de argila, que é queimado em um forno. É valorizado por sua resistência, propriedades térmicas e apelo estético em construções residenciais e comerciais.',
    },
    {
      image:
        'https://www.mapadaobra.com.br/wp-content/uploads/2016/07/Novo_Layout-3.jpg',
      title: 'Concreto',
      description:
        'O concreto é um material de construção robusto e durável composto por cimento, areia e brita. É usado em fundações, paredes, pisos e vários elementos estruturais em projetos de construção.',
    },
    {
      image:
        'https://www.grupoacocearense.com.br/blog/wp-content/uploads/2023/08/tipos-de-aco-1-980x612.jpg',
      title: 'Aço',
      description:
        'O aço é um metal de alta resistência usado extensivamente na construção moderna. É comumente utilizado para estruturas, reforços e elementos arquitetônicos devido à sua força e flexibilidade.',
    },
    {
      image:
        'https://images.tcdn.com.br/img/img_prod/1210501/azulejo_decorado_kit_siro_257_1_b5e4c9e398d816f0ec500da85da5aa48.jpg',
      title: 'Azulejo',
      description:
        'O azulejo é um material durável usado em pisos, paredes e revestimentos. Está disponível em diversos materiais, incluindo cerâmica, porcelanato e pedra natural, proporcionando funcionalidade e apelo estético.',
    },
    // Adicione mais objetos conforme necessário
  ];

  return (
    <>
      <Header />
      <Container>
        <main className={styles.main}>
          <Cards cardsData={cardsData} />
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
