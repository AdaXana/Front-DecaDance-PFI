import styles from './message-modal.module.css';
import Button from '../../atoms/Button/Button';

const MessageModal = ({ 
    isOpen, 
    title, 
    message, 
    onClose, 
    onConfirm, 
    confirmText = "ACEPTAR", 
    cancelText = "CANCELAR",
    isDestructive = false
}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={`${styles.modal} ${isDestructive ? styles.destructive : styles.info}`}>
                {title && <h3 className={styles.title}>{title}</h3>}
                <p className={styles.message}>{message}</p>
                <div className={styles.actions}>
                    {onClose && (
                        <button className={styles.cancelBtn} onClick={onClose}>
                            {cancelText}
                        </button>
                    )}
                    {onConfirm && (
                        <Button 
                            text={confirmText} 
                            BtnClass="primaryBtn" 
                            className={isDestructive ? styles.deleteBtn : styles.confirmBtn}
                            onClick={onConfirm} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageModal;