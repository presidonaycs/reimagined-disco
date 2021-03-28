import { Box, Button, Card, Divider, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, SvgIcon, TextField, withStyles } from '@material-ui/core';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from "./../components/iconComponent/upload.svg";
import http from '../httpCommon';
import https from '../uploaderz';
import ImageName from './ImageName'
import LocationDetails from './layouts/LocationDetails';
import Cookies from "universal-cookie"
import SuccessModal from '../assets/SuccessModal'
import Uploadd from './Uploadd'
import Upload from './Upload'
import UploadButton from './UploadButton'
import IsLoading from '../assets/IsLoading';


var baseURL='http://devsvr.edogoverp.com/'

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
    fontSize: 12,
    padding: '2px 12px',
    width: '240px',
    lineHeight: 1,
    margin: '20px',
    backgroundColor: '#FFF00D99',
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
      backgroundColor: '#FFF00D99',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFF00D99',
      borderColor: 'yellow',
    },

  },
})(Button);

const BooButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '2px 12px',
    width: '280px',

    lineHeight: 3,
    borderRadius: 0,
    backgroundColor: '#1C811C',
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
      borderColor: 'lightgreen',
    },

  },
})(Button);

const useStyles = makeStyles({
  costBox: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px'


  },
  myDivs: {
    fontSize: '16px',
    marginTop: '12px',
    fontFamily: 'avenir',
  },
  innerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
    padding: '6px',

    borderRadius: '3px',
    fontFamily: 'avenir'

  },

})

const TextArea = withStyles({
  root: {
    width: '150px',
    height: '200px'
  },
  body: {
    minWidth: '150px',
    height: '200px'
  }
})(TextField)





var initiationDate = ""
var viewMemo = ''
var initiator = '';
var cost = "0.00"
var officerPost = "HOS"
var date = new Date().toString;
var title = 'i can still recall our last summers'
var post = 'officer 1'
var ministry = 'ministry of Education'
var numb = 78943
var grade = 'Grade level 8'
var descriptions = 'sorry its ovaaaaaaaaaaaaaaaaaa'
let today = new Date();

let obj =  {
  id: 0,
  categoryid: 0,
  subject: "",
  detail: "",
  dateSubmitted: "",
  cost: 0,
  approveCost: 0,
  paymentStatusid: 0,
  currentApprovalStageid: 0,
  dateApproved: null,
  requestcategoryid: 0,
  createdAt: "",
  modifiedAt: "",
  createdBy: "",
  modifiedBy: "",
  storeAsDraft: false,
  mdaId: 0
}

const RequestForm = (props) => {
  const history = useHistory();
  const [Request, setRequest] = useState('')
  const [subject, setSubject] = useState('')
  const [details, setDetails] = useState('')
  const [rows, setRows] = useState(obj)
  const [images, setImages] = useState([{name:'names'}])
  var useStateRef=require('react-usestateref')
  const [error, setError] = useState('')
  const [selValue, setSelValue, selValueRef] = useStateRef(0)
  const [selErr, setSelErr] = useState(false);
  const [subErr, setSubErr] = useState(false)
  const [detErr, setDetErr] = useState(false)
  const [success, setSuccess] = useState(false);
  const [flies, setFlies] = useState([]);
  const [fahil, setFahil] = useState(null)
  const [imagess, setImagess] = useState([]);
  const [pat, setPath] = useState('');
  const [loading, setLoading] = useState(false);

  let imagg;
  let namm;


  var imgis = {
    image:'', 
    name:''
  }
  var path=''
   var facImg = [];
  
  const recImagg = (e,n) =>{
   
    
    
  imgis.image = e;
  imgis.name = n;
  facImg.push(imgis);
  
  // setImagess(facImg)
  //setImgState()
  
  }
  
  
  
  
  console.log(facImg)
  
   





  const validate = (Request, subject, details) =>{
    if(selValueRef.current === null || selValueRef.current === "" || selValueRef.current === undefined || selValueRef.current === 0 || subject === null || subject === "" || subject === undefined || details === null || details === "" || details === undefined)
      return true
    else
      return false
  }



const pingError = (Request, subject, details) =>{
    if(selValueRef.current === null || selValueRef.current === "" || selValueRef.current === undefined|| selValueRef.current === 0)
      setSelErr(true)
    else setSelErr(false)
    if(subject === null || subject === "" || subject === undefined)
      setSubErr(true)
    else setSubErr(false)
    if(details === null || details === "" || details === undefined)
      setDetErr(true)
    else setDetErr(false)
  }

  const resetErrors=()=>{
    setSelErr(false);
    setDetErr(false);
    setSubErr(false);
  }



    let cookies = new Cookies();
    cookies.set("subjectValue", subject, {path:"/"})
    cookies.set("detailsValue", details, {path:"/"})

const closeModal = ()=>{
  setSuccess(false);
history.push('/facility-portal')
}



  const handleSave = (e) => {
    e.preventDefault();
    if(validate(Request, subject, details)){
      pingError(Request, subject, details);
    }
    else{
    setLoading(true);
    let url = ''
    console.log(url)

    http.post(url, {
      subject: subject,
      detail: details,
      storeAsDraft: true,
      approvalStatusId: 0,
      requestcategoryid: selValueRef.current,
      images: facImg

    })
      .then((response) => {
        console.log('server')
        console.log(response.data)
        console.log("yess")
        setSuccess(true)
        setLoading(false);
      })
      resetErrors();
    }      


  }

const handleSubChange=(e)=>{
  setSubject(e.target.value)
}


  console.log(subject + details + Request);

  // const fetchDatas = async () => {
  //   let url = "get-facility-request" // 'Director-ReviewedApprovals';
  //   console.log(props.requestId)
  //   console.log('hey')
  //   console.log(url)
  //    http.get(url, {
  //      params:{
  //        id:props.requestId
  //      }
  //    })
    
  //     .then((response) => {
  //       console.log('server')
  //       console.log(response.data)
  //       setError(response.data.code)
  //       setRows(props.rows)
        
        
  //     })

  // }
  // useEffect(() => {
  //   fetchDatas()

  // }, [])

 let hello;
 console.log(hello);

  
function formattedDate(date){

  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  
   return day + '.' + month + '.' + year
}








  const handleSubmit =  () => {
    if(validate(Request, subject, details)){
      pingError(Request, subject, details);
    }
    else{
    
    
      setLoading(true);
    
    let url = ''
    console.log(url)

    console.log('wait')
    http.post(url, {
      subject: subject,
      detail: details,
      storeAsDraft: false,
      approvalStatusId: 0,
      requestcategoryid: selValueRef.current,
      images: facImg
    })
      .then((response) => {
        console.log('server')
        console.log(response.data.data)
        console.log("yess")
        setLoading(false);
        setSuccess(true);
        setTimeout(()=>{
          history.push('/facility-portal')
        }, 3000)

      })
       
    }

  }



  const fyles=(files)=>{
    setFlies(files)
  }

  
  const fileHandler = (e) => {
    setFahil(e.target.files[0])
    console.log(fahil)
}

 
  const dayte = formattedDate(new Date());

  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EDSG - Employee Details';
  }, []);



  if(loading){
    return <IsLoading />
  }
  else{
  return (
    < Grid Container>
      <div className='col'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div>Good Morning</div>
            <div style={{ fontSize: '23px' }}>{cookies.get("firstName")} {cookies.get("lastName")}; #{cookies.get("staffNumber")}</div>

            <div>{cookies.get("role")} {cookies.get("mda")} | {grade}</div>
          </div>
            <div>
                <LocationDetails />
          </div>

      </div>
        <Grid container>
          <Grid item lg style={{ marginBottom: '1vw' }}>
            <div style={{ fontWeight: 'bold', paddingBottom: '1vw',fontSize: '14px', marginTop:'8px' }}>Facility Request Management</div>

            <Box flexDirection='column' style={{ justifyContent: 'space-between' }}>
              <div style={{ width: '21.5vw' }}>

                <div className={classes.root}>
                  <Card style={{ marginBottom: '1vw', justifyContent: 'space-between' }}>
                    <Box style={{ backgroundColor: 'white' }, { borderRadius: '3px' }, { margin: '15px' }}>
                      <Box style={{ margin: '10px 0px 10px 0px' }}>
                        <FormControl error={selErr}>
                          <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{ width: '20vw', fontSize: '1.3em', paddingBottom: '1vw' }}>
                            Select Request type:
                          </InputLabel>
                          <Select
                            value={selValue ? selValue : ""}
                            labelId="demo-simple-select-placeholder-label-label"
                            displayEmpty
                            disableUnderline
                            style={{ width: '19vw' }}
                            required
                            onChange = {e=>{setSelValue(e.target.value); setSelErr(false)}}
                            className={classes.selectEmpty}
                            helperText="please choose a category"
                          >
                            <MenuItem value={1} >
                              <span style={{ fontSize: '0.9rem' }}>Facility Maintenance</span>
                            </MenuItem>
                            <MenuItem value={2}> <span style={{ fontSize: '0.9rem' }}>Energy & Power Maintenance</span></MenuItem>
                            <MenuItem value={3}> <span style={{ fontSize: '0.9rem' }}>Office Equipment</span></MenuItem>
                            <MenuItem value={4}> <span style={{ fontSize: '0.9rem' }}>Office Space Request</span></MenuItem>
                            <MenuItem value={5}> <span style={{ fontSize: '0.9rem' }}>Work Space Management</span></MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
<SuccessModal show={success} closeModal={closeModal}/>

                      <Divider style={{ margin: '0px 0px 0px 0px' }} />
                      <Box className={classes.myDivs}><span style={{ fontWeight: 'bolder', margin: '10px 0px 10px 0px', fontSize:'0.9rem' }}> Memo initiation date: {dayte} </span> </Box>
                      <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', fontSize: '0.9rem', margin: '10px 10px 10px 0px' }}>Memo initiator: {cookies.get("firstName")} {cookies.get("lastName")}</span> {initiator}</Box>
                    </Box>
                  </Card>
                  {/* <Card style={{ marginBottom: '1vw' }}>
                    <div className={classes.costBox}>
                      <div className={classes.innerDiv}>
                        <Box style={{ fontWeight: 'bolder', margin: '8px' }}>Cost implication</Box>
                        <Divider flexItem variant='middle' />
                        <Box style={{ fontWeight: 'bolder', margin: '8px' }}>(N)</Box>
                      </div>
                      <Divider style={{ margin: '0px 0px 0px 0px' }} />
                      <Box className={classes.innerDiv} style={{ justifyContent: 'space-between', alignItems: 'left' }}>
                        <Box style={{ margin: '8px', justifyContent: 'space-evenly', alignItems: 'left' }}>{cost}</Box>
                        <a href='#' style={{ fontSize: '17px' }}>payment Approval <SaveAltIcon size="small" style={{ fontSize: '16px' }} /></a>
                      </Box>
                    </div>
                  </Card> */}
                  {/* <Paper style={{ justifyContent: 'space-between', alignItems: 'flex-start' }} >

                    <Box style={{ display: 'flex', alignItems: 'center', paddingLeft: '1vw' }}>
                      <Box style={{ fontWeight: 'bolder' }, { paddingRight: '13px' }, { fontSize: '16px' }}>Status:
                                 </Box>
                      <Box style={{ paddingLeft: '1vw' }}><SvgIcon style={{ marginTop: '13px', fontSize: '20px' }}><Circle /></SvgIcon>
                      </Box>
                    </Box>

                  </Paper> */}
                  {/* <Stepz /> */}

                </div>

              </div>
            </Box>
          </Grid>


          <Grid item lg style={{ marginTop: '1vw' }} >
            <Box flexDirection='column' style={{ maxWidth: '90%' }, { padding: '20px' }} fontSize='62.5%' >
              <Box >
                <Box flexDirection='column' maxWidth='100%' width='600px' minWidth='10%' style={{marginTop:'11px'}} >
                  <Paper style={{ marginTop: '147px' }, { padding: '20px', maxWidth: '100%', minWidth: '10%' }}>
                    <Box>
                      <FormControl  style={{width:"100%"}}>
                      <TextField id="outlined-details-static"
                        label="Subject:"
                        multiline
                        required
                        error={subErr}
                        InputProps={{ disableUnderline: true }}
                        rows={2}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: '100%' }, { backgroundColor: 'white' }, { margin: '0px' }}
                        fullWidth
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value); setSubErr(false); }}


                      />
                      </FormControl>
                    </Box>
                    <Divider style={{ marginBottom: '10px' }} />

                    <Box>
                      <FormControl style={{width:"100%"} }>
                      <TextField
                        id="outlined-details-stati"
                        label="Details:"
                        multiline
                        required
                        error={detErr}
                        cols={300}
                        rows={14}
                        style={{ backgroundColor: 'white' }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{ disableUnderline: true }}
                        fullWidth
                        onChange={(e)=>{setDetails(e.target.value); setDetErr(false); }}
                        value={details}
                      />
                      </FormControl>
                    </Box>
                    <Divider />

                    <Box>
                      {/* <BootstrapButton
                        type='file'
                        variant='contained'
                        component='label'
                        startIcon={<SvgIcon style={{ marginTop: '9px' }}>
                          <Logo />
                        </SvgIcon>}
                      >
                        Upload Supporting Documents
                        <input type='file' accept="/*" onChange={fileHandler} hidden></input>
                      </BootstrapButton> */}
                      <UploadButton style={{width:'200px'}} sendImagg={recImagg}/>
                    
                       
                     
                     
                      {/* <Uploadd/>
                      <Upload filing={fyles}/> */}
                        
                        {/* <div>
                      {
                        flies.map((it)=>(
                          it.name
                          
                          
                        ))
                      }
                      </div> */}
                      {/* if(images === ''){

                      }
                      else
                       <ImageName arr={images}/> */}
                    </Box>
                  </Paper>
                </Box>
                <Box flexDirection='row' style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between' }} >
                  <Box style={{ justifyContent: 'flex-start' }}>
                    <BooButton className='btn-block' style={{ marginRight: '0px', maxWidth: '320px' }} onClick={handleSave}>
                      Save Request
                </BooButton>
                  </Box>
                  <Box style={{ justifyContent: 'flex-end' }}>
                    <BooButton className='btn-block' style={{ marginLeft: '0px', maxWidth: '100%', marginRight: '0px' }} onClick={handleSubmit}>
                      Submit Request
                </BooButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>

    </ Grid>
  );
                      }
};
export default RequestForm
