import styles from './search-bar.module.css';
import LensIcon from '../../atoms/Icons/LensIcon';
import Button from '../../atoms/Button/Button'; 

const SearchBar = ({ searchTerm, onSearchChange, onAddClick }) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (onAddClick) {
                onAddClick();
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchWrapper}>
                <div className={styles.iconWrapper}>
                    <LensIcon />
                </div>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder=" filtrar por titulo o autor"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <Button
                type="submit"
                text="AÑADIR CANCION"
                BtnClass="primaryBtn"
                onClick={onAddClick}
            />
        </div>
    );
};

export default SearchBar;