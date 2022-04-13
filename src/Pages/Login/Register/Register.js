import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  };
  return (
    <div className="register-from">
      <h2 className="text-primary text-center mt-3">Please Register</h2>

      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your name" />
        <br />
        <input type="email" name="email" id="" placeholder="Your email" />
        <br />
        <input type="password" name="password" id="" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>

      <p>
        Already Have An Account?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-danger button-style-reg"
          onClick={navigateLogin}
        >
          Please Login
        </span>
      </p>
    </div>
  );
};

export default Register;
