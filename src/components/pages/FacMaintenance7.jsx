import React, { useEffect, useState } from 'react';
import dom from 'react-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LensIcon from '@material-ui/icons/Lens'
import http from './../../httpCommon'
import { Badge, Button, InputAdornment, MenuItem, Select, TextField } from '@material-ui/core';
import LocationDetails from '../layouts/LocationDetails';
import SearchInput from '../inputs/SearchInput';
import SplitButton from '../../input/SplitButton';
import Page10 from './Page10';
import ViewMemoForm from './ViewMemoForm'
import { Table } from 'antd';
import Page10Final from './../Page10Final'







const token1 = sessionStorage.getItem('token');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIxIiwiRmlyc3ROYW1lIjoiRWRvIEdvdiIsIkxhc3ROYW1lIjoiQWRtaW4iLCJleHAiOjE2MTM0MDUwMzUsImlzcyI6InNlcnZlciIsImF1ZCI6ImNsaWVudCJ9.uBytGBfWejiG7x00iu80MoJRFbT5IGDjAJrv58zsMTE';
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    borderRadius: 0,
    color:'white',
    width:'65px',
    padding: '6px 10px',
    fontWeight: 'bolder',
    lineHeight: 1,
    margin: '0px',
    backgroundColor: 'green',
    borderColor: 'light-green',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'lightgreen',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'lightgreen',
      borderColor: 'green',
    },

  },
})(Button);

const StyleTableCell = withStyles({
  root: {
    fontSize: '11px',
    padding: '4px 8px 4px 8px'
  }
})(TableCell)


const StyldTableCell = withStyles({
  head: {
    backgroundColor: 'lightgrey',
    fontWeight: 'bolder',
    textTransform: 'none',
    fontSize: '12px'

  },

})(TableCell);

const useStyles = makeStyles({
  table: {
    width: '100%'

  },
  clDiv: {
    backgroundColor: '#d5ffd5',
    fontWeight: 'bolder',
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14'


  },

  tbCells: {
    maxWidth: '70px'

  },

  bootsButton: {
    borderRadius: '40px',

  }


});






function createData(items, requestInitiator, Agency, Amount, PaymentStatus, DateRecieved, Action) {

  return { items, requestInitiator, Agency, Amount, PaymentStatus,DateRecieved, Action };
}

const chkStatus = (status) => {
  if (status === 1)
    return { color: 'yellow', margin: '2px', fontSize: '12px' }
  else if (status === 2)
    return { color: 'red', margin: '2px', fontSize: '10px' }
  else
    return { color: 'green', margin: '2px', fontSize: '10px' }
}




const FacMaintenance7 = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var [isRequest, setIsRequest] = React.useState(true);
  const [isReview, setIsReview] = React.useState(false);
  const [isEntry, setIsEntry] = React.useState([]);
  let [error, setError] = React.useState(null)
  let [rowsReviewed, setReviewedRow] = React.useState([])
  let [isCount, setIsCount] = React.useState('')
  const [showFormModal, setShowFormModal] = useState(false);
  const [details, setDetails] = useState([]);
  var useStateRef=require('react-usestateref')
  const [selectedRecord, setSelectedRecord] = useState([]);
  const [rows, setRows] = useState([]);
  let [requestID, setRequestID] = React.useState(null);
  var [formState, setFormState] = useState(false);
  var [memoState, setMemoState] = useState(false);
  var [rows1, setRow1, ref1] = useStateRef([]);
  let [show, setShow] = useState(false);
  var [clickedRequestId, setClickedRequestId, ref] = useStateRef(0);
  let [showModal, setShowModal, reff] = useStateRef(false)

  let [rowValues, setRowValues, recRef] = useStateRef({})


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





  let [responseData, setResponseData] = useState({data: {
    requestId:  0,
    memoInitiationDate: "",
    memoInitiator: "",
    costImplication: 0,
    status: "",
    currentApprovalStage: 0,
    subject: "",
    details: "",
    lastMaintainanceDate: "",
    approvalJourneyResponse: [
     
    ],
    uploadedDocuments: [
    
    ]
  }
  })
  

  
  

  const fetchDatas = async () => {
    let url = 'View-Memo-Details' // 'Director-ReviewedApprovals';
    console.log('hey')
    console.log(url)
    console.log(recRef.current)
    if(recRef.current===undefined)
    {
      console.log('hey again')
    }
    else{
      console.log('hey again')
      http.get(url, {
        params: {
         
          requestID:recRef.current
        }
      })
        .then((response) => {
          console.log('server')
          console.log(response.data)
        //  setError(response.data.code)
          if(response.data.data === null){
            console.log('la la la')
          }
          else{
            setResponseData(response.data.data)
            

          }

 
        })
  
  
    }
     }
  useEffect(() => {
     fetchDatas()

   }, [])

  

  let handleClose = () =>{
    setShow(false);
  }

  let raiseMemo =()=>{
    console.log(responseData)
    console.log(recRef)

    setMemoState(true)
    
    console.log(requestID);
  }

  let closeModal = () =>{
    setFormState(false);
  }

  let closeMemo = () =>{
    setMemoState(false);
  }
let sendRequestId=(e)=>{
    setShow(true)
   
  }

  const fetchData = async () => {
    let url = 'Technical-Review' 
  
    console.log(url)
   await http.get(url)
      .then((response) => {
        console.log('server')
        console.log(response.data)
        setRows(response.data.data)
  
        setIsCount((response.data.count).toString())
  
  
  
      })
  
  }
  useEffect(() => {
    fetchData()
  
  }, [])

  const column = [
    {
      title: 'Items',
      dataIndex: 'items',
      render: text => <a onClick={raiseMemo}>{text}</a>,
    },
    {
      title: 'Request Initiator',
      className: 'column-money',
      dataIndex: 'requestInitiator',
    },
    
    {
      title: 'Agency',
      dataIndex: 'agency',
    },
    {
      title: 'Amount',
      className: 'column-money',
      dataIndex: 'amount',
    },
    {
      title: 'Subject',
      className: 'ant-design-column-id',
      dataIndex: 'subject',
      visible: 'false'
      
    },
    {
      title: 'Details',
      className: 'ant-design-column-id',
      dataIndex: 'details',
      visible: 'false'
      
    },
    {
      title: 'Request Id',
      className: 'ant-design-column-id',
      dataIndex: 'requestId',
      visible: 'false'
      
    },

    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
    },
    {
      title: 'Date Received',
      dataIndex: 'dateReceived',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render:(text,record,index) => <BootstrapButton onClick={(e)=>{ setShow(true)
        
        }}  >{text}</BootstrapButton>,
    }
  ];

  let data = rows.map((it) => (
    {
      key: it.requestId,
      items: it.items,
      requestInitiator: it.requestInitiator,
      agency: it.agency,
      amount: it.amount,
      subject: it.subject,
      details: it.details,
      requestID: it.requestId,
      paymentStatus: it.paymentStatus,
      dateReceived: it.dateReceived,
      action: 'Review'

    }
  ))
  


  return (
    
  
    
    <div style={{ width: '100%' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>

          <div>Good Morning</div>
          <div style={{ fontSize: '23px' }}>Osagie Osaigbovo; #{numb}</div>

          <div>{post} {ministry} | {grade}</div>
        </div>
        <div>
          <LocationDetails />
        </div>
      </div>
      <div style={{ marginLeft: '46%', marginBottom: '1%' }} className='row'>
        <div style={{ marginRight: '107px', width: '150px' }}><SplitButton /></div>
        <SearchInput  className='col-sm-3' style={{ width: '100%', placeholder:'search transactions, invoices or help' }} />
      </div>
      <Grid container justify='center' >
        <Grid item sm={11}>

          <TableContainer component={Paper} style={{ width: '100%' }}>
            <div className={classes.clDiv}>
              <Badge badgeContent={isCount} showZero color='error'>
                <div style={{paddingRight:'14px', fontWeight:'bold', fontFamily:'auto'}}>
                 Facility Maintenance Request Management
                </div>
              </Badge>
            </div>
            <Table onRow={(record, rowIndex) => {
                  console.log(record.key)
                  console.log(record)

                  return {
                      onClick: event => setRowValues(record),
                      
                     
                  };
                  
                }}
            
                    columns = { column }
                    dataSource = { data }
                    bordered
                    
                  />
          </TableContainer>
        </Grid>
      </Grid>
        <ViewMemoForm show = {memoState} handleClose = {closeMemo} row={rowValues}/>
        <Page10Final show={show} handleClose={handleClose} row={rowValues} />    
        </div>
  
  );
};

export default FacMaintenance7;
