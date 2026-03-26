import styles from './room-card.module.css';
import LockIcon from '../../atoms/Icons/LockIcon';

const RoomCard = ({ title, bgImage, overlayColor }) => {

    const cardStyle = {
        backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${bgImage})`
    };

    return (
        <div className={styles.cardContainer} style={cardStyle}>
            <LockIcon />
            <div className={styles.titleWrapper}>
                <h4 className={styles.cardTitle}>{title}</h4>
            </div>
        </div>
    );
};

export default RoomCard;