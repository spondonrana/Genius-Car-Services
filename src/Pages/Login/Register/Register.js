import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(name, email, password);
  };
  return (
    <div className="register-from w-50">
      <h2 className="text-primary text-center mt-3">Please Register</h2>

      <form onSubmit={handleRegister} className="w-50 d-block mx-auto">
        <input type="text" name="name" id="" placeholder="Your name" />

        <input type="email" name="email" id="" placeholder="Your email" />

        <input type="password" name="password" id="" placeholder="Password" />
        <input type="checkbox" name="terms" id="" />
        <label htmlFor="terms">Accepts trams and condition </label>
        <input type="submit" value="Register" className="mt-2" />
      </form>

      <p className="w-50 d-block mx-auto">
        Already Have An Account?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-danger button-style-reg"
          onClick={navigateLogin}
        >
          Please Login
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
