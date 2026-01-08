import React from "react";

const Modal = ({ isOpen, title, onClose, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-sheet">
        <header className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </header>
        <div className="modal-body">{children}</div>
        {footer && <footer className="modal-footer">{footer}</footer>}
      </div>
    </div>
  );
};

export default Modal;
