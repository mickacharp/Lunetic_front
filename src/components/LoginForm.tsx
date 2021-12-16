import React from "react";
import login_img from "../assets/COQUE_Plan de travail 1.png";

const LoginForm = () => {
  return (
    <div className="login-container">
        <div className="login-container__img-container">
            <img src={login_img} alt="login illustration" />
        </div>
        <div className="login-container__form"></div>
    </div>
  )
}

export default LoginForm;
