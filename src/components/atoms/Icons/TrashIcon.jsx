import { FiTrash2 } from 'react-icons/fi';
import styles from './icon.module.css';

const TrashIcon = ({ onClick }) => {
    return (
        <span onClick={onClick} className={styles.actionIconContainer}>
            <FiTrash2 className={styles.trashIcon} title="Eliminar definitivamente" />
        </span>
    );
};

export default TrashIcon;