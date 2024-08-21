import { Container } from '@mui/material';
import styles from './Header.module.css';
function Header() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.header}>
          <img src="/logo.jpg" alt="" />
          <div className={styles.title}>
            <h3>Ouro Preto - Construção </h3>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
