import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  //   const [username, setUsername] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput  placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Phone Number" />
        <FormInput placeholder="Address" />
        <button>Submi</button>
      </form>
    </div>
  );
};

export default App;
