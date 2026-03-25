import styles from './hero-home.module.css';
import Button from '../../atoms/Button/Button';
import LogoImg from '../../atoms/Logo/LogoImg';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <LogoImg size="large" />
        <p className={styles.heroSubtitle}>
          Desafía tus conocimientos musicales
        </p>
        <Button
          text="Iniciar Partida"
          BtnClass="primaryBtn"
          path="/setup"
        />
      </div>
    </section>
  );
};

export default Hero;