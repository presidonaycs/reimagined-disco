import React, { useEffect, useState } from 'react';
import { Button, Box, Divider, FormControl, FormHelperText, Grid, InputLabel, Card, makeStyles, MenuItem, Select, TextField, withStyles, Paper, SvgIcon } from '@material-ui/core';
import { ReactComponent as Logo } from "./../components/iconComponent/upload.svg"
import { ReactComponent as Circle } from "./../components/iconComponent/circle-fill.svg"
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Request from './../components/MainMemo';
import MemoSide from './MemoSide';
import LocationDetails from './layouts/LocationDetails';
import http from './../httpCommon'
import { useHistory  } from 'react-router-dom'
import Stepz from './Steps'
import { defaultPrefixCls } from 'antd/lib/config-provider';



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
    fontFamily: 'auto'

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
  var useStateRef=require('react-usestateref')

  const [error, setError] = useState('')
  const [selValue, setSelValue, selValueRef] = useStateRef(0)


  const handleSave = (e) => {
    e.preventDefault();
    let url = ''
    console.log(url)

    console.log('wait')
    http.post(url, {
      subject: subject,
      detail: details,
      storeAsDraft: true,
      approvalStatusId: 0,
      requestcategoryid: selValueRef.current,
      images: []

    })
      .then((response) => {
        console.log('server')
        console.log(response.data)
        console.log("yess")

      })

      history.push("/facility-portal")


  }

  

  const fetchDatas = async () => {
    let url = "get-facility-request" // 'Director-ReviewedApprovals';
    console.log(props.requestId)
    console.log('hey')
    console.log(url)
     http.get(url, {
       params:{
         id:props.requestId
       }
     })
    
      .then((response) => {
        console.log('server')
        console.log(response.data)
        setError(response.data.code)
        setRows(props.rows)
        
        
      })

  }
  useEffect(() => {
    fetchDatas()

  }, [])



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
      subject: subject,
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

      })
       history.push("/facility-portal")


  }

  const handleMemoChange = (event) => {
    setRequest(event.target.value)
  }

  const handleChangeSubject = (event) => {
    setSubject(event.target.value)
  }


  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EDSG - Employee Details';
  }, []);

  return (
    < Grid Container>
      <div className='col'>
        <div className='row flex space-between' style={{ marginBottom: '16px' }}>
          <div>
            <div>Good Morning</div>
            <div style={{ fontSize: '23px' }}>Osagie Osaigbovo; #{numb}</div>

            <div>{post} {ministry} | {grade}</div>
          </div>
          <div>
            <LocationDetails />
          </div>

        </div>
        <Grid container>
          <Grid item lg style={{ marginBottom: '1vw' }}>
            <div style={{ fontWeight: 'bold', fontFamily: 'auto', paddingBottom: '1vw' }}>Facility Request Management</div>

            <Box flexDirection='column' style={{ justifyContent: 'space-between' }}>
              <div style={{ width: '21.5vw' }}>

                <div className={classes.root}>
                  <Card style={{ marginBottom: '1vw', height: '13vw', justifyContent: 'space-between' }}>
                    <Box style={{ backgroundColor: 'white' }, { borderRadius: '3px' }, { margin: '20px' }}>
                      <Box style={{ margin: '10px 0px 10px 0px' }}>
                        <FormControl className={classes.formControl} >
                          <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{ width: '20vw', fontSize: '1.3em', paddingBottom: '1vw' }}>
                            Select Request type:
                                </InputLabel>
                          <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            displayEmpty
                            disableUnderline
                            style={{ width: '19vw' }}
                            required
                            onChange = {handleSelect}
                            error
                            className={classes.selectEmpty}
                          >
                            <MenuItem value={1} >
                              <span style={{ fontSize: '16px' }}>Facility Maintenance</span>
                            </MenuItem>
                            <MenuItem value={2}>Energy & Power Maintenance</MenuItem>
                            <MenuItem value={3}>Office Equipment</MenuItem>
                            <MenuItem value={4}>Office Space Request</MenuItem>
                            <MenuItem value={5}>Work Space Management</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>

                      <Divider style={{ margin: '0px 0px 0px 0px' }} />
                      <Box className={classes.myDivs} fontSize='16px'><span style={{ fontWeight: 'bolder', size: '18vw', margin: '10px 0px 10px 0px' }}> Memo initiation date: </span> {date}</Box>
                      <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', size: '18vw', fontSize: '16px', margin: '10px 0px 10px 0px' }}>Memo initiator:</span> {initiator}</Box>
                      <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', size: '18vw', fontSize: '16px', margin: '10px 10px 20px 0px' }}>View Memo:</span> {viewMemo}</Box>
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
            <Box flexDirection='column' style={{ maxWidth: '100%' }, { padding: '20px', border: '1px  red', }} fontSize='62.5%' >
              <Box >
                <Box flexDirection='column' maxWidth='100%' width='700px' minWidth='10%'>
                  <Paper style={{ marginTop: '147px' }, { padding: '20px', border: '1px  red', maxWidth: '100%', minWidth: '10%' }}>
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
                        onChange={handleChangeSubject}
                        
                        onChange={e => setSubject(e.target.value)}


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
                        
                        onChange={e => setDetails(e.target.value)}
                      
                      />
                    </Box>
                    <Divider />

                    <Box>
                      <BootstrapButton
                        variant='contained'
                        startIcon={<SvgIcon style={{ marginTop: '9px' }}>
                          <Logo />
                        </SvgIcon>}
                      >
                        Upload Supporting Documents</BootstrapButton>
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
};
export default RequestForm
