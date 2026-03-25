import styles from './button.module.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, BtnClass, path, type = "button", onClick, disabled, icon }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    else if (path) {
      navigate(path);
    }
  };

  return (
    <button
      type={type}
      className={styles[BtnClass]}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;