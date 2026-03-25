import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './icon.module.css';

const EyeIcon = ({ showPassword, togglePassword }) => {
    return (
        <span onClick={togglePassword} className={styles.eyeIconContainer}>
            {showPassword ? (
                <AiOutlineEye className={styles.eyeIcon} title="Ocultar contraseña" />
            ) : (
                <AiOutlineEyeInvisible className={styles.eyeIcon} title="Mostrar contraseña" />
            )}
        </span>
    );
};

export default EyeIcon;