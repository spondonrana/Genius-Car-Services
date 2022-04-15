import React from "react";
import google from "../../../img/social/google.png";
import facebook from "../../../img/social/Facebookd.png";
import Github from "../../../img/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger w-50 d-block mx-auto">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate("/");
  }

  return (
    <div>
      <div className="w-50 d-block mx-auto my-2">
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          <p className="mt-2 px-1">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        </div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "25px" }} className="mx-1" src={google} alt="" />
          Google Sign In
        </button>
        <button className="btn btn-primary w-50 d-block mx-auto my-2">
          <img
            style={{ width: "25px" }}
            className="mx-1"
            src={facebook}
            alt=""
          />
          Facebook Sign In
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-50 d-block mx-auto"
        >
          <img style={{ width: "25px" }} className="mx-1" src={Github} alt="" />
          Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
