import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import authService from '../../../services/apiAuth';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import styles from './login-form.module.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
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
            console.error("Error en la petición:", err);
            setError("Error de conexión o credenciales incorrectas.");
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>INICIA<br />SESIÓN</h1>

                <form onSubmit={handleSubmit}>
                    {error && <p className={styles.errorText}>{error}</p>}
                    <FormField
                        label="Username"
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Introduce tu usuario: username"
                    />
                    <FormField
                        label="Contraseña"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Introduce tu contraseña: ********"
                        icon={
                            <span onClick={togglePassword} className={styles.eyeIconContainer}>
                                {showPassword ? (
                                    <AiOutlineEye className={styles.eyeIcon} title="Ocultar contraseña" />
                                ) : (
                                    <AiOutlineEyeInvisible className={styles.eyeIcon} title="Mostrar contraseña" />
                                )}
                            </span>
                        }
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