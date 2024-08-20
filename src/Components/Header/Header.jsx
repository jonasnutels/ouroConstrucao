import { Container } from '@mui/material';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.header}>
          <img src="/logo.jpg" alt="" />
          <div className={styles.title}>
            <h3>Ouro Preto - Construção </h3>
            <div className={styles.menu}>
              <Link to={'/'}>Home</Link>
              <Link to={'/produtos'}>Produtos</Link>
              <Link to={'/contato'}> Contato</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
