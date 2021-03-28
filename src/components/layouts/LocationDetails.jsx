import React from 'react';

import LocationIcon from '../../assets/images/location-icon-100.png';

const LocationDetails = ({ details = {} }) => (
  <div className="location-details flex flex-v-center">
    <div className="m-r-5 right-text" style={{ paddingTop: '3px' }}>
      <p className="location">{details.userName || 'Uhunmwonde, Edo State'}</p>
      <p className="login-time">{details.userRole || 'Time of login: 08:45am'}</p>
    </div>
    <div className="flex">
      <img src={LocationIcon} alt="user avater" />
    </div>
  </div>
);

export default LocationDetails;
