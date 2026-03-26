import styles from './cover.module.css';
import defaultCover from '../../../assets/CoverDefault.png';

const Cover = ({ src, alt = "Song cover", size = "small" }) => {
    return (
        <img 
            src={src || defaultCover}
            alt={alt} 
            className={`${styles.cover} ${styles[size]}`} 
        />
    );
};

export default Cover;