import { useContext } from "react";
import { btnNames } from "../../constants/btnNames";
import { AppContext } from "../../contexts/AppContext";
import SignForm from "../SignForm/SignForm";
import { Link, Navigate } from "react-router-dom";

function Register({ onRegister }) {
  const appContext = useContext(AppContext);

  function handleSubmit(values) {
    onRegister(values);
  }

  return appContext.isLoggedIn ? (
    <main className="page__container">
      <SignForm
        header="Добро пожаловать!"
        onSubmit={handleSubmit}
        buttonText={btnNames.registration}
        formType="form__register"
      >
        <p className="sign__link-container">
          {btnNames.alreadyRegistered}
          <Link to="/signin" className="sign__link">
            {btnNames.login}
          </Link>
        </p>
      </SignForm>
    </main>
  ) : (
    <Navigate to="/movies" replace />
  );
}

export default Register;
