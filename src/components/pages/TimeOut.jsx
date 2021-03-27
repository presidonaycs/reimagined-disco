import { Button, makeStyles, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { GiEmptyHourglass } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const BooButton = withStyles({
  root: {
    backgroundColor: "green",
    textTransform: 'none',
    borderRadius: '30px 30px 30px 30px',
    padding: '6px 120px',
    margin: '2px',
    width: '40px',
    color:'white'
  }
})(Button);

const useStyles = makeStyles({
  paper:{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' , 
        padding:'16px 40px 16px 40px', 
        borderRadius:'8px',
        backgroundColor:'white'
          
  }
})



const TimeOut = () => {
  const classes = useStyles();
  const user = 'Osagie';
  const [showFormModal, setShowFormModal] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState([]);

  const closeModal = () => {
    setSelectedRecord([]);
    setShowFormModal(false);
    console.log('clicked')
  };

  return (
    <div >

      <div className="overlay">
        <IoMdClose className="close-btn pointer" onClick={closeModal} />
        <div className="modal-box" style={{ width: '80vw', fontFamily: 'auto', backgroundColor: 'transparent', display: 'flex', justifyContent:'center', alignItems:'center' }}>
          <div className={classes.paper}>
            <div><GiEmptyHourglass variant='outlined' style={{fontSize:'74px'}}/></div>
            <div style={{paddingBottom:'12px'}}><Typography variant='body2' style={{fontWeight:'bolder'}}>Hello, {user}</Typography></div>
            <div style={{fontWeight:'bolder'}}>Your System has been idle for a while</div>
            <div style={{fontWeight:'bolder', paddingBottom:'12px'}}>please login to continue</div>
            <div>
              <BooButton>
                Continue
              </BooButton>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default TimeOut;
