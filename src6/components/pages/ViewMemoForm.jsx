import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Request from './../MainMemo1';
import MemoSide from './../MemoSide';


var InitiatedRequest = 7786790;
var CompletedRequest = 7786790;
var status = 3;
var officerName = "John Hancock"
var officerPost = "HOS"
var date = '08.08.08'
var title = 'i can still recall our last summers'
var post = 'officer 1'
var ministry = 'ministry of Education'
var numb = 78943
var grade = 'Grade level 8'
var descriptions = 'sorry its ovaaaaaaaaaaaaaaaaaa'
var approvalJourney = [];








const ViewMemoForm = (props) => {

 
  //const approvalJourney = rows1.approvalJourneyResponse;
   

  

 
  




  if (props.show) {


    return (




      <div className="overlay">
        <IoMdClose className="close-btn pointer" onClick={props.handleClose} />
        <div className="modal-box" style={{ width: '80vw', fontFamily: 'avenir', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', marginTop:'0'}}>
          <div className="content">
            <div className='col'>
              <div className='row' style={{ marginBottom: '16px' }}>



              </div>
              <div className='row'>
                <div className='col' >
                  <div style={{ fontWeight: 'bold', fontFamily: 'auto' }}>Facility Request Management</div>
                  <div className='col col-lg-2' style={{ width: '300px', height: 'auto' }}>
                    <MemoSide rows1={props.row} sequence1={props?.sequence}/>
                  </div>
                </div>

                <div className='col col-lg-10' style={{ width: '680px', marginLeft: '0.3vw' }} >
                  <Request rows1={props.row} docs={props.docs} journey={props.journey}/>
                </div>
              </div>
            </div>
            <div>
              {/* {approvalJourney.map((item) => (
                <ApprovalJourney image={item.img} name={item.asssignedOfficer} location={''} ministry={''} date={item.date} lastModified={''} comment={item.comment} />
              ))} */}
            </div>
          </div>
        </div>

      </div>


    )
  }


  else {
    return (
      <div></div>
    )
  }


};

export default ViewMemoForm;
