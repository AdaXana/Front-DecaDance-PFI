import { Link } from 'react-router-dom';
import styles from './icon.module.css';
import LogoutImg from './../../../assets/LogoutIcon.png'

const LogoutIcon = ({ onLogout }) => {
  return (
    <Link to="/" onClick={onLogout} className={styles.iconBtn}>
      <img src={LogoutImg} alt="Icono cerrar Sesión" />
    </Link>
  );
};

export default LogoutIcon;