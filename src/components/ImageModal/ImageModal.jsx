
import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ item, modalIsOpen, closeModal }) {
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modalContent}
          overlayClassName={css.modalOverlay}
          style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }}}
    >
      
        <img className={css.modal_img} src={item.urls.regular} alt={item.description} />
          
          
      </Modal>
      
   )
}