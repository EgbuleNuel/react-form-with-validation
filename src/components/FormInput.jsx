import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      <label htmlFor="">Username</label>
      <input placeholder={props.placeholder} ref={this.props.ref} />
    </div>
  );
};

export default FormInput;
