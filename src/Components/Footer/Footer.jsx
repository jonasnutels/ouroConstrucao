import styles from './Footer.module.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Link to={'tel:+558230282936'}>
          <h5>
            <LocalPhoneIcon /> Telefone
          </h5>
        </Link>
        <Link to={'https://www.instagram.com/ouropretoconstrucao/'}>
          <h5>
            <InstagramIcon /> Instagram
          </h5>
        </Link>
        <Link to={'https://api.whatsapp.com/send?phone=558230282936'}>
          <h5>
            <WhatsAppIcon /> WhatsApp
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
