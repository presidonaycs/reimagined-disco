import React from 'react';
import { IoMdClose } from 'react-icons/io';

import SelectInput from '../inputs/SelectInput';
import TextInput from '../inputs/TextInput';

const ProfileForm = ({ closeModal }) => {
  const submitForm = () => {
    console.log('Work in Progress...');
  };

  return (
    <div className="overlay">
      <IoMdClose className="close-btn pointer" onClick={closeModal} />
      <div className="modal-box max-w-400">
        <div className="content">
          <TextInput className="w-100 m-b-10" label="First Name" />
          <TextInput className="w-100 m-b-10" label="Last Name" />
          <TextInput className="w-100 m-b-10" label="Email Address" />
          <SelectInput className="w-100 m-b-10" label="Assign MDA" options={['', 'Ministry 1']} />
          <div className="row">
            <div className="col-8 no-margin">
              <TextInput className="w-100 m-b-10" label="Assign Role" />
            </div>
            <div className="col-4 no-margin">
              <SelectInput className="w-100 m-b-10" label="Gender" options={['', 'Male', 'Female']} />
            </div>
          </div>
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

export default ProfileForm;
