import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { Table } from 'antd';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StyledMenu from "../components/MenuButton";
import SearchInput from '../input/SearchInput'
import http from '../httpCommon.js'
import TechnicalReview24 from './../components/pages/TechnicalReview24'
import { Badge, Button, InputAdornment, MenuItem, Select, TextField } from '@material-ui/core';
import LocationDetails from '../components/LocationDetails';
import SplittedButton from '../input/SplitButton';
import SplitsButton from '../input/SplitsButton';
import Cookies from 'universal-cookie'
import TechnicalReviewModal24 from './../components/pages/TechnicalReviewModal24'
import TechnicalReviewModalCancel24 from './../components/pages/TechnicalReviewModalCancel24'

import TechnicalReviewModal16 from './../components/pages/TechnicalReviewModal16'
import FrankForm from './../components/pages/FrankForm'

import ViewMemoForm from '../components/pages/ViewMemoForm';
import IoMdClose from 'react-icons/io';
import TechnicalReview16 from './TechnicalReview16';
import TablesViewMemo from '../components/pages/TablesViewMemo';
import IsLoading from '../assets/IsLoading';
import httpCommon from '../httpCommon.js';


const cookies = new Cookies();
const token1 = sessionStorage.getItem('token');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIxIiwiRmlyc3ROYW1lIjoiRWRvIEdvdiIsIkxhc3ROYW1lIjoiQWRtaW4iLCJleHAiOjE2MTM0MDUwMzUsImlzcyI6InNlcnZlciIsImF1ZCI6ImNsaWVudCJ9.uBytGBfWejiG7x00iu80MoJRFbT5IGDjAJrv58zsMTE';
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 10px',
    fontWeight: 'bolder',
    lineHeight: 1,
    margin: '2px',
    backgroundColor: 'light-green',
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
      backgroundColor: 'white',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'white',
      borderColor: 'white',
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
    padding: '10px',
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







const chkStatus = (status) => {
  if (status === 1)
    return { color: '#0DAC26', margin: '2px', fontSize: '12px' }
  else if (status === 2)
    return { color: '#FDCC29', margin: '2px', fontSize: '10px' }
  else if (status === 3)
    return { color: '#EF0621', margin: '2px', fontSize: '10px' }
}






export default function Tables() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var [isRequest, setIsRequest] = React.useState(true);
  const [isReview, setIsReview] = React.useState(false);
  const [isEntry, setIsEntry] = React.useState([]);
  let [error, setError] = React.useState(null)
  let [rows, setRow] = React.useState([])
  let [rowsReviewed, setReviewedRow] = React.useState([])
  let [rowsReviewed2, setReviewedRow2] = React.useState([])
let [loading, setLoading] = useState(false)
  let [isCount, setIsCount] = React.useState('')
  const [showFormModal, setShowFormModal] = useState(false);
  const [details, setDetails] = useState([]);
  const [formCancelModal, setFormCancelModal] = useState(false)

  var useStateRef = require('react-usestateref')
  const [selectedRecord, setSelectedRecord] = useState([]);
  let [requestID, setRequestID] = React.useState(null);
  let [rowValues, setRowValues, recRef] = useStateRef(0)
  let [showModal16, setShowModal16] = React.useState(false);
  let [show19, setShow19] = React.useState(false);
  let [technicalData, setTechnicalData] = useState({})
  let [review, setReview] = useState("")
  let [passModal, setPassModal] = useState(false);
  let [canModal, setCanModal] = useState(false);
  let [typedValue, setTypedValue] = useState('')


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





  let [responseData, setResponseData] = useState({
    data: {
      requestId: 0,
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

  let [responseData2, setResponseData2] = useState({
    data: {
      requestId: 0,
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



  const fetchData = async () => {
    let url = 'View-Memo-Details' 
    console.log('hey')
    console.log(url)
    console.log(recRef.current)
    await http.get(url, {
      params: {

        requestId: recRef.current
      }
    })
    if (recRef.current === undefined) {
      console.log('hey again')
    }
    else {
      console.log('hey again')
      let datss = await http.get(url, {
        params: {

          requestId: recRef.current
        }
      })
        .then((response) => {
          console.log('server')
          console.log(response.data)
          setResponseData(response.data.data)
          //  setError(response.data.code)
          if (response.data.data === null) {
            console.log('la la la')
          }
          else {
            setResponseData(response.data.data)


          }

        })

        console.log("see me now")

        console.log(datss)

    }
  }

  const fetchTechReviewDetails=()=>{
    setLoading(true);
    let url = 'View-TechReviewDetails'
    httpCommon.get(url, {
      params:{
        requestid:recRef.current
      }
    })
    .then((response)=>{
      console.log(response)
      setTechnicalData(response.data.data)
      setLoading(false)
    })
    
  }

  


const closeCanModal=()=>{
  setFormCancelModal(false);
}



  const sendRequestId = (e) => {
    const req = e.currentTarget.getAttribute('data-item')
    setRequestID(req);
    console.log(requestID);

  }
  const closeModal = () => {
    setShowFormModal(false);
  }


  const handleAccept = () => {
    fetchData();
    fetchTechReviewDetails();
    setShowFormModal(true);

  }

  const handleCancel = () => {
    fetchData();
    fetchTechReviewDetails();
    setFormCancelModal(true);

  }

  



  const goLink = () => {
    fetchData();
    fetchTechReviewDetails();
    setShowModal16(true);
  
    
  }

  const goLinkNot = () => {
    setShowModal16(false);
  }

  const doShow19 = () => {
    if(recRef.current > 0){
      fetchData();
      setShow19(true)
    }
  }

  const unShow19 = () => {
    setShow19(false);
  }


  useEffect(()=>{
    setLoading(true);
    const fetchApprovalRequests = async () =>{
      let url="FinalApproval"
      await http.get(url)
      .then(res => {
        console.log('server')
        console.log(res.data.data)
        setError(res.data.code)
        setReviewedRow2(res.data.data)
        setIsCount(res.data.data.count)

        setLoading(false);
      })
      
    }

    fetchApprovalRequests();
  }, []);


  const cancelRequest=()=>{
    httpCommon.post("DeclineRequest" , {
        // requestid:props.id.current,
        // addtionalcomment:comments
      
    })
    .then((res)=>(console.log(res)))
    console.log("hiya")
    // props.handleClose()
    // setSuccess(true) 
  }


  const onPassModal=()=>{
    setPassModal(true)

  }

  const offPassModal=()=>{
    setPassModal(false)
    
  }
  
  useEffect(() => {
    setLoading(true)
  const fetchReviewedData = async () => {
    let url = 'FinalApprovalReview';

      console.log(url)
      await http.get(url)
      .then((response) => {
        console.log('server')
        console.log(response.data.data)
        setError(response.data.code)
        setReviewedRow(response.data.data)
        // setIsCount(response.data.data.count)
        setLoading(false);




      })
      
  }
  
    fetchReviewedData()

  }, [])


  const handleApprove=(e)=>{
    http.post("ApproveRequest" , {
      requestId:recRef.current,
    
  })
  .then((res)=>console.log(res))
  
  }



  const chkStatus = (status) => {
    if (status === 1)
      return { color: '#0DAC26', margin: '2px', fontSize: '14px' }
    else if (status === 2)
      return { color: '#FDCC29', margin: '2px', fontSize: '14px' }
    else if (status === 3)
      return { color: '#EF0621', margin: '2px', fontSize: '14px' }
  }

  const handleClick = (e) => {
    console.log(e);
  }










  const handleIsRequest = () => {
    isRequest = true;
    fetchData()
    setIsRequest(isRequest)
  }

  const handleIsReviewedRequest = () => {
    isRequest = false;
    // fetchReviewedData()
    setIsRequest(isRequest)
  }

  const isGreen = { backgroundColor: 'light-green', borderRadius: '40px',border:"1px solid #707070" }
  const isWhite = { backgroundColor: 'white', borderRadius: '40px',border:"1px solid #707070" }

  if (isRequest) {
    const column = [
      {
        title: 'Items',
        dataIndex: 'items',
        render: text => <a onClick={goLink}>{text}</a>,
      },
      {
        title: 'Request Type',
        className: 'column-money',
        dataIndex: 'requestType',
      },

      {
        title: 'Cost',
        dataIndex: 'cost',
      },
      {
        title: 'Initiator\'s Name',
        className: 'column-money',
        dataIndex: 'initiatorsName',
      },
      {
        title: 'Agency',
        dataIndex: 'agency',
      },
      {
        title: 'Date Received',
        dataIndex: 'dateReceived',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: text => <SplitsButton  handleAccept={handleAccept} handleCancel={handleCancel}>{text}</SplitsButton>

      }
    ];

    let data = rowsReviewed2.map((it) => (
      {
        key: it.requestId,
        items: it.items,
        requestType: it.requestType,
        cost: it.cost,
        initiatorsName: it.initiatorsName,
        agency: it.agency,
        dateReceived: it.dateReceived,
        requestId: it.requestId,

      }
    ))

    if(loading){
      return(
        <IsLoading/>
      )
    }
    else{
    return (
      <div style={{ width: '100%' }}>
        <TechnicalReviewModal24 show={showFormModal} handleClose={closeModal} row={responseData} id={recRef} tech={technicalData} />
        <TechnicalReviewModal16 show16={showModal16} handleClose16={goLinkNot} row={responseData} id={recRef} tech={technicalData}/>
        <TechnicalReviewModalCancel24 show={formCancelModal} handleClose={closeCanModal} row={responseData} id={recRef} tech={technicalData}/>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>

          <div>Good Day</div>
          <div style={{ fontSize: '23px' }}>{cookies.get("firstName")} {cookies.get("lastName")}; #{cookies.get("staffNumber")}</div>

          <div>{cookies.get("role")} {cookies.get("mda")} | {grade}</div>
        </div>
        <div>
          <LocationDetails />
        </div>
        {console.log('passed')}
        
      </div>
      <FrankForm show={passModal} handleClose={offPassModal} accept={cancelRequest} />
        <div style={{ width: '100%' }}>

          
          <div style={{ display: 'flex' }} className='row'>
            <Grid container justify="center">
              <Grid item sm={11}>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
            <div style={{width: '250px',margin:'8px' }}><SplittedButton /></div>
            <SearchInput style={{marginRight:'16px'}}  onChange={e=>setTypedValue(e.target.value)} value={typedValue}/>
              </div>
                <TableContainer component={Paper} style={{ width: '100%' }}>
                  <div className={classes.clDiv}>
                    <div style={{ fontWeight: '900'}}>
                      Maintenance Request Management
                  </div>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Badge badgeContent={isCount} showZero
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',

                          }} color='error'>
                          <BootstrapButton size='small' disableRipple disableFocusRipple style={isRequest ? isWhite : isGreen}>
                            Request
                      </BootstrapButton>
                        </Badge>
                      </div>
                      <div>
                        <Badge>
                          <BootstrapButton size='small' style={{ borderRadius: '40px', }} onClick={handleIsReviewedRequest}>
                            Review
                      </BootstrapButton>
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Table  
                  onRow={(record, rowIndex) => {
                  console.log(record.key)
                  console.log(record)

                  return {
                      onClick: event => setRowValues(record.key),
                  };
                  
                }}
                    columns={column}
                    dataSource={data}
                    bordered

                  />
                </TableContainer>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
    }
  }
  else {
    let columned = [
      {
        title: 'Items',
        dataIndex: 'items',
        render: text => <a onClick={doShow19}>{text}</a>,
      },
      {
        title: 'Request Type',
        className: 'column-money',
        dataIndex: 'requestType',

      },
      {
        title: 'Cost',
        dataIndex: 'cost',
      },
      {
        title: 'Initiator\'s Name',
        dataIndex: 'initiatorsName',
      },
      {
        title: 'Agency',
        dataIndex: 'agency',
      },
      {
        title: 'Approval Type',
        dataIndex: 'approvalType',
      },
      {
        title: 'Date Treated',
        dataIndex: 'dateTreated',
      },

    ];

    let datast = rowsReviewed.map((it) => (
      {
        key: it.requestId,
        items: it.items,
        requestType: it.requestType,
        cost: it.cost,
        initiatorsName: it.initiatorsName,
        agency: it.agency,
        approvalType: it.approvalType,
        requestId: it.requestId,
        dateTreated: it.dateTreated,

      }
    ))
    return (
      <div style={{ width: '100%' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>

          <div>Good Day</div>
          <div style={{ fontSize: '23px' }}>{cookies.get("firstName")} {cookies.get("lastName")}; #{cookies.get("staffNumber")}</div>

          <div>{cookies.get("role")} {cookies.get("mda")} | {grade}</div>
        </div>
        <div>
          <LocationDetails />
        </div>
        {console.log('passed')}
        
      </div>
        
        <div style={{ display: 'flex' }} className='row'>
          <TablesViewMemo show={show19} handleClose={unShow19} row={responseData} docs={responseData.uploadedDocuments ?? []} journey={responseData.approvalJourneyResponse ?? []} sequence={responseData.approvalSequence ?? []}/>

          <Grid container sm={12} justify='center' alignItems='center'>
            <Grid item sm={11}>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
            <div style={{width: '250px',margin:'8px' }}><SplittedButton /></div>
            <SearchInput style={{marginRight:'16px'}}  onChange={e=>setTypedValue(e.target.value)} value={typedValue}/>
              </div>
              <TableContainer component={Paper} style={{ width: '100%' }}>
                <div className={classes.clDiv}>
                  <div>
                    Maintenance Request Management
                </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <Badge badgeContent={isCount} showZero
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',

                        }} color='error'>
                        <BootstrapButton size='small' disableRipple disableFocusRipple style={{ borderRadius: '40px' }} onClick={handleIsRequest}>
                          Request
                      </BootstrapButton>
                      </Badge>
                    </div>
                    <div>
                      <Badge>
                        <BootstrapButton size='small' style={{ borderRadius: '40px' }} style={isRequest ? isGreen : isWhite}>
                          Review
                      </BootstrapButton>
                      </Badge>
                    </div>
                  </div>
                </div>

                <Table
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: event => setRowValues(record.key)
                      
                    };
                  }}

                  columns={columned}
                  dataSource={datast}
                  bordered

                />
              </TableContainer>
            </Grid>
          </Grid>
        </div>
      </div >
    )

  }

}

