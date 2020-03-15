import React from "react";
import { MdClose } from "react-icons/md";

export const Modal = ({ header, closeIcon, buttons, text, close }) => {
  return (
    <div className="modal">
      <header className="header">
        {header}
        {closeIcon && (
          <button onClick={close} className="close-btn">
            <MdClose />
          </button>
        )}
      </header>
      <p className="modal-text">{text}</p>
      <footer className="footer">{buttons}</footer>
    </div>
  );
};
