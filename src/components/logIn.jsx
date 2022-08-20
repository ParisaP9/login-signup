import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./input";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      alert("logged in");
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Include an'@' in the email address.")
        .required("Please enter your email."),
      password: yup.string().required("Please enter your password."),
    }),
  });
  return (
    <div className="container">
      <div className="title">
        <h1>Login</h1>
      </div>
      <form onSubmit={formik.handleSubmit} className="form">
        <Input
          name="email"
          lable="Email Address"
          formik={formik}
          touched={formik.touched.email}
          errors={formik.errors.email}
        />
        <Input
          name="password"
          lable="Password"
          formik={formik}
          touched={formik.touched.password}
          errors={formik.errors.password}
        />
        <div className="btns">
          <button className="btn">Login</button>
          Need an account? <Link to="/signup">Sign up</Link>
        </div>
        <Link className="forgot-pass" to="#">
          Forgot password?
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
