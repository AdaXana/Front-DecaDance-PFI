import { Link } from 'react-router-dom';
import styles from './logo-text.module.css';
import LogoImg from './../../../assets/LogoText.png'

const LogoText = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <img src={LogoImg} alt="Logo Deca Dance Header" className={styles.logoImg} />
    </Link>
  );
};

export default LogoText;