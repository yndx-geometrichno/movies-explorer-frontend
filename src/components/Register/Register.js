import { useState } from "react";
import SignForm from "../SignForm/SignForm";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  function handleSubmit(values) {
    onRegister(values);
  }

  return (
    <main className="page__container">
      <SignForm
        header="Добро пожаловать!"
        onSubmit={handleSubmit}
        buttonText="Зарегистрироваться"
        formType="form__register"
      >
        <p className="sign__link-container">
          Уже зарегистрированы?
          <Link to="/signin" className="sign__link">
            Войти
          </Link>
        </p>
      </SignForm>
    </main>
  );
}

export default Register;
