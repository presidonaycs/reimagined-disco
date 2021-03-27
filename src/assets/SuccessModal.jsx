import * as React from 'react';
import Cookies from 'universal-cookie';
import { IoMdClose } from 'react-icons/io';
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

const cookies = new Cookies();
const SuccessModal = ({ closeModal, action = 'Success', show }) => {

const closeMode =()=>{
  closeModal();
  window.location.reload();
}

  if(show){
  return (
    
    <div className='overlay' style={{ alignContent: 'center', justifyContent: 'center' }}>
      <div
        className='modal-box max-w-400'
        style={{ boxShadow: '0px 2px 6px #0000000A', position: 'relative' }}>
        <div className='content'>
          <IoMdClose
            className='pointer btn-round'
            style={{
              position: 'absolute',
              top: '8px',
              right: '15px',
              fontSize: '24px',
              color: '#fff',
              backgroundColor: 'rgba(209, 26, 42, .9)',
              padding: '3px',
            }}
            onClick={closeMode}
          />
          <div className='flex flex-direction-column flex-v-center mx-auto'>
            <div>
              <ThumbUpIcon style={{width:'65px'}} />
            </div>
            {/* <h2 className='m-t-5'>Hello {cookies.get('firstName')}!</h2> */}
            <h3 className='m-t-10'>{action}</h3>
          </div>
          <button
            type='button'
            className='btn btn-large w-100 m-t-10 btn-round'
            onClick={() => closeMode()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );}
  else
  return ""

};

export default SuccessModal;
