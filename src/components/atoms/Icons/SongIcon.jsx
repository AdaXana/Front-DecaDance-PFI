import { IoMusicalNote } from 'react-icons/io5';
import styles from './icon.module.css';

const SongIcon = ({ isActive, toggleActive }) => {
    return (
        <span onClick={toggleActive} className={styles.actionIconContainer}>
            <IoMusicalNote 
                className={isActive ? styles.songIconActive : styles.songIconInactive} 
                title={isActive ? "Desactivar del juego" : "Activar en el juego"} 
            />
        </span>
    );
};

export default SongIcon;