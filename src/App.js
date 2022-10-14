import Modal from 'react-modal';
import React, { useState } from 'react';
import './App.css';

Modal.setAppElement('#root');

function WindowModal (){
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal(){
    setIsOpen(true);
  }

  function handleCloseModal(){
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#ccc',
      border: '5px solid red'
    }
  }

  return (
    <div className='container'>
      <button className='modal-button' onClick={handleOpenModal}>
        Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <h2>Hello</h2>
        <h3>I am a modal</h3>
        <button className='close-button' onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
}


export default WindowModal;
