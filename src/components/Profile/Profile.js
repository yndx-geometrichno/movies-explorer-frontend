import React, { useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { AppContext } from "../../contexts/AppContext";
import useFormWithValidation from "../../utils/useFormWithValidation";

function Profile({
  onSignOut,
  userName,
  userEmail,
  onEditSubmit,
}) {
  const { errorMessage, setErrorMessage, inputStatus, setInputStatus } =
    useContext(AppContext);
  const { values, handleChange, isValid } = useFormWithValidation();

  function handleInputChange(e) {
    setErrorMessage("");
    handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEditSubmit(values);
  }

  function handleSignOut(e) {
    e.preventDefault();
    onSignOut();
  }

  return (
    <>
      <Header />
      <div className="profile">
        <h2 className="profile__header">Привет, {userName}!</h2>
        <form id="profileForm" className="profile__form">
          <div className="profile__data-container">
            <label className="profile__data profile__data-header">Имя</label>
            <input
              id="name"
              type="text"
              name="name"
              className="profile__data profile__data-user"
              placeholder="Имя"
              form="profileForm"
              value={values.name || userName}
              disabled={inputStatus === true ? "" : "disabled"}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="profile__data-container">
            <label className="profile__data profile__data-header">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              className="profile__data profile__data-user"
              form="profileForm"
              placeholder="Email"
              value={values.email || userEmail}
              disabled={inputStatus === true ? "" : "disabled"}
              onChange={handleInputChange}
              required
            />
          </div>
        </form>
        <div className="profile__btn-container">
          {inputStatus === true ? (
            <>
              <div className="profile__error">{errorMessage}</div>
              <button
                className="profile__save-btn profile__btn"
                type="submit"
                onClick={handleSubmit}
                form="editProfile"
                disabled={!isValid}
              >
                Сохранить
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="profile__edit-btn profile__btn"
                onClick={(e) => {
                  e.preventDefault();
                  setInputStatus(true);
                }}
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__logout-btn profile__btn"
                onClick={handleSignOut}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
