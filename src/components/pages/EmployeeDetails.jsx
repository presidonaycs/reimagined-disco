import React, { useEffect } from 'react';
// import { RiAddLine } from 'react-icons/ri';

import ProfilePix from '../../assets/images/profile-pix.jpg';
import FormSearchInput from '../inputs/FormSearchInput';
import TextInput from '../inputs/TextInput';
import LocationDetails from '../layouts/LocationDetails';

const EmployeeDetails = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EDSG - Employee Details';
  }, []);

  return (
    <div className="w-100">
      <div className="w-100 flex space-between flex-v-center">
        <h2>Global System Administrator</h2>
        <LocationDetails />
      </div>
      <div className="w-100 flex space-between m-t-20 flex-v-center">
        <h4 className="san-sherif">Staff Onboarding</h4>
      </div>
      <div className="w-100 m-t-20 user-full-details">
        <div className="tab-btns w-100">
          <button type="button" className="active">Official Details</button>
          <button type="button" className="">Personal</button>
          <button type="button" className="">Dependant</button>
          <button type="button" className="">Education</button>
          <button type="button" className="">Profession</button>
          <button type="button" className="">Training</button>
          <button type="button" className="">Work Experience</button>
          <button type="button" className="">Referee/Guarantor</button>
          <button type="button" className="">Access/Privileges</button>
        </div>
        <div className="w-100 flex">
          <div className="left">
            <div className="content w-100">
              <div className="w-100 official-details">
                <FormSearchInput className="w-100 m-b-10" label="Email Address" />
                <div className="row">
                  <div className="col-6 no-margin">
                    <FormSearchInput className="w-100 m-b-10" label="Assigned Role" />
                  </div>
                  <div className="col-6 no-margin">
                    <TextInput className="w-100 m-b-10" label="Current Level" />
                  </div>
                </div>
                <TextInput className="w-100 m-b-10" label="Assigned MDA" />
                <div className="row">
                  <div className="col-6 no-margin">
                    <TextInput className="w-100 m-b-10" label="Salary Account Number" />
                  </div>
                  <div className="col-6 no-margin">
                    <TextInput className="w-100 m-b-10" label="NIN" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 no-margin">
                    <FormSearchInput className="w-100 m-b-10" label="Salary Domiciled Bank" />
                  </div>
                  <div className="col-6 no-margin">
                    <TextInput className="w-100 m-b-10" label="BVN" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 no-margin">
                    <button type="button" className="btn btn-light w-100 btn-large">Update Form</button>
                  </div>
                  <div className="col-6 no-margin">
                    <button type="button" className="btn w-100 btn-large">Publish Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <button type="button" className="btn btn-round m-b-10 flex btn-light flex-v-center">
              <RiAddLine />
              Create/Add New Category
            </button>
            <button type="button" className="btn btn-round m-b-10 flex btn-light flex-v-center">
              <RiAddLine />
              Add New Sub Category
            </button>
            <button type="button" className="btn btn-round m-b-10 flex btn-light flex-v-center">
              <RiAddLine />
              Add Field
            </button> */}
            <div className="w-100 m-t-40 center-text profile-brief">
              <img src={ProfilePix} alt="profile avater" />
              <div className="brief m-t-20">
                <h4>Adeleke Ogunlanrefemi</h4>
                <hr />
                <p className="m-b-10">
                  <b>Engagement Date:&nbsp;</b>
                  August 1, 2019
                </p>
                <p className="m-b-10">
                  <b>Duration on Grade:&nbsp;</b>
                  30 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
