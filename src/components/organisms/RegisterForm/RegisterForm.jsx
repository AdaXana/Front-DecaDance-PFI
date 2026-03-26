import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../../services/apiAuth';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import styles from './register-form.module.css';
import EyeIcon from '../../atoms/Icons/EyeIcon';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        termsAccepted: false
    });
    const [serverErrors, setServerErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (serverErrors[e.target.name]) {
            setServerErrors({ ...serverErrors, [e.target.name]: null });
        }
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            termsAccepted: e.target.checked
        });
        if (serverErrors.termsAccepted) {
            setServerErrors({ ...serverErrors, termsAccepted: null });
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerErrors({});

        if (!formData.termsAccepted) {
            setServerErrors({ general: "Debes aceptar los Términos y Condiciones para registrarte." });
            return;
        }
        try {
            const dataToSend = {
                username: formData.username,
                email: formData.email,
                password: formData.password
            };
            await authService.register(dataToSend);
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err) {
            console.error("Error en el registro:", err);
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
                <h1 className={styles.title}>CREAR<br />CUENTA</h1>

                <form onSubmit={handleSubmit}>
                    {serverErrors.general && <p className={styles.errorText}>{serverErrors.general}</p>}

                    <FormField
                        label="NOMBRE DE USUARIO"
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Tu nombre de usuario"
                        error={serverErrors.username}
                    />

                    <FormField
                        label="CORREO ELECTRÓNICO"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@email.com"
                        error={serverErrors.email}
                    />

                    <FormField
                        label="CONTRASEÑA"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="********"
                        icon={<EyeIcon showPassword={showPassword} togglePassword={togglePassword} />}
                        error={serverErrors.password}
                    />

                    <Checkbox
                        id="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleCheckboxChange}
                    >
                        Acepto los <Link to="/terms" className={styles.termsLink}>Términos y Condiciones</Link>
                    </Checkbox>

                    <div className={styles.submitContainer}>
                        <Button
                            type="submit"
                            text="REGISTRARSE"
                            BtnClass="primaryBtn"
                            disabled={!formData.termsAccepted || success}
                        />
                    </div>
                </form>

                <div className={styles.socialDivider}>
                    <span>O REGÍSTRATE CON</span>
                </div>

                <div className={styles.socialButtons}>
                    <Button text="Google" BtnClass="socialBtn" disabled={true} />
                    <Button text="Deezer" BtnClass="socialBtn" disabled={true} />
                </div>

                <div className={styles.loginContainer}>
                    ¿YA TENGO CUENTA?
                    <Link to="/login" className={styles.loginLink}>INICIAR SESIÓN</Link>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;