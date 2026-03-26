import { FiEdit2 } from 'react-icons/fi';
import styles from './icon.module.css';

const PenIcon = ({ onClick }) => {
    return (
        <span onClick={onClick} className={styles.actionIconContainer}>
            <FiEdit2 className={styles.penIcon} title="Editar canción" />
        </span>
    );
};

export default PenIcon;