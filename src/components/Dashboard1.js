import { Divider, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import httpCommon from '../httpCommon';
import SplitsButton from '../input/SplitsButton';
import http from '../httpCommon';
import LocationDetails from './layouts/LocationDetails';
import SavedRequest from './SavedRequest';
import SubmittedRequest from './SubmittedRequest';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryLabel,VictoryAxis} from 'victory';
import RequestForm from './RequestForm';
import ViewMemoForm from './pages/ViewMemoForm';
import axios from 'axios';
import DashboardView from './pages/DashboardViewMemo'
import DashboardViewMemo from './pages/DashboardViewMemo';
import EditRequestForm from './EditRequestForm.txt'
import EditRequest from './EditRequest';



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


const handleSubmits= () =>{
  setShowModal(true);
  console.log(reff.current)
}

const handleClose = () =>{
  setShowModal(false)
}



  const fetchDashboardData = async () => {
    let url = 'dashboard-request';

    httpCommon.get(url)
      .then((response) => {
        console.log('server')
        console.log(response.data.data)
        setDashBoard(response.data.data)
        setInitiatedRequests(response.data.data.initiatedRequests)
        setCompletedRequests(response.data.data.completedRequests)
        setRequests(response.data.data.requests)
        setIssuedRequests(response.data.data.issuedRequests)
        setApprovedRequests(response.data.data.approvedRequests)


      })

  }
  useEffect(() => {
    fetchDashboardData()
    console.log(dashBoard)

  }, [])


 const handleClick = (e) =>{
    setClickedRequestId(e);
    console.log(ref.current)
   
 
    
   console.log(reff.current)
  
 
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
  const handleEdit= (e, ids)=>{

    let config = {
     
      params: {
        requestId: e
      },
    }
    setShowEdit(true);
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
      })
      
    window.location.reload();
  }

 
  const handleSubmit= async ()=>{
    const data = await http.get('get-facility-request', {
                    params:{
                    id:ref.current
                  }
                 
                })
                .then((response)=>{
                  response.data.data.saveAsDraft = false;
                  console.log(response)
                })
                .then((res)=>{
                  axios.post('', {res})
                  console.log(res)

                })
                
                
           

  }
  
 
 

if(showEdit){
  
  console.log(ref.current)
  console.log(ref1.current)
    console.log('yoopyoop')
  return(
  <div>
    
    <EditRequest rowss={responseData} requestId={ref.current}/>
    
  </div>
  )
  
}
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
        {console.log('passed')}
        <DashboardViewMemo data={responseData} show={reff.current}  handleClose={handleClose}/>
       
    
      </div>
      <div style={{ marginTop: '20px' }}>
        <Grid container sm={12} style={{ marginBottom: '24px' }}>
          <Grid item sm={3}>
            <span style={{ fontWeight: '900', fontFamily: 'auto', marginBottom: '30px' }}>Issued maintenance requests</span>
            <div style={{ fontWeight: '900', fontFamily: 'auto', marginTop: '3px' }}></div>

            <Paper style={{ backgroundColor: 'white', height: '300px', width: '350px' }}>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={4}
              >
                <VictoryLine
                  width={'100%'}
                  interpolation="natural"
                  labelComponent={
                    <VictoryLabel angle={-45} textAnchor="end"/>
                  }
                  style={{
                    data: { stroke: "#0E23F0" },
                    parent: { border: "1px solid #ccc" }

                  }}
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 },
                  ]}
                />
                <VictoryAxis dependentAxis
                tickValues={[2,4,6,8,10,12,14,16,19,20]}
                />
                <VictoryAxis 
                tickValues={[1,2,3,4,5,6,7,8,9,10]}
                style={{tickLabels:{angle:30}}}
                />
              </VictoryChart>
            </Paper>
          </Grid>
          <Grid item sm={3} style={{ marginLeft: '90px' }}>
            <span style={{ fontWeight: '900', fontFamily: 'auto' }}>Approved Requests</span>
            <div style={{ fontWeight: '900', fontFamily: 'auto', marginTop: '3px' }}></div>
            <Paper style={{ backgroundColor: 'white', height: '300px', width: '350px', padding: '0px' }}>
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
                    [
                      { x: 1, y: 2 },
                      { x: 2, y: 3 },
                      { x: 3, y: 5 },
                      { x: 4, y: 4 },
                      { x: 5, y: 7 }
                    ]
                  }
                />
              </VictoryChart>
            </Paper>
          </Grid>
          <Grid item container sm={3} style={{ marginLeft: '120px' }}>
            <Grid item sm={12} style={{ marginTop: '8px', padding: '12px' }}>
              <Paper style={{ backgroundColor: 'white', height: '140px', width: '300px' }}>
                <div style={{ fontWeight: 'bolder', padding: '10px', fontFamily: 'auto', marginTop: '3px' }}>
                  Initiated Request
                            </div>
                <Divider />
                <div style={{ fontWeight: 'bolder', fontSize: '2em', padding: '8px' }}>
                  {initiatedRequests}
                </div>

              </Paper>
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <Grid item sm={12} style={{ marginTop: '-6px', padding: '12px' }}>
              <Paper style={{ backgroundColor: 'white', height: '138px', width: '300px' }}>
                <div style={{ fontWeight: 'bolder', padding: '10px', fontFamily: 'auto', marginTop: '3px' }}>
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

        {requests.map((item) => (
          (item.currentApproverStage > 0) ? 
          <div  onClick={()=>handleClick(item.requestId)} style={{marginTop:'16px'}}>
            <SubmittedRequest status={item.approvalStatusId} officerName={item.currentApprover}  date={item.lastModified} title={item.subject} handlePop={handleSubmits}/></div>
          :
           <div  onClick={()=>handleClick(item.requestId)} style={{marginTop:'16px'}}>
             <SavedRequest key={item.requestId} title={item.subject} handleEdit={handleEdit.bind(this,item.requestId)} handleDelete= {handleDelete.bind(this,item.requestId)}/></div>
        ))}


      </div>
    </div>
  )
}
