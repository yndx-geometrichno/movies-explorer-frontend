import { btnNames } from "../../constants/btnNames";
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
  );
}

export default Register;
