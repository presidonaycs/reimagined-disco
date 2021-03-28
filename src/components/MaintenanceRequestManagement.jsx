import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StyledMenu from "./MenuButton";
import SearchInput from '../input/SearchInput'
import http from '../httpCommon.js'
import { Badge, Button, InputAdornment, MenuItem, Select, TextField } from '@material-ui/core';
import LocationDetails from './LocationDetails';
import SplitButton from '../input/SplitButton';
import SplitsButton from '../input/SplitsButton';
import { Table } from 'antd';
import isLoading from './../assets/IsLoading'


import ViewMemoForm from './pages/ViewMemoForm';
import IoMdClose from 'react-icons/io';
import RequestReport from './pages/RequestReport';
import FrankForm from './pages/FrankForm';
import TablesViewMemo from './pages/TablesViewMemo';



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





function createData(items, requestInitiator, RequestType, InitiatedDate, ReviewStatus, Action) {

  return { items, requestInitiator, RequestType, InitiatedDate, ReviewStatus, Action };
}

const chkStatus = (status) => {
  if (status === 1)
    return { color: 'yellow', margin: '2px', fontSize: '12px' }
  else if (status === 2)
    return { color: 'red', margin: '2px', fontSize: '10px' }
  else
    return { color: 'green', margin: '2px', fontSize: '10px' }
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
  let [isCount, setIsCount] = React.useState('')
  const [showFormModal, setShowFormModal] = useState(false);
  const [fessModal, setFessModal] = useState(false);
  var useStateRef=require('react-usestateref');
  const [secModal, setSecModal] = useState(false);
  const [revModal, setRevModal] = useState(false);
  var [passModal, setPassModal] = useState(false);
  const [requestId, setRequestId] = useState(0)
  var [rows1, setRow1, ref1] = useStateRef([]);
  let [docs, setDocs, docref] = useStateRef([]);
  let [rowValues, setRowValues, recRef] = useStateRef(0);
  let [rowValues2, setRowValues2, recRef2] = useStateRef(0);
  let [isLoading, setIsLoading] = useState(false);

  let [sub, setSub]=useState("");
  let [det, setDet]=useState("");

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

  let [responseData2, setResponseData2] = useState({data: {
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
  
  




  var InitiatedRequest = 7786790;
  var CompletedRequest = 7786790;
  var status = 3;
  var officerName = "John Hancock"
  var officerPost = "HOS"
  var date = '08.08.08'
  var title = 'i can still recall our last summer'
  var post = 'officer 1'
  var ministry = 'ministry of Education'
  var numb = 78943
  var grade = 'Grade level 8'
  var descriptions = 'sorry its ovaaaaaaaaaaaaaaaaaa'

  
    const fetchDatas = async () => {
      setIsLoading(true)
      let url = 'View-Memo-Details' // 'Director-ReviewedApprovals';
      console.log('hey')
      console.log(url)
      console.log(recRef.current)
      if (recRef.current === undefined) {
        console.log('hey again')
      }
      else {
        console.log('hey again')
        http.get(url, {
          params: {
            requestId: recRef.current
          }
        })
          .then((response) => {
            console.log('server')
            console.log(response.data)
            //  setError(response.data.code)
            setRow1(response.data.data)
            if (response.data.data === null) {
              console.log('la la la')
            }
            else {
              setResponseData(response.data.data)
            }
            setIsLoading(false)
          })

      }
    }
    useEffect(() => {
    fetchDatas()

  }, [])

   const fetchDatas2 = async () => {
    setIsLoading(true)
    let url = 'View-Memo-Details' // 'Director-ReviewedApprovals';
    console.log('hey')
    console.log(url)
    console.log(recRef2.current)
    if(recRef2.current===undefined)
    {
      console.log('hey again')
    }
    else{
      console.log('hey again')
      http.get(url, {
        params: {
         
          requestId:recRef2.current
        }
      })
        .then((response) => {
          console.log('server')
          console.log(response.data)
        //  setError(response.data.code)
          setRow1(response.data.data)
          if(response.data.data === null){
          
          }
          else{
            setResponseData2(response.data.data)
            

          }

         
          setIsLoading(false)
        //  setDocs(response.data.data.uploadedDocuments)
  
  
  
        })
  
  
    }
     }
  useEffect(() => {
     fetchDatas2()

   }, [])






   useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true)
    let url = 'Director-PendingApprovals' // 'Director-ReviewedApprovals';

    console.log(url)
    http.get(url)
      .then((response) => {
        console.log('server')
        console.log(response.data)
        setError(response.data.code)
        setRow(response.data.data)


        setIsCount((response.data.count).toString())



      })
setIsLoading(false)
  }
  
    fetchData()

  }, [])

  const onClick =(e)=>{
    console.log('working')
  }

  const handle = () => {
  setPassModal(true);
  console.log('working')  }

  const openFessModal = () =>{
    if(recRef.current>0){
      fetchDatas();
      setFessModal(true);
    }
    
    
  }

  const openSecModal= () => {
    fetchDatas();
    setSecModal(true);
    console.log('working')  }

  const closeFessModal = () => {
    setFessModal(false);
    console.log('working')  }

  const openRevModal = () => {
    if(recRef2.current>0){
      fetchDatas2();
      setRevModal(true);
    }
    
    
    console.log('working')
  }

  const closeRevModal = () => {
    setRevModal(false);
    console.log('working')
  }

  const closeSecModal = () => {
    setSecModal(false);
    console.log('working')
  }

  const closePassModal = () => {
    setPassModal(false);
    console.log('working')
  }




// console.log(recRef.current.key)
// console.log('key checked')

  const fetchReviewedData = async () => {
    setIsLoading(true)
    let url = 'Director-ReviewedApprovals';

    console.log(url)
    http.get(url)
      .then((response) => {
        console.log('server')
        console.log(response.data.data)
        setError(response.data.code)
        setReviewedRow(response.data.data)




      })
setIsLoading(false)
  }
  useEffect(() => {
    fetchReviewedData()

  }, [])




  const chkStatus = (status) => {
    if (status === 3)
      return { color: 'green', margin: '2px', fontSize: '14px' }
    else if (status === 2)
      return { color: 'red', margin: '2px', fontSize: '14px' }
    else
      return { color: 'yellow', margin: '2px', fontSize: '14px' }
  }

  const handleClick = (e) => {
    console.log(e);
    setFessModal(true);

  }


  const sendRequestId = (e) => {
    const req = e.currentTarget.getAttribute('data-item')
    console.log(req)
  }




  const handleIsRequest = () => {

    isRequest = true;

    //fetchData()
    setIsRequest(isRequest)
  }

  const handleIsReviewedRequest = () => {

    isRequest = false;
    fetchReviewedData()
    setIsRequest(isRequest)
  }

  const isGreen = { backgroundColor: 'light-green', borderRadius: '40px' }
  const isWhite = { backgroundColor: 'white', borderRadius: '40px' }

  

  




if(isLoading){
  return <isLoading/>
}


 else if (isRequest && !isLoading) {

    const columns = [
      {
        title: 'Items',
        dataIndex: 'items',
        render: text => <a onClick={ openFessModal} >{text}</a>,
      },
      {
        title: 'Request Initiator',
        className: 'column-money',
        dataIndex: 'requestInitiator',
        
      },
      {
        title: 'Request Type',
        dataIndex: 'requestType',
      },
      {
        title: 'Initiated Date',
        dataIndex: 'initiatedDate',
      },
      {
        title: 'Review Status',
        dataIndex: 'reviewStatus',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render:(text,record,index) => <SplitsButton onClick={(e)=>{
          console.log(record[index].key)
          }} handleAccept={openSecModal} handleClose={closeSecModal}>{text}</SplitsButton>
      }
      
    ];
  
    var data = rows.map((it) => (
      {
        
        key: it.requestId,
        items: it.items,
        requestInitiator: it.requestInitiator,
        requestType: it.requestType,
        initiatedDate: it.initiatedDate,
        reviewStatus: it.reviewStatus,
        action: <SplitsButton onClick={setFessModal}/>
      
      }
    ))

    
    return (
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            
            
            <TablesViewMemo show={fessModal} handleClose={closeFessModal} row={responseData} docs={responseData.uploadedDocuments??[]} journey={responseData.approvalJourneyResponse??[]}/>
            <RequestReport show={secModal}  handleClose={closeSecModal} id={recRef} row={responseData}/>


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
          <SearchInput className='col-sm-3' style={{ width: '100%' }} />
        </div>
        <div style={{ display: 'flex' }} className='row'>
          <Grid container justify="center">
            <Grid item sm={11}>
              <TableContainer component={Paper} style={{ width: '100%' }}>
                <div className={classes.clDiv}>
                  <div style={{ fontWeight: '900' }}>
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
                        <BootstrapButton size='small' style={{ borderRadius: '40px' }} onClick={handleIsReviewedRequest}>
                          Review
                      </BootstrapButton>
                      </Badge>
                    </div>
                  </div>
                </div>
                  <Table
                  onRow={(record, rowIndex) => {
                    console.log(record.key)
                    return {

                        onClick: event => setRowValues(record.key)
                    };
                  }}
                    columns = { columns }
                    dataSource = { data }
                    bordered
                    
                  />
              </TableContainer>


            </Grid>
          </Grid>
        </div>
      </div>
    );
                
  }
  else {

    var column = [
      {
        title: 'Items',
        dataIndex: 'items',
        render: text => <a onClick={openRevModal}>{text}</a>,
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
        title: 'Evaluation',
        dataIndex: 'evaluation',
      },
      {
        title: 'Officer\'s Name',
        dataIndex: 'officerName',
      },
      {
        title: 'Review Status',
        dataIndex: 'reviewStatus',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render:(text,record,index) => <SplitsButton onClick={(e)=>{
          console.log(record[index].key)
          }} handleAccept={handle} handleClose={closePassModal}>{text}</SplitsButton>,

      }
    ];
  
    var data = rowsReviewed.map((it) => (
      {
        key: it.requestId,
        items: it.items,
        requestType: it.requestType,
        cost: it.cost,
        evaluation: it.evaluation,
        officerName: it.officerName,
        reviewStatus: it.reviewStatus,
        //action:<SplitsButton onClick={handleAccept}/>
   
      }
    ))

    return (

     

      <div style={{ width: '100%' }}>
        <div style={{ marginLeft: '58%' }} className='row'>

          <FrankForm  show={passModal} handleClose={closePassModal} />
          <TablesViewMemo show={revModal} handleClose={closeRevModal} row={responseData2} docs={responseData2.uploadedDocuments??[]} journey={responseData2.approvalJourneyResponse??[]}/>

          <div style={{ margin: '7px' }}><StyledMenu className='col-sm-6' /></div>
          <SearchInput className='col-sm-3' />
        </div>
        <div style={{ display: 'flex' }} className='row'>

          <Grid container sm={12} justify='center' alignItems='center'>
            <Grid item sm={11}>
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
                  console.log(record.key)
                  return {
                      onClick: event => setRowValues2(record.key),
                     
                  };
                  
                }}
                    columns = { column }
                    dataSource = { data }
                    bordered
                    
                  />
              </TableContainer>
            </Grid>
          </Grid>
        </div>
      </div >
    )
console.log(rowValues)
  }
}

