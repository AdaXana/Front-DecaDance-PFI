// import styles from './check-box.module.css'

// const CheckBox = ({ checked, onChange }) => {
//     return (
//         <input className={styles.checkBox}
//             type="checkbox"
//             checked={checked}
//             onChange={onChange}
//         />
//     );
// };

// export default CheckBox

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