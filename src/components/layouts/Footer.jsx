import React from 'react';

function formattedDate(date){

  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  
   return  year
}

const year = formattedDate(new Date())

const Footer = () => (
  <footer>
    <div className="content space-between flex-v-center">
      <div className="footer-inner-left">
        <p>{year} Edo State Government Digital Office</p>
      </div>
    </div>
  </footer>
);

export default Footer;
