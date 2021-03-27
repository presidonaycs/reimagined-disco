import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import MemoSideDashboard from '../MemoSideDashboard';
import DashboardRequest from './../DashboardRequest';
import Cookies from "universal-cookie";



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
var useStateRef=require('react-usestateref')
var descriptions = 'sorry its ovaaaaaaaaaaaaaaaaaa'
var approvalJourney = [];








const DashboardViewMemo = (props) => {
  var [rows, setRows, ref1] = useStateRef([]);
  var [rowss, setRows1] = useState([]);
  let [docs, setDocs, docref] = useStateRef([])


  
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
                    <MemoSideDashboard rows1={props.data} sequence1={props?.sequence}/>
                  </div>
                </div>

                <div className='col col-lg-10' style={{ width: '680px', marginLeft: '0.3vw' }} >
                  <DashboardRequest rows1={props.data} docs={docs} journey={props.journey}/>
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

export default DashboardViewMemo;
