import React from "react";
import "./SignForm.css";
import { Link } from "react-router-dom";

function SignForm({
  header,
  buttonText,
  formType,
  email,
  setEmail,
  name,
  setName,
  password,
  setPassword,
  children,
  onSubmit,
}) {
  // const currentPath = window.location.pathname;

  return (
    <div className="sign">
      <div className="sign__container">
        <Link to={"/"} className="sign__logo"></Link>
        <h2 className="sign__header">{header}</h2>
        <form className={`sign__form ${formType}`} onSubmit={onSubmit}>
          {formType === "form_type_register" && (
            <>
              <label className="sign__form-label" for="name">
                Имя
              </label>
              <input
                id="name"
                type="name"
                className="sign__form-input"
                value={name}
                onChange={({ target }) => setName(target.value)}
              ></input>
            </>
          )}
          <label className="sign__form-label" for="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="sign__form-input sign__form-input_type_error"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          ></input>
          <label className="sign__form-label" for="password">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            className="sign__form-input sign__form-input_type_error"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          ></input>
          <span className="sign__form-error sign__form-error_visible">
            Error
          </span>
          <button className="sign__button" type="submit">
            {buttonText}
          </button>
        </form>
        {children}
      </div>
    </div>
  );
}

export default SignForm;
