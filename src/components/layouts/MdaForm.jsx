import React from 'react';
import { IoMdClose } from 'react-icons/io';

import TextareaInput from '../inputs/TextareaInput';
import TextInput from '../inputs/TextInput';

const MdaForm = ({ closeModal }) => {
  const submitForm = () => {
    console.log('Work in Progress...');
  };

  return (
    <div className="overlay">
      <IoMdClose className="close-btn pointer" onClick={closeModal} />
      <div className="modal-box max-w-400">
        <div className="content">
          <TextInput className="w-100 m-b-10" label="MDA/Agency Name*" />
          <TextareaInput className="w-100 m-b-10" rows={3} label="Purpose of Establishment" />
          <TextInput className="w-100 m-b-10" label="Date of Establishment" />
          <TextInput className="w-100 m-b-10" label="Address/Location" />
          <button
            type="button"
            className="btn btn-large w-100"
            onClick={submitForm}
          >
            Create MDA
          </button>
        </div>
      </div>
    </div>
  );
};

export default MdaForm;
