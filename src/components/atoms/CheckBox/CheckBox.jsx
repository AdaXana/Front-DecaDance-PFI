import styles from './check-box.module.css';

const Checkbox = ({ id, checked, onChange, children }) => {
  return (
    <label htmlFor={id} className={styles.container}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.nativeCheckbox}
      />
      <span className={styles.customCheckbox}></span>
      <span className={styles.label}>{children}</span>
    </label>
  );
};

export default Checkbox;