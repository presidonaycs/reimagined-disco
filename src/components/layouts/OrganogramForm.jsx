import React from 'react';
import { IoMdClose } from 'react-icons/io';

import FormSearchInput from '../inputs/FormSearchInput';

const OrganogramForm = ({ closeModal }) => {
  const submitForm = () => {
    console.log('Work in Progress...');
  };

  return (
    <div className="overlay">
      <IoMdClose className="close-btn pointer" onClick={closeModal} />
      <div className="modal-box max-w-400">
        <div className="content">
          <FormSearchInput className="w-100 m-b-10" label="Select MDA" />
          <FormSearchInput className="w-100 m-b-10" label="Select Staff (You can select multiple names)" />
          <FormSearchInput className="w-100 m-b-10" label="Select name of Reporting Officer" />
          <FormSearchInput className="w-100 m-b-10" label="Select Second Line Officer (Counter Signing Officer)" />
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

export default OrganogramForm;
