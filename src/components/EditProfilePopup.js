import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  // Подписка на контекст данных пользователя
  const currentUser = React.useContext(CurrentUserContext);

  // Стейт-переменные:
  // - инпут с именем пользователя
  const [name, setName] = React.useState('');
  // - инпут с информацией о пользователе
  const [description, setDescription] = React.useState('');

  // Запись данных пользователя при загрузке и открытии попапа в управляемые компоненты (инпуты формы)
  React.useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen, currentUser]);

  // Обработчики изменения инпутов
  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  // Обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm
      name = "edit-profile"
      title = "Редактировать профиль"
      textButton = "Сохранить"
      isOpen = {props.isOpen}
      onSubmit = {handleSubmit}
      onPopupClick = {props.onPopupClick}
      onClose = {props.onClose}
    >
      <>
        <label className="popup__input-element">
          <input
            type="text"
            placeholder="Ваше имя"
            className="popup__input popup__input_type_profile-name"
            id="input-profile-name"
            name="nameUser"
            value={name}
            onChange={handleChangeName}
            required
            min={2}
            max={40}
          />
          <span
            className="popup__input-error"
            id="input-profile-name-error"
          ></span>
        </label>
        <label className="popup__input-element">
          <input
            type="text"
            placeholder="Чем занимаетесь"
            className="popup__input popup__input_type_profile-job"
            id="input-profile-job"
            name="infoUser"
            value={description}
            onChange={handleChangeDescription}
            required
            min={2}
            max={200}
          />
          <span
            className="popup__input-error"
            id="input-profile-job-error"
          ></span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;