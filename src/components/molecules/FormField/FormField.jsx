import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import styles from './form-field.module.css';

const FormField = ({ label, type, id, name, value, onChange, onBlur, placeholder, icon, error }) => {
  return (
    <div className={styles.fieldContainer}>
      <Label text={label} htmlFor={id} />
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        icon={icon}
      />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default FormField;