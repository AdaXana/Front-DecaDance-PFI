import styles from './header.module.css';
import LogoText from '../../atoms/Logo/LogoText';
import AvatarIcon from '../../atoms/Icons/AvatarIcon';
import LogoutIcon from '../../atoms/Icons/LogoutIcon';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const isLoggedIn = !!user;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className={styles.headerContainer}>
            <LogoText />
            <div className={styles.actionIcons}>
                <AvatarIcon isLoggedIn={isLoggedIn} />
                {isLoggedIn && <LogoutIcon onLogout={handleLogout} />}
            </div>
        </header>
    );
};

export default Header;