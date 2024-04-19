import React, { useState } from "react";
import SignForm from "../SignForm/SignForm";
import { Link } from "react-router-dom";
import { btnNames } from "../../constants/btnNames";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(values) {
    onLogin(values);
  }

  return (
    <main className="page__container">
      <SignForm
        header="Рады видеть!"
        email={email}
        password={password}
        onSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
        buttonText={btnNames.login}
        formType="form__login"
      >
        <p className="sign__link-container">
          {btnNames.alreadyRegistered}
          <Link to="/signup" className="sign__link">
            {btnNames.registration}
          </Link>
        </p>
      </SignForm>
    </main>
  );
}

export default Login;
