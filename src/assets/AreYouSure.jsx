import * as React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';

const AreYouSure = ({
  closeModal,
  currentItem,
  setConfirmDelete,
  itemName,
  endpoint,
  deleteFunc,
  ...props
  // handleDeleteBtn,
  // confirmDelete,
}) => {
  // React.useEffect(() => {
  //   handleDeleteBtn(currentPeriod.id);
  // }, [confirmDelete, currentPeriod, handleDeleteBtn]);
  // console.log('logging item to be deleted', currentItem, itemName, currentItem[itemName]);
  if(props.show){
  return (
    <div className='overlay' style={{ alignContent: 'center', justifyContent: 'center' }}>
      <div
        className='modal-box max-w-400'
        style={{
          boxShadow: '0px 2px 6px #0000000A',
          backgroundColor: 'white',
          position: 'relative',
          borderRadius: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#99A6C4',
        }}>
        <div className='content flex-h-center flex-v-center'>
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
            onClick={() => closeModal()}
          />
          <div style={{ margin: '10px auto' }}>
            {!props?.icon ? <FaTrashAlt fontSize='35px' color='#F6649F' /> : props?.icon}
          </div>

          <div className='flex flex-direction-column w-100 center-text pd-10'>
            <div className='pd-y-7'>
              <h2
                style={{
                  color: `${!props?.iconColor ? '#63646E' : props?.btnColor}`,
                  marginTop: '20px',
                }}>
                {!props?.question ? 'Are you sure you want to delete:' : props?.question}
              </h2>
              <h2 className='pd-y-7'>{currentItem && currentItem[itemName]}</h2>
            </div>
            <div>
              <p style={{ fontSize: '13px' }}>PS: This process cannot be undone.</p>
            </div>
            <div className='flex space-between m-t-20 pd-10'>
              <button
                className={`${!props?.submit ? 'bg-danger' : 'bg-submit'} btn btn-large w-45`}
                type='button'
                onClick={() => {
                 props.handleDelete();
                  // setConfirmDelete(true);
                  // deleteFunc(endpoint, currentItem);
                }}>
                {!props?.btnText ? 'Yes, Delete' : props?.btnText}
              </button>
              <button
                className='bg-light-gray btn btn-large w-45'
                type='button'
                onClick={() => {
                  // setConfirmDelete(false);
                  closeModal();
                }}>
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
  else return "";
};

export default AreYouSure;
