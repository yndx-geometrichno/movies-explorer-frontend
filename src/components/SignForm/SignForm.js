import React, { useContext } from "react";
import "./SignForm.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { placeholders } from "../../constants/placeholders";

function SignForm({ header, buttonText, formType, children, onSubmit }) {
  const { errorMessage, setErrorMessage, isInputDisabled } =
    useContext(AppContext);
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleInputChange(e) {
    setErrorMessage("");
    handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <div className="sign">
      <div className="sign__fields-container">
        <Link to={"/"} className="sign__logo"></Link>
        <h2 className="sign__header">{header}</h2>
        <form
          className={`sign__form ${formType}`}
          onSubmit={onSubmit}
          id="signForm"
        >
          {formType === "form__register" && (
            <>
              <label className="sign__form-label" htmlFor="name">
                {placeholders.name}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className={`sign__form-input ${
                  errors.name && "sign__form-input_error"
                }`}
                minLength={2}
                maxLength={30}
                placeholder={placeholders.name}
                value={values.name || ""}
                onChange={handleInputChange}
                required
                disabled={isInputDisabled}
              ></input>
              {errors.name ? (
                <span className="sign__form-error sign__form-error_visible">
                  {errors.name}
                </span>
              ) : null}
            </>
          )}
          <label className="sign__form-label" htmlFor="email">
            {placeholders.email}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={placeholders.email}
            className={`sign__form-input ${
              errors.email && "sign__form-input_error"
            }`}
            value={values.email || ""}
            onChange={handleInputChange}
            required
            disabled={isInputDisabled}
          ></input>
          {errors.email ? (
            <span className="sign__form-error sign__form-error_visible">
              {errors.email}
            </span>
          ) : null}
          <label className="sign__form-label" htmlFor="password">
            {placeholders.password}
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder={placeholders.password}
            className={`sign__form-input ${
              errors.password && "sign__form-input_error"
            }`}
            value={values.password || ""}
            onChange={handleInputChange}
            required
            disabled={isInputDisabled}
          ></input>
          {errors.password ? (
            <span className="sign__form-error sign__form-error_visible">
              {errors.password}
            </span>
          ) : null}
        </form>
      </div>
      <div className="sign__actions-container">
        {errorMessage ? (
          <span className="sign__form-error sign__form-error_visible">
            {errorMessage}
          </span>
        ) : null}
        <button
          className="sign__button"
          type="submit"
          onClick={handleSubmit}
          form="signForm"
          disabled={!isValid || isInputDisabled}
        >
          {buttonText}
        </button>
        {children}
      </div>
    </div>
  );
}

export default SignForm;
