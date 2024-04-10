import React, { useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  const [userName, setUserName] = useState("DefaultName");
  const [userEmail, setUserEmail] = useState("DefaultEmail");
  const [inputStatus, setInputStatus] = useState(false);

  function handleEditProfile() {
    if (inputStatus === false) {
      setInputStatus(true);
    } else {
      setInputStatus(false);
    }
  }

  return (
    <>
      <Header />
      <div className="profile">
        <h2 className="profile__header">Привет, {userName}!</h2>
        <div className="profile__data-container">
          <label className="profile__data profile__data-header">Имя</label>
          <input
            type="text"
            className="profile__data profile__data-user"
            placeholder="Имя"
            value={userName}
            disabled={inputStatus === true ? "" : "disabled"}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="profile__data-container">
          <label className="profile__data profile__data-header">E-mail</label>
          <input
            type="text"
            className="profile__data profile__data-user"
            placeholder="Email"
            value={userEmail}
            disabled={inputStatus === true ? "" : "disabled"}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="profile__btn-container">
          {inputStatus === true ? (
            <button
              className="profile__save-btn profile__btn"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleEditProfile();
              }}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                type="button"
                className="profile__edit-btn profile__btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleEditProfile();
                }}
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__logout-btn profile__btn"
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
