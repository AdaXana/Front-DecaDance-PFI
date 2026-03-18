import styles from './input.module.css';

const Input = ({ type = "text", placeholder, className, ...props }) => {
  return (
    <input type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className || ""}`}
      {...props}
    />
  );
};



export default Input;