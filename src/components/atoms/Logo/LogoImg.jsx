import logoImg from '../../../assets/Logo.png';
import styles from './logo-img.module.css';

const Logo = ({ size = 'small' }) => {

  const sizeClass = size === 'large' ? styles.logoLarge : styles.logoSmall;

  return (
    <img
      src={logoImg}
      alt="DecaDance Logo"
      className={`${styles.logo} ${sizeClass}`}
    />
  );
};

export default Logo;