import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import authService from '../../../services/apiAuth';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import styles from './login-form.module.css';
import EyeIcon from '../../atoms/Icons/EyeIcon';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [serverErrors, setServerErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        if (serverErrors[e.target.name] || serverErrors.general) {
            setServerErrors({ ...serverErrors, [e.target.name]: null, general: null });
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login(credentials);
            const authHeader = response.headers['authorization'] || response.headers['Authorization'];
            const token = authHeader.replace('Bearer ', '');
            const userData = {
                username: credentials.username,
                role: credentials.username === 'admin' ? 'ADMIN' : 'USER'
            };
            login(userData, token);
            if (userData.role === 'ADMIN') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (err) {
            console.error("Error en el login:", err);
            if (err.response && err.response.data) {
                setServerErrors(err.response.data);
            } else {
                setServerErrors({ general: "No se pudo conectar con el servidor." });
            }
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>INICIA<br />SESIÓN</h1>

                <form onSubmit={handleSubmit}>
                    {serverErrors.general && <p className={styles.errorText}>{serverErrors.general}</p>}
                    <FormField
                        label="Username"
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Introduce tu usuario: username"
                        error={serverErrors.username}
                    />
                    <FormField
                        label="Contraseña"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Introduce tu contraseña: ********"
                        icon={<EyeIcon showPassword={showPassword} togglePassword={togglePassword} />}
                        error={serverErrors.password}
                    />
                    <Link to="#" className={styles.forgotPassword}>¿Olvidaste tu contraseña?</Link>
                    <div className={styles.submitContainer}>
                        <Button
                            type="submit"
                            text="INICIAR SESION"
                            BtnClass="primaryBtn"
                        />
                    </div>
                </form>

                <div className={styles.socialDivider}>
                    <span>O inicia sesión con</span>
                </div>

                <div className={styles.socialButtons}>
                    <Button text="Google" BtnClass="socialBtn" disabled={true} />
                    <Button text="Deezer" BtnClass="socialBtn" disabled={true} />
                </div>

                <div className={styles.registerContainer}>
                    ¿NO TIENES CUENTA?
                    <Link to="/register" className={styles.registerLink}>REGISTRATE</Link>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;