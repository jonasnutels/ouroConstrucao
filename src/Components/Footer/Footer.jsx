import styles from './Footer.module.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <h5>
          <LocalPhoneIcon /> Telefone
        </h5>
        <h5>
          <InstagramIcon /> Instagram
        </h5>
        <h5>
          <WhatsAppIcon /> WhatsApp
        </h5>
      </div>
    </div>
  );
}

export default Footer;
