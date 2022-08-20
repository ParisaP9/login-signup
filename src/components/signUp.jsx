import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./input";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      alert("Created Account");
    },
    validationSchema: yup.object({
      name: yup.string().required("Enter a name."),
      email: yup
        .string()
        .email("Include an'@' in the email address.")
        .required("Enter an email."),
      password: yup
        .string()
        .min(8, "Use 8 characters or more for your password.")
        .required("Enter a password."),
    }),
  });

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Create Account</h1>
      </div>
      <div className="main">
        <form onSubmit={formik.handleSubmit} className="form">
          <Input
            name="name"
            lable="Name"
            formik={formik}
            touched={formik.touched.name}
            errors={formik.errors.name}
          />
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
            <button className="btn">Sign up</button>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
