import styles from './segmented-control.module.css';

const SegmentedControl = ({ options, activeOption, onChange }) => {
    return (
        <div className={styles.container}>
            {options.map((option) => (
                <button
                    key={option.id}
                    type="button"
                    className={`${styles.tabButton} ${activeOption === option.id ? styles.active : ''}`}
                    onClick={() => onChange(option.id)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default SegmentedControl;