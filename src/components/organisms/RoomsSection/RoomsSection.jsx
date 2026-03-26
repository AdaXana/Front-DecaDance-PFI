import styles from './rooms-section.module.css';
import RoomCard from '../../molecules/RoomCard/RoomCard';
import hitsBg from '../../../assets/HitsBG.svg';
import rockBg from '../../../assets/Rock80sBG.svg';
import rapBg from '../../../assets/RapBG.svg';

const RoomsSection = () => {
  return (
    <section className={styles.sectionContainer}>

      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Salas destacadas</h3>
        <span className={styles.seeAllLink}>Ver todas</span>
      </div>

      <div className={styles.cardsGallery}>
        <RoomCard
          title="Hits"
          bgImage={hitsBg}
          overlayColor="rgba(128, 0, 128, 0.8)"
        />
        <RoomCard
          title="Rock 80s"
          bgImage={rockBg}
          overlayColor="rgba(0, 50, 180, 0.8)"
        />

        <RoomCard
          title="Rap"
          bgImage={rapBg}
          overlayColor="rgba(0, 150, 50, 0.8)"
        />

      </div>
    </section>
  );
};

export default RoomsSection;