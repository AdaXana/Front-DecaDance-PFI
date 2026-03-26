import { Link } from 'react-router-dom';
import styles from './icon.module.css';
import AvatarImg from './../../../assets/AvatarIcon.png';

const AvatarIcon = ({ isLoggedIn }) => {
  const destination = isLoggedIn ? "/profile" : "/login";
  return (
    <Link to={destination} className={styles.iconBtn}>
      <img src={AvatarImg} alt="Icono usario generico" />
    </Link>
  );
};

export default AvatarIcon;