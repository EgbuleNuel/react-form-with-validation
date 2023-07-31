import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text ",
      placeholder: "Username",
      label: "username",
      errorMessage:
        "Username should be 3-16 characters and should not incllude any special character",
    },
    {
      id: 2,
      name: "email",
      type: "text ",
      placeholder: "Email",
      label: "email",
      errorMessage: "Enter a valid Email Address",
    },
    {
      id: 3,
      name: "birthday",
      type: "date ",
      placeholder: "Birthday",
      label: "birthday",
      errorMessage: "",
    },
    {
      id: 4,
      name: "password",
      type: "Password ",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 character and it should include at least 1 letter, 1 number and 1 special character",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text ",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password do not match",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>REGISTER</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
