import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import MemoSideDashboard from '../MemoSideDashboard';
import Request from './../MainMemoTables';
import http from './../../uploaderz';
import IsLoading from '../../assets/IsLoading';


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
var useStateRef = require('react-usestateref')
var descriptions = 'sorry its ovaaaaaaaaaaaaaaaaaa'
var approvalJourney = [];








const TablesViewMemo = (props) => {

    var [rows, setRows, ref1] = useStateRef([]);
    var [rowss, setRows1] = useState([]);
    let [docs, setDocs, docref] = useStateRef([])
    let [img, setImg]=useState([])
  
  
  
   




    console.log('timo')
    console.log(props.journey)
    console.log(props.row)








    if (props.show) {

        return (




            <div className="overlay">
                <IoMdClose className="close-btn pointer" onClick={props.handleClose} />
                <div className="modal-box" style={{ width: '80vw', fontFamily: 'avenir', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', marginTop: '0' }}>
                    <div className="content">
                        <div className='col'>
                            <div className='row' style={{ marginBottom: '16px' }}>

        
    

                            </div>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div className='col' >
                                    <div style={{fontWeight: 'bold'}}>Facility Request Management</div>
                                    <div className='col col-lg-2' style={{ width: '300px', height: 'auto' }}>
                                        <MemoSideDashboard rows1={props.row} sequence1={props?.sequence} />
                                    </div>
                                    
                                </div>
                                <div style={{display:'flex', direction:'column'}}>
                                <div className='col col-lg-8' style={{ width: '680px', marginLeft: '0.3vw' }} >
                                    <Request rows1={props.row} docs={props.docs} journey={props.journey} />
                                </div>
                                
                                </div>
                            </div>

                        </div>
                        <div>

                            {/* {
                                props.journey.map((item) => (
                                    <ApprovalJourney key={item.profilePic} image={item.profilePic} name={item.assignedOfficer} location={item.location} ministry={item.mda} inTray={item.inTray} outTray={item.outTray} inLastModified={item.inLastModified} outLastModified={item.outLastModified} comment={item.comment} />
                                ))
                            } */}

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

export default TablesViewMemo;
