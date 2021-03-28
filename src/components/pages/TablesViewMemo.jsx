import React, { useEffect, useState } from 'react';
import { Button, Box, Divider, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles, Paper, SvgIcon, Container } from '@material-ui/core';
import { IoMdClose } from 'react-icons/io';
import Request from './../MainMemoTables'
import MemoSide from './../MemoSide'
import ApprovalViewer from './../pages/ApprovalViewer'
import http from './../../httpCommon'
import ApprovalJourney from '../../ApprovalJourney';
import MemoSideDashboard from '../MemoSideDashboard';

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
                            <div className='row'>
                                <div className='col' >
                                    <div style={{ fontWeight: 'bold' }}>Facility Request Management</div>
                                    <div className='col col-lg-2' style={{ width: '300px', height: 'auto' }}>
                                        <MemoSideDashboard rows1={props.row} />
                                    </div>
                                    
                                </div>
                                <div style={{display:'flex', direction:'column'}}>
                                <div className='col col-lg-10' style={{ width: '680px', marginLeft: '0.3vw' }} >
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
