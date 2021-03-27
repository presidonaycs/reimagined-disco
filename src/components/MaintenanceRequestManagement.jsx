import { Badge, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import http from '../httpCommon.js';
import SearchInput from '../input/SearchInput';
import SplittedButton from '../input/SplitButton';
import SplitsButton from '../input/SplitsButton';
import LocationDetails from './LocationDetails';
import StyledMenu from "./MenuButton";
import FrankForm from './pages/FrankForm';
import RequestReport from './pages/RequestReport';
import TablesViewMemo from './pages/TablesViewMemo';
import Cookies from "universal-cookie";
import IsLoading from '../assets/IsLoading.jsx';
import TechnicalReviewModal21 from './pages/TechnicalReviewModal21'
import CancelRequest from "./pages/CancelRequest"
import SuccessModal from "./../assets/SuccessModal"
import { Lens } from '@material-ui/icons';
import AreYouSure from '../assets/AreYouSure.jsx';
import LensIcon from '@material-ui/icons/Lens';
import linq from 'linq';







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
  let [success, setSuccess] = useState(false);
  let [isCount, setIsCount] = React.useState('')
  const [showFormModal, setShowFormModal] = useState(false);
  const [fessModal, setFessModal] = useState(false);
  var useStateRef=require('react-usestateref')
  const [secModal, setSecModal] = useState(false);
  const [revModal, setRevModal] = useState(false);
  var [passModal, setPassModal] = useState(false);
  const [requestId, setRequestId] = useState(0)
  var [rows1, setRow1, ref1] = useStateRef([]);
  let [docs, setDocs, docref] = useStateRef([])
  let [rowValues, setRowValues, recRef] = useStateRef(0)
  let [rowValues2, setRowValues2, recRef2] = useStateRef(0)
  let [isLoading, setIsLoading] = useState(false)
  let [refreysh, setRefreysh] = useState(false);
  let [costModal, setCostModal] = useState(false);
  let [canModal, setCanModal] = useState(false);
  let [done, setDone] = useState(false);
  let [rowd, setRowd] = useState({})
  let [areYouSure, setAreYouSure] = useState(false)
  let [suppArray, setSuppArray] = useState([])
  let [sub, setSub]=useState("");
  let [det, setDet]=useState([]);
  let [filParam, setFilParam] = useState('Filter By')
  let [typedValue, setTypedValue] = useState('')
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
    approvalSequence:[],
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
    approvalSequence:[],
    approvalJourneyResponse: [
     
    ],
    uploadedDocuments: [
    
    ]
  }
  })
  
  

  const cookies = new Cookies();


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
  let today = new Date();

  
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
console.log(typedValue);
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

   const fetchDatad = async () => {
    setIsLoading(true)
    let url = 'View-TechReviewDetails' 
    console.log('hey')
    console.log(url)
    console.log(recRef2.current)
    if(recRef2.current===undefined || recRef2.current===0)
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
          setRowd(response.data.data)
          if(response.data.data === null){
          
          }
          else{
            setRowd(response.data.data)
            

          }

         
          setIsLoading(false)
        //  setDocs(response.data.data.uploadedDocuments)
  
  
  
        })
  
  
    }
     }
  useEffect(() => {
     fetchDatas2()

   }, [])


   const doAccept =()=>{
     console.log('lllkklklklkl')
    http.post("ApproveRequest" , {
        requestId:recRef2.current,
      
    })
    .then((res)=>console.log(res))
    
  }
  
  const doSuccess =()=>{
    setSuccess(true);
  }

 const undoSuccess =()=>{
  setSuccess(false);
  }
   
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
        setSuppArray(response.data.data)
        if(response.data.data === undefined|| response.data.data===null){

        }
        else{
          setIsCount((response.data.count).toString()?? "")
      }
        

        setIsLoading(false)

      })

  }
  useEffect(() => {
  
    fetchData()

  }, [refreysh])

  const onClick =(e)=>{
    console.log('working')
  }

  const handle = () => {
  setPassModal(true);
  console.log('working')  }

  const openFessModal = (e) =>{
    console.log(e)
    if(recRef.current>0){
      fetchDatas();
      console.log("fessmodalting")
      setFessModal(true);
    }
    
    


  }


  const openSecModal= () => {
    fetchDatas();
    setSecModal(true);
    console.log('working')  }

    const openCanModal= () => {
      fetchDatas();
      setCanModal(true);
      console.log('working')  }


  const closeFessModal = () => {
    setFessModal(false);
    console.log('working')  }

    const showModal21=()=>{
      fetchDatad();
      setCostModal(true);
    }

    const closeCostModal=()=>{
      setCostModal(false);

    }

    const rem = () => {
      setRefreysh(!refreysh);
      console.log('wahala')  }

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

  const closeCanModal = () => {
    setCanModal(false);
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
        // setSuppArray(response.data.data)

        setIsLoading(false)


      })

  }
  useEffect(() => {
    fetchReviewedData()

  }, [])

const setToMDA=()=>{
  setFilParam('MDA')
}

const setToFilterType=()=>{
  setFilParam('Request Type')
}


console.log(suppArray)



  const chkStatus = (status) => {
    if (status === 'Approved')
      return { color: '#0DAC26', margin: '2px', font:"normal normal normal 17px/25px Avenir" }
    else if (status === "Rejected")
      return { color: '#EF0621', margin: '2px', font:"normal normal normal 17px/25px Avenir" }
    else if (status === "Pending")
      return { color: '#FDCC29', margin: '2px', font:"normal normal normal 17px/25px Avenir"}
  }


  const statusText =(status)=>{
    if(status === 'Approved')
      return "Approved"
    else if(status === "Pending")
      return "Pending"
    else if(status === "Rejected")
      return "Rejected"
    }

  const handleClick = (e) => {
    console.log(e);
    setFessModal(true);

  }

  const reload =()=>{
    setDone(true);
    console.log('jumble')
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

  const isGreen = { backgroundColor: 'light-green', borderRadius: '40px', border:"1px solid #707070" }
  const isWhite = { backgroundColor: 'white', borderRadius: '40px', border:"1px solid #707070" }
  useEffect(()=>{
    
          suppArray.filter(value => {
            if(typedValue===null || typedValue===undefined){
           return   console.log('here')
            }
            else{const searchStr = typedValue?.toLowerCase();
          return  setSuppArray(value.requestType?.toLowerCase().includes(searchStr));
           }
             });
          console.log(suppArray);
  
    
  }, [typedValue])
  
  




if(isLoading){
  return <IsLoading/>
}


 else if (isRequest && !isLoading) {

 if(done===true){
   setDone(false);
   fetchData();
 }

    const columns = [
      {
        title: 'Items',
        dataIndex: 'items',
        render: (text,record) => <a onClick={ () => openFessModal(record.requestId)} >{text}</a>,
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
        render:(text,record,index) => <div style={{display:'flex'}}><span style={{margin:'8px'}}><LensIcon style={{color:'#FDCC29',font:"normal normal normal 17px/25px Avenir"}}/></span> <span >{record.reviewStatus}</span></div>

      },
      {
        title: 'Action',
        dataIndex: 'action',
        render:(text,record,index) => <SplitsButton onClick={(e)=>{
        
          }} handleAccept={openSecModal} handleClose={closeSecModal} handleCancel={openCanModal} handleCanClose={closeCanModal}> {text}</SplitsButton>
      }
      
    ];
  
    var data = suppArray?.map((it) => (
      {
        
        key: it.requestId,
        items: it.items,
        requestInitiator: it.requestInitiator,
        requestType: it.requestType,
        initiatedDate: it.initiatedDate,
        reviewStatus: it.reviewStatus,
        approvalStatusId: it.approvalStatusId,
        action: <SplitsButton onClick={setFessModal}/>
      
      }
    ))

    
    return (
      <div style={{ width: '100%' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>

        <TablesViewMemo show={fessModal} handleClose={closeFessModal} row={responseData} journey={responseData.approvalJourneyResponse} sequence={responseData.approvalSequence??[]}/>
        <RequestReport show={secModal} handleClose={closeSecModal} id={recRef} row={responseData} refresh={rem} reload={reload} docs={responseData.uploadedDocuments??[]}/>
        <CancelRequest show={canModal} handleClose={closeCanModal} id={recRef} row={responseData} refresh={rem} reload={reload} docs={responseData.uploadedDocuments??[]}/>


          <div>Good Day</div>
          <div style={{ fontSize: '23px' }}>{cookies.get("firstName")} {cookies.get("lastName")}; #{cookies.get("staffNumber")}</div>

          <div>{cookies.get("role")} {cookies.get("mda")} | {grade}</div>
        </div>
        <div>
          <LocationDetails />
        </div>
        {console.log('passed')}
        
      </div>
    <SuccessModal show={success} closeModal={undoSuccess}/>
        <div style={{ marginLeft: '50%', marginBottom: '1%' }} className='row'>
          
        </div>
        <div style={{ display: 'flex' }} className='row'>
          <Grid container justify="center">
            <Grid item sm={11} >
              <div style={{display:'flex',justifyContent:'flex-end'}}>
            <div style={{width: '250px',margin:'8px' }}><SplittedButton /></div>
            <SearchInput style={{marginRight:'16px'}}  onChange={e=>setTypedValue(e.target.value)} value={typedValue}/>
              </div>
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

                    
                  >
                    
                  </Table>
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
        width:30,
        
        render: text => <a onClick={openRevModal}>{text}</a>,
      },
      {
        title: 'Request Type',
        dataIndex: 'requestType',
        
      },
      {
        title: 'Cost',
        dataIndex: 'cost',
      },
      {
        title: 'Evaluation',
        dataIndex: 'evaluation',
        render:(text) => <a onClick={showModal21}>{text}</a>
      },
      {
        title: 'Officer\'s Name',
        dataIndex: 'officerName',
      },
      {
        title: 'Review Status',
        dataIndex: 'reviewStatus',
        render:(text,record,index) => <div><span style={{margin:'8px'}}><LensIcon style={chkStatus(record.reviewStatus)}/></span> <span >{record.reviewStatus}</span></div>

      },
      {
        title: 'Action',
        dataIndex: 'action',
        render:(text,record,index) => <SplitsButton handleAccept={handle} handleClose={closePassModal} handleCancel={openCanModal} handleCanClose={closeCanModal}>{text}</SplitsButton>,

      }
    ];
    var data = rowsReviewed?.map((it) => (
      {
        key: it.requestId,
        items: it.items,
        requestType: it.requestType,
        cost: it.cost,
        evaluation: it.evaluation,
        officerName: it.officerName,
        reviewStatus: it.reviewStatus,
        approvalStatusId: it.approvalStatusId
        //action:<SplitsButton onClick={handleAccept}/>
   
      }
    ))
    

    return (

     

      <div style={{ width: '100%' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <div style={{ marginLeft: '58%' }} className='row'>

          <FrankForm  show={passModal} handleClose={closePassModal} accept={doAccept} setSuccesss={doSuccess}/>
          <TablesViewMemo show={revModal} handleClose={closeRevModal} row={responseData2} docs={responseData2.uploadedDocuments??[]} journey={responseData2.approvalJourneyResponse??[]} sequence={responseData2.approvalSequence??[]}/>
          <TechnicalReviewModal21 show={costModal} handleClose={closeCostModal} technical={rowd}/>
          <CancelRequest show={canModal} handleClose={closeCanModal} id={recRef} row={responseData2} refresh={rem}/>

          <SuccessModal show={success} />
          
       
        </div>
        <div style={{ display: 'flex' }} className='row'>
        {/* <div style={{ width: '150px',marginLeft: '50%',marginBottom:0}}><SplitButton /></div>          
         <span style={{ marginLeft: '73.1%', marginBottom:'30px'}}> <SearchInput  /></span> */}
          <Grid container sm={12} justify='center' alignItems='center' >
          
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
                  console.log(record.key)
                  return {
                      onClick: event => setRowValues2(record.key),
                     
                  };
                  
                }}
                    columns = { column }
                    dataSource = { data }
                    bordered
                    scroll={{ x: 'max-content' }}
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

