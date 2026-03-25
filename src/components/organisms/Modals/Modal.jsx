import styles from './messageModal.module.css';
import Button from '../../atoms/Button/Button';
import { useEffect, useState } from 'react';

const Modal = ({ message, btnText, btnPath, btnClass }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000); // ajustar segun mis mockups en la funcion
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const finalBtnClass = (btnClass === 'X' && isMobile) ? 'Xmobile' : btnClass; //ajustar segun la clase del btn por ahora "X"

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.content}>
          <p className={styles.message}>{message}</p>
        </div>

        <div className={styles.actions}>
          <Button
            text={btnText}
            path={btnPath}
            BtnClass={finalBtnClass}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;