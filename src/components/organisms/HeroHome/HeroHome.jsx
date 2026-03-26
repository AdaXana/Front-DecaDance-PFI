import styles from './hero-home.module.css';
import Button from '../../atoms/Button/Button';
import MessageModal from '../Modals/MessageModal';
import useAuth from '../../../hooks/useAuth';
import LogoImg from '../../atoms/Logo/LogoImg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [showWarningModal, setShowWarningModal] = useState(false);

    const handleStartGame = () => {
        if (!user) {
            setShowWarningModal(true);
        } else {
            navigate('/setup/new');
        }
    };
  

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
          onClick={handleStartGame}
        />
      </div>
      <MessageModal 
          isOpen={showWarningModal} 
          title="ATENCIÓN"
          message="Para empezar a jugar, al menos un usuario tiene que estar registrado e iniciar sesión para ser el Host de la partida."
          onConfirm={() => setShowWarningModal(false)} 
          confirmText="ENTENDIDO"
      />
    </section>
  );
};

export default Hero;