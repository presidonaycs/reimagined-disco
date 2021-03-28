import { Box, Button, Card, Divider, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, SvgIcon, TextField, withStyles } from '@material-ui/core';
import React, { useEffect, useState,useCallback,useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from "./../components/iconComponent/upload.svg";
import http from './../httpCommon';
import LocationDetails from './layouts/LocationDetails';
import Cookies from "universal-cookie";
import UploadButton from './UploadButton'
import SuccessModal from '../assets/SuccessModal'
var baseURL='http://devsvr.edogoverp.com/'





const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        borderRadius: '20px 20px 20px 20px',
        textTransform: 'none',
        fontSize: '0.9rem',
        padding: '2px 12px',
        width: '240px',
        lineHeight: 1,
        margin: '20px',
        backgroundColor: 'yellow',
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

const BooButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '0.9rem',
        padding: '2px 12px',
        width: '280px',

        lineHeight: 3,
        borderRadius: 0,
        backgroundColor: 'green',
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
      fontSize: '0.9rem'
  
  
    },
    myDivs: {
      fontSize: '0.9rem',
      marginTop: '12px',
      fontFamily: 'avenir',
    },
    innerDiv: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.9rem',
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

let cookies = new Cookies();

const EditRequest = (props) => {
    const classes = useStyles()
    const history = useHistory();
    const [Request, setRequest] = useState('')
   
    var useStateRef=require('react-usestateref')
  
    const [error, setError] = useState('')
    const [selValue, setSelValue, selValueRef] = useStateRef(0)
    const [subject, setSubject] = useState('')
    const [details, setDetails] = useState('')
    const [imagess, setImagess] = useState([]);
    const [pat, setPath] = useState('');
    const [loading, setLoading] = useState(false);
    const [selErr, setSelErr] = useState(false);
  const [subErr, setSubErr] = useState(false)
  const [detErr, setDetErr] = useState(false)
  const [success, setSuccess] = useState(false);
  const textInput = useRef(null);


  useEffect(() => {
    textInput.current.focus();
  }, []);



    var imgis = {
      image:'', 
      name:''
    }
    var path=''
     var facImg = [];
    
    const recImagg = (e,n) =>{
     
      
      
    imgis.image = e;
    imgis.name = n;
    path = `http://devsvr.edogoverp.com${e}`
    facImg.push(imgis);
    
    setPath(path)
    imagess.push(imgis)
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
     




    useEffect(()=>{
      const setInit = ()=>{
        setSubject(props.rowss.subject)
        setDetails(props.rowss.details)
      }
      setInit();
    }, [])

    const handleSave = (e) => {
      if(validate(Request, subject, details)){
        pingError(Request, subject, details);
      }
      else{
        e.preventDefault();
        let url = ''
        console.log(url)
    
        console.log('wait')
        http.post(url, {
          id: props.requestId,
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
            window.location.reload();
          })
    
          
        
    
      }
    }
      const closeModal = ()=>{
        setSuccess(false);
        history.push("/facility-portal")
      }
      

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

      const changeDetails = (event) =>{
        setDetails(event.target.value)

        cookies.set('dettails', event.target.value, {path:"/"})

      }

      const handleChangeSubject = (event) => {
        setSubject(event.target.value)
        cookies.set('subbject', event.target.value, {path:"/"})
      }

      const handleSelect = (e) =>{
        setSelValue(e.target.value);
        console.log(selValueRef.current)
    
        console.log(e.target.value)
      }
    
      const handleSubmit = (e) => {
    
        e.preventDefault();
        let url = ''
        console.log(url)
    
        console.log('wait')
        http.post(url, {
          id : props.requestId,
          subject:subject,
          detail: details,
          storeAsDraft: false,
          approvalStatusId: 0,
          requestcategoryid: selValueRef.current,
          images: []
        })
          .then((response) => {
            console.log('server')
            console.log(response.data.data)
            console.log("yess")
            console.log(subject)
            console.log(details)
            window.location.reload();
          })
         
    
    
      }
    

      const dayte = formattedDate(new Date());
    
    console.log('main memo called')
    console.log(props.rows1)
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'EDSG - Employee Details';
    }, []);

    return (
        < Grid Container>
      <div className='col'>
        
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div>Good Morning</div>
            <div style={{ fontSize: '0.9rem' }}>{cookies.get("firstName")} {cookies.get("lastName")}; #{cookies.get("staffNumber")}</div>

            <div>{cookies.get("role")} {cookies.get("mda")} | {grade}</div>
          </div>
        <div>
            <LocationDetails />
      </div>
        {console.log('passed')}

      </div>

        <Grid container>
          <Grid item lg style={{ marginBottom: '1vw' }}>
            <div style={{ fontWeight: 'bold', fontFamily: 'avenir', paddingBottom: '1vw' }}>Facility Request Management</div>

            <Box flexDirection='column' style={{ justifyContent: 'space-between' }}>
              <div style={{ width: '21.5vw' }}>

            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
                  <Card style={{ marginBottom: '1vw', justifyContent: 'space-between' }}>
                    <Box style={{ backgroundColor: 'white' }, { borderRadius: '3px' }, { margin: '20px' }}>
                      <Box style={{ margin: '10px 0px 10px 0px' }}>
                        <FormControl className={classes.formControl} >
                          <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{ width: '20vw', fontSize: '1.3em', paddingBottom: '1vw' }}>
                            Select Request type:
                                </InputLabel>
                          <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            disableUnderline
                            style={{ width: '19vw' }}
                            required
                            onChange = {e=>{setSelValue(e.target.value); setSelErr(false)}}
                            value = {props.rowss ? props.rowss?.requestCategoryId:""}
                            className={classes.selectEmpty}
                          >
                            <MenuItem value={1} >
                              Facility Maintenance
                            </MenuItem>
                            <MenuItem value={2}>Energy & Power Maintenance</MenuItem>
                            <MenuItem value={3}>Office Equipment</MenuItem>
                            <MenuItem value={4}>Office Space Request</MenuItem>
                            <MenuItem value={5}>Work Space Management</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <SuccessModal show={success} closeModal={closeModal}/>

                      <Divider style={{ margin: '0px 0px 0px 0px' }} />
                      <Box className={classes.myDivs}><span style={{ fontWeight: 'bolder',  margin: '10px 0px 10px 0px' }}> Memo initiation date: {dayte}  </span> </Box>
                      <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', margin: '10px 0px 10px 0px' }}>Memo initiator: {cookies.get("firstName")} {cookies.get("lastName")}</span> {initiator}</Box>
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
                </form>
              </div>
            </Box>
          </Grid>


          <Grid item lg style={{ marginTop: '1vw' }} >
            <Box flexDirection='column' style={{ maxWidth: '100%' }, { padding: '20px' }} fontSize='0.9rem' >
              <Box >
                <Box flexDirection='column' maxWidth='100%' width='700px' minWidth='10%'>
                  <Paper style={{ marginTop: '147px' }, { padding: '20px', maxWidth: '100%', minWidth: '10%' }}>
                    <Box>
                      <TextField id="outlined-details-static"
                        label="Subject:"
                        multiline
                        InputProps={{ disableUnderline: true }}
                        rows={2}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: '100%' }, { backgroundColor: 'white' }, { margin: '0px' }}
                        fullWidth
                        onChange={(e)=>{setSubject(e.target.value); setSubErr(false); }}
                        defaultValue={props.rowss?.subject ?? ""}
                        // value = {subject}
                        ref={textInput}


                      />
                    </Box>
                    <Divider style={{ marginBottom: '10px' }} />

                    <Box>
                      <TextField
                        id="outlined-details-stati"
                        label="Details:"
                        multiline
                        cols={300}
                        rows={14}
                        style={{ backgroundColor: 'white' }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{ disableUnderline: true }}
                        fullWidth
                        defaultValue={props.rowss?.details ?? ""}
                        onChange={(e)=>{setDetails(e.target.value); setDetErr(false); }}
                      />
                    </Box>
                    <Divider />

                    <Box>
                    <UploadButton style={{width:'200px'}} sendImagg={recImagg}/>
                    {
                      props.rowss?.uploadedDocuments?.map((item)=>(
                        <div key={item.name}><a href={item.filePath}>{item.fileName}</a></div>
                      )

                      )
                    }
                    
                   
                    </Box>
                  </Paper>
                </Box>
                <Box flexDirection='row' style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between' }} >
                  <Box style={{ justifyContent: 'flex-start' }}>
                    <BooButton className='btn-block' style={{ marginRight: '0px', maxWidth: '320px' }} onClick={handleSave} type = 'submit'>
                      Save Request
                </BooButton>
                  </Box>
                  <Box style={{ justifyContent: 'flex-end' }}>
                    <BooButton className='btn-block' style={{ marginLeft: '0px', maxWidth: '100%', marginRight: '0px' }}  onClick={handleSubmit}>
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

};

export default EditRequest;
// onClick={handleSubmit}
