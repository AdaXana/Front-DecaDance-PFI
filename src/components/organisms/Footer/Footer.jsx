import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        {currentYear} © DecaDance
      </p>
    </footer>
  );
};

export default Footer;