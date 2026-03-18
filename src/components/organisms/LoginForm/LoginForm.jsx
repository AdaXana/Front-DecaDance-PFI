// import { useState } from "react";
// import styles from "./login-form.module.css";
// import FormField from '../../molecules/FormField/FormField';
// import Button from "../../atoms/Button/Button";
// import userService from "../../../service/apiAccount";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";

// const validate = (form) => {
//   const errors = {};
//   if (!form.email.trim()) {
//     errors.email = "Email is required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!form.password.trim()) {
//     errors.password = "Password is required";
//   }
//   return errors;
// };

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [touched, setTouched] = useState({});
//   const [serverErrors, setServerErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (serverErrors[name]) {
//       setServerErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const handleBlur = (e) => {
//     setTouched((prev) => ({ ...prev, [e.target.name]: true }));
//   };

//   const frontendErrors = validate(formData);

//   const getError = (field) =>
//     (touched[field] && frontendErrors[field]) || serverErrors[field];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setTouched({ email: true, password: true });
//     if (Object.keys(frontendErrors).length > 0) return;

//     setIsLoading(true);
//     try {
//       const userData = await userService.login(formData);
//       login(userData);                                      
//       navigate("/userpanel");/*revisar segun si es desde setupgame o desde /home/login*/ 
//     } catch (error) {
//       if (error.response?.status === 400 && error.response?.data) {
//         setServerErrors(error.response.data);
//       } else {
//         setServerErrors({ general: "Invalid email or password" });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className={styles.container}>
//       <h1 className={styles.title}>Login</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div className={styles.fields}>
//           <FormField
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={getError("email")}
//             tabIndex={1}
//             accessKey="e"
//             aria-label="Email address"
//           />
//           <FormField
//             label="Password"
//             name="password"
//             type="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={getError("password")}
//             tabIndex={2}
//             accessKey="p"
//             aria-label="Account Password "
//           />
//           {serverErrors.general && (
//             <div className={styles.error}>{serverErrors.general}</div>
//           )}
//         </div>
//         <div className={styles.actions}>
//           <Button
//             type="submit"
//             text={isLoading ? "Loading..." : "Log In"}
//             BtnClass="neon"
//             disabled={isLoading}
//           />
//           <Button
//             type="button"
//             text="Cancel"
//             BtnClass="cancel"
//             path="/home"
//           />
//         </div>
//       </form>
//     </section>
//   );
// };

// export default LoginForm;