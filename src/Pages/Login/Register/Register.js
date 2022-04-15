import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );

  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Updated profile");
    navigate("/home");
  };
  return (
    <div className="register-from w-50">
      <h2 className="text-primary text-center mt-3">Please Register</h2>

      <form onSubmit={handleRegister} className="w-50 d-block mx-auto">
        <input type="text" name="name" id="" placeholder="Your name" />

        <input type="email" name="email" id="" placeholder="Your email" />

        <input type="password" name="password" id="" placeholder="Password" />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id=""
        />
        {/* <label
          className={agree ? "ps-2 text-primary" : "ps-2 text-danger"}
          htmlFor="terms"
        >
          Accepts trams and condition{" "}
        </label> */}
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accepts trams and condition{" "}
        </label>
        <input
          disabled={!agree}
          type="submit"
          value="Register"
          className="mt-2 btn btn-primary"
        />
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
