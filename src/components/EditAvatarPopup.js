import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const avatarLink = React.useRef();

  // Обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarLink.current.value
    });
  }

  return (
    <PopupWithForm
      name = "edit-avatar"
      title = "Обновить аватар"
      textButton = "Сохранить"
      isOpen = {props.isOpen}
      onSubmit = {handleSubmit}
      onPopupClick = {props.onPopupClick}
      onClose = {props.onClose}
    >
      <>
        <label className="popup__input-element">
          <input
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_avatar-link"
            id="input-avatar-link"
            name="avatarUser"
            ref={avatarLink}
            required
          />
          <span className="popup__input-error" id="input-avatar-link-error"></span>
        </label>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;