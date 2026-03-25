import styles from './check-box.module.css'

const CheckBox = ({ checked, onChange }) => {
    return (
        <input className={styles.checkBox}
            type="checkbox"
            checked={checked}
            onChange={onChange}
        />
    );
};

export default CheckBox