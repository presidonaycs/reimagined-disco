import { Divider, Grid, Paper } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryTheme } from 'victory';
import { default as http, default as httpCommon } from '../httpCommon';
import IsLoading from "./../assets/IsLoading";
import SuccessModal from './../assets/SuccessModal'
import EditRequest from './EditRequest';
import LocationDetails from './layouts/LocationDetails';
import DashboardViewMemo from './pages/DashboardViewMemo';
import SavedRequest from './SavedRequest';
import SubmittedRequest from './SubmittedRequest';





export default function Dashboard1() {
  var useStateRef=require('react-usestateref')
  const [dashBoard, setDashBoard] = useState([])
  const [initiatedRequests, setInitiatedRequests] = useState(0)
  const [completedRequests, setCompletedRequests] = useState(0)
  const [requests, setRequests] = useState([])
  const [issuedRequests, setIssuedRequests] = useState([])
  const [approvedRequests, setApprovedRequests] = useState([])
//  const [showModal, setShowModal] = useState(false)
    let [showModal, setShowModal, reff] = useStateRef(false)
    let [loading, setLoading] = useState(true);




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
  var isSubmittedList = []
  var isSavedList = []
 
  var useStateRef1=require('react-usestateref')
  var useStateRef2=require('react-usestateref')
  var [clickedRequestId, setClickedRequestId, ref] = useStateRef(0);
  const [showEdit, setShowEdit] = useState(false) 
  const [temp, setTemp] = useState({})
  let [docs, setDocs, docref] = useStateRef([])
  var [rows, setRows, ref1] = useStateRef([]);
  var [success, setSuccess] = useState(false)

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



const handleSubmits= (e) =>{
  let url = 'View-Memo-Details' 
setLoading(true);
  http.get(url, {
    params: {
     
      requestId:e
    }
  })
    .then((response) => {
      console.log(url)
      console.log(response.data)
    //  setError(response.data.code)
     // setRows(response.data.data)
     if (response.data.data === null) {
     
      console.log('logtest')
      console.log('logan')

      console.log(responseData)
     }
     else 
     {
       setResponseData(response.data.data)
     

     }

     setShowModal(true);
     setLoading(false);
      
    //  { ref.current< 1 ? setDocs([]): //setDocs(response.data.data.uploadedDocuments)}

    }
    )
  console.log(reff.current)
}

const handleClose = () =>{
  setShowModal(false)
}

let cookie = new Cookies();
  useEffect(() => {
    setLoading(true)
  const fetchDashboardData = async () => {
    let url = 'dashboard-request';

    await http.get(url)
      .then((response) => {
        if(response.data.data === null || response.data.data === undefined){ 
          setLoading(false)
        }
        else{
          console.log('server')
          console.log(response.data.data)
          setDashBoard(response.data.data)
          setInitiatedRequests(response.data.data.initiatedRequests)
          setCompletedRequests(response.data.data.completedRequests)
          setRequests(response.data.data.requests)
          setIssuedRequests(response.data.data.issuedRequests)
          setApprovedRequests(response.data.data.approvedRequests)
          setLoading(false)
        }

      })
  }
  
    fetchDashboardData()
    console.log(dashBoard)

  }, [])

 
  const handleSubmit = async (e) =>{
    setLoading(true)
    let params = new URLSearchParams();
    params.append('FacilityRequestVM', null);
    params.append('requestId', e );
    let key = parseInt(e)
    let temp ;
    await http.get("get-dashboard-update", {
      params:{
       
        requestId: e

      }
    })
    .then((response) => {
      setLoading(false);
      setSuccess(true)   
 })
   
    
    
  }


const closeSuccess=()=>{
  setSuccess(false);
  setTimeout(()=>{
    window.location.reload();
  }, 5000)
}






 const handleClick = (e) =>{
   
    setClickedRequestId(e);
   
 
    
  
 
    let url = 'View-Memo-Details' 

    http.get(url, {
      params: {
       
        requestId:e
      }
    })
      .then((response) => {
        console.log(url)
        console.log(response.data)
      //  setError(response.data.code)
       // setRows(response.data.data)
       if (response.data.data === null) {
       
        console.log('logtest')
        console.log('logan')

        console.log(responseData)
       }
       else 
       {
         setResponseData(response.data.data)


       }

      
        
      //  { ref.current< 1 ? setDocs([]): //setDocs(response.data.data.uploadedDocuments)}
  
      }
      )
 
  }
  
  
  
    
 


console.log(ref.current)
  const handleEdit= (e)=>{
    
    let config = {
     
      params: {
        requestId: e
      },
    }
    
    setLoading(true)
    console.log(e)
    console.log("checked again")
    let url = 'View-Memo-Details' 
     http.get(url, config
     
    )
      .then((response) => {
        console.log(url)
        console.log(e)
      //  setError(response.data.code)
       // setRows(response.data.data)
       
       
      // { ref.current< 1 ? setDocs([]): setDocs(response.data.data.uploadedDocuments)}

      if (response.data.data === null) {
       
        console.log('logtest')
        console.log('logan')

        console.log(responseData)
       }
       else 
       {
         setResponseData(response.data.data)
       }

       setLoading(false)
setShowEdit(true);
      })
 
  }

 

  const handleDelete = async (e,id) =>{
      let url='delete-request';
     
      http.delete(url, {
        params:{
          id: e
        }
      })
      .then((response)=>{
        console.log(ref.current)
        console.log(response)
        window.location.reload();
      })
      
   
  }

 
  // const handleSubmit= async ()=>{
  //   const data = await http.get('get-facility-request', {
  //                   params:{
  //                   id:ref.current
  //                 }
                 
  //               })
  //               .then((response)=>{
  //                 response.data.data.saveAsDraft = false;
  //                 console.log(response)
  //               })
  //               .then((res)=>{
  //                 axios.post('', {res})
  //                 console.log(res)

  //               })
                
                
           

  // }
  
 
 

if(showEdit){
  
  
  return(
  <div>
    
    <EditRequest rowss={responseData} requestId={ref.current}/>
    
  </div>
  )
  
}

if(loading){
  return(
    <IsLoading show={loading}/>
  )
}
else{
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div>Good Morning</div>
          <div style={{ fontSize: '23px' }}>{cookie.get("firstName")} {cookie.get("lastName")}; #{cookie.get("staffNumber")}</div>

          <div>{cookie.get("role")} {cookie.get("mda")} | {grade}</div>
        </div>
        <div>
          <LocationDetails />
        </div>
        {console.log('passed')}
        
      </div>
      <div style={{ marginTop: '20px' }}>
        <Grid container sm={12} style={{ marginBottom: '24px' }} style={{display:'flex', justifyContent:'space-between'}}>
          <Grid item sm={3}>
            <span style={{ fontWeight: '700', fontFamily: 'avenir', marginBottom: '30px' }}>Issued maintenance requests</span>

            <Paper style={{ backgroundColor: 'white', height: '300px', width: '25vw' }}>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={4}
              >
                <VictoryLine
                  interpolation="natural"
                  labelComponent={
                    <VictoryLabel angle={-45} textAnchor="end"/>
                  }
                  style={{
                    data: { stroke: "#0E23F0" },
                    parent: { border: "1px solid #ccc" }

                  }}
                  data={dashBoard.issuedRequests}
                />
                <VictoryAxis dependentAxis
                tickValues={[2,4,6,8,10,12,14,16,18,20]}
                />
                <VictoryAxis 
                tickValues={[2018, 2019, 2020, 2021, 2022, 2023]}
                style={{tickLabels:{angle:30}}}
                />
              </VictoryChart>
            </Paper>
          </Grid>
          <Grid item sm={3} style={{ marginLeft: '60px' }}>
            <span style={{ fontWeight: '900', fontFamily: 'avenir' }}>Approved Requests</span>
            <div style={{ fontWeight: '900', fontFamily: 'avenir', marginTop: '3px' }}></div>
            <Paper style={{ backgroundColor: 'white', height: '300px',width:'25vw' ,padding: '0px' }}>
              <VictoryChart
                theme={VictoryTheme.material}
              >
                <VictoryLine
                  width={100}
                  interpolation="natural"
                  style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" }

                  }}
                  data={
                    dashBoard.approvedRequests
                  }
                />
                <VictoryAxis dependentAxis
                tickValues={[2,4,6,8,10,12,14,16,18,20]}
                />
                <VictoryAxis 
                tickValues={[2018, 2019, 2020, 2021, 2022, 2023]}
                style={{tickLabels:{angle:30}}}
                />
              </VictoryChart>
            </Paper>
          </Grid>
          <Grid item container sm={3} style={{ marginLeft: '40px', marginRight: '10px' }}>
            <Grid item sm={12} style={{ marginTop: '8px', padding: '12px', width:'100%'}}>
              <Paper style={{ backgroundColor: 'white', height: '140px'}}>
                <div style={{ fontWeight: 'bolder', padding: '10px', fontFamily: 'avenir', marginTop: '3px' }}>
                  Initiated Request
                            </div>
                <Divider />
                <div style={{ fontWeight: 'bolder', fontSize: '2em', padding: '8px' }}>
                  {initiatedRequests}
                </div>

              </Paper>
            </Grid>
            <DashboardViewMemo data={responseData} show={reff.current}  handleClose={handleClose} docs={responseData.uploadedDocuments??[]} journey={responseData.approvalJourneyResponse??[]} sequence={responseData.approvalSequence??[]}/>
            <br></br>
            <br></br>
            <br></br>
            <Grid item sm={12} style={{ marginTop: '-6px', padding: '12px' }}>
              <Paper style={{ backgroundColor: 'white', height: '138px'}}>
                <div style={{ fontWeight: 'bolder', padding: '10px', fontFamily: 'avenir', marginTop: '3px' }}>
                  Completed Request
                </div>
                <Divider />
                <div style={{ fontWeight: 'bolder', fontSize: '2em', padding: '8px' }}>
                  {completedRequests}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>


        <div style={{ backgroundColor: '#D5FFD5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bolder', padding: '15px' }}>
            Maintenance Request
              </div>
          <div style={{ fontWeight: 'bold', padding: '15px' }}>
            Action
              </div>
        </div>

        {requests?.map((item) => (
          (item.currentApproverStage > 0) ? 
          <div key={item.requestId}  onClick={()=>handleClick(item.requestId)} style={{marginTop:'16px'}}>
            <SubmittedRequest status={item.approvalstatusId} officerName={item.currentApprover}  date={item.lastModified} title={item.subject} handlePop={()=>handleSubmits(item.requestId)}/></div>
          :
           <div key={item.requestId} onClick={()=>handleClick(item.requestId)} style={{marginTop:'16px'}}>
             <SavedRequest key={item.requestId} title={item.subject} handleEdit={handleEdit.bind(this,item.requestId)} handleDelete= {handleDelete.bind(this,item.requestId)} handleSubmit={handleSubmit.bind(this,item.requestId)}/></div>
        ))}


      </div>
      <SuccessModal show={success} closeModal={closeSuccess}/>
    </div>
  )
  }
}
