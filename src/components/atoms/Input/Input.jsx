import styles from './input.module.css';

const Input = ({ type = "text", id, name, value, onChange, onBlur, placeholder, icon }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={styles.input}
      />
      {icon && <div className={styles.iconContainer}>{icon}</div>}
    </div>
  );
};

export default Input;