import LockIconImg from '../../../assets/LockIcon.svg';
import styles from './icon.module.css';

const LockIcon = () => {
  return (
    <img
      src={LockIconImg}
      alt="Sala bloqueada, futura implementación."
      className={styles.lockIcon}
    />
  );
};

export default LockIcon;