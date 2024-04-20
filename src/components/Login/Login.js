import React, { useContext, useState } from "react";
import SignForm from "../SignForm/SignForm";
import { Link, Navigate } from "react-router-dom";
import { btnNames } from "../../constants/btnNames";
import { AppContext } from "../../contexts/AppContext";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const appContext = useContext(AppContext);

  function handleSubmit(values) {
    onLogin(values);
  }

  return appContext.isLoggedIn ? (
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
  ) : (
    <Navigate to="/movies" replace />
  );
}

export default Login;
