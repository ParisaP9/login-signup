const Input = ({ name, lable, formik, touched, errors }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input type={name} id={name} {...formik.getFieldProps(name)} />
      {touched && errors ? <small className="errors">{errors}</small> : null}
    </div>
  );
};

export default Input;
