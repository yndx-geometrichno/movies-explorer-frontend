import { useState } from "react";
import SignForm from "../SignForm/SignForm";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(password, email, name);
  }

  return (
    <main className="page__container">
      <SignForm
        header="Добро пожаловать!"
        email={email}
        name={name}
        password={password}
        onSubmit={handleSubmit}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
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
