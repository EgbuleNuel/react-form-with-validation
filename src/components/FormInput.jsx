import "./FormInput.css";

const FormInput = (props) => {
  const { label, onchnage, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChnage={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
