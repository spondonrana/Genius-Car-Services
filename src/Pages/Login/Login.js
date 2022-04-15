import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const errorElement = "";

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = (
      <p className="text-danger w-50 d-block mx-auto">
        Error: {error?.message}
      </p>
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const navigateResetPass = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-3">Please Login</h2>

      <Form onSubmit={handleSubmit} className="w-50 d-block mx-auto">
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p className="w-50 d-block mx-auto">
        New to Genius Car?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-primary button-style-reg"
          onClick={navigateRegister}
        >
          Please Register
        </span>
      </p>

      <p className="w-50 d-block mx-auto">
        Forget Password?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-primary button-style-reg"
          onClick={navigateResetPass}
        >
          Reset Password
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
