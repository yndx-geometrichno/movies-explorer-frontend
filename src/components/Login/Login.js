import React, { useState } from "react";
import SignForm from "../SignForm/SignForm";
import { Link } from "react-router-dom";

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
        buttonText="Войти"
        formType="form__login"
      >
        <p className="sign__link-container">
          Еще не зарегистрированы?
          <Link to="/signup" className="sign__link">
            Регистрация
          </Link>
        </p>
      </SignForm>
    </main>
  );
}

export default Login;
