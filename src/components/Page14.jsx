import { Box, Button, Card, Divider, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, SvgIcon, TextField, withStyles } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import React, { useEffect, useState } from 'react';
import http from '../httpCommon';
import { ReactComponent as Circle } from "./../components/iconComponent/circle-fill.svg";
import ApprovalJourney from './ApprovalJourney';
import LocationDetails from './layouts/LocationDetails';



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
      backgroundColor: 'yellow',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'yellow',
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
      backgroundColor: 'yellow',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'yellow',
      borderColor: 'yellow',
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
    fontSize: '14px',
    marginTop: '12px',
    fontFamily: 'auto',
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





var initiationDate = 7786790;
var viewMemo = 7786790;
var initiator = 3;
var cost = "John Hancock"
var officerPost = "HOS"
var date = '08.08.08'
var title = 'i can still recall our last summers'
var post = 'officer 1'
var ministry = 'ministry of Education'
var numb = 78943
var grade = 'Grade level 8'
var descriptions = 'sorry its ovaaaaaaaaaaaaaaaaaa'


const RequestForm = ({ history }) => {

  const [Request, setRequest] = useState('')
  const [subject, setSubject] = useState('')
  const [Details, setDetails] = useState('')
  const [submitType, setSubmitType] = useState('')
  var approvalJourney = ["john", "james", "winch"];

  const handleSave = (e) => {
    e.preventDefault();
    let url = ''
    console.log(url)

    console.log('wait')
    http.post(url, {
      categoryId: 0,
      subject: subject,
      detail: Details,
      storeAsDraft: true,

    })
      .then((response) => {
        console.log('server')
        console.log(response.data)
        console.log("yess")

      })




  }



  const handleSubmit = () => {
    let url = ''
    console.log(url)

    console.log('wait')
    http.post(url, {
      categoryId: 0,
      subject: subject,
      detail: Details,
      storeAsDraft: false,
      id: 5,
      mdaId: 2,
      dateSubmitted: new Date(),
      cost: 0,
      approveCost: 0,
      paymentStatusId: 0,
      currentApprovalStageId: 0,
      approvalStatusId: 0,
      dateApproved: new Date(),
      requestcategoryid: 0,
      createdAt: new Date(),
      modifiedAt: new Date(),
      createdBy: "Osagie",
      modifiedBy: "",
      images: []





    })
      .then((response) => {
        console.log('server')
        console.log(response.data)
        console.log("yess")

      })

  }

  const handleMemoChange = (event) => {
    setRequest(event.target.value)
  }

  const handleChangeSubject = (event) => {
    setSubject(event.target.value)
  }

  const handleChangeDetails = (event) => {
    setDetails(event.target.value)
  }
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EDSG - Employee Details';
  }, []);

  return (
    <div>
    <Grid Container>
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
                  <Card style={{marginBottom:'1vw', height:'13vw', justifyContent:'space-between'}}>
                    <Box style={{backgroundColor: 'white'}, { borderRadius: '3px'}, { margin: '20px'}}>
                      <Box style={{margin: '10px 0px 10px 0px' }}>
                        <FormControl className={classes.formControl}>
                          <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{ width: '20vw', fontSize: '1.3em', paddingBottom: '1vw' }}>
                            Select Request type:
                                </InputLabel>
                          <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            displayEmpty
                            disableUnderline
                            style={{ width: '19vw' }}
                            className={classes.selectEmpty}
                            value={"Facility Maintenance"}
                          >
                            <MenuItem value={'Facility Maintenance'} >
                              <span style={{ fontSize: '16px' }}>Facility Maintenance</span>
                            </MenuItem>
                            <MenuItem value={'Energy & Power Maintenance'}>Energy & Power Maintenance</MenuItem>
                            <MenuItem value={'Office Equipment'}>Office Equipment</MenuItem>
                            <MenuItem value={'Ofice Space Request'}>Office Space Request</MenuItem>
                            <MenuItem value={'Work Space Management'}>Work Space Management</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>

                      <Divider style={{ margin: '0px 0px 0px 0px' }} />
                      <Box className={classes.myDivs} fontSize='12px'><span style={{ fontWeight: 'bolder', size: '18vw', margin: '10px 0px 10px 0px' }}> Memo initiation date: </span> {initiationDate}</Box>
                      <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', size: '18vw', fontSize: '12px', margin: '10px 0px 10px 0px' }}>Memo initiator:</span> {initiator}</Box>
                      <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', size: '18vw', fontSize: '12px', margin: '10px 10px 20px 0px' }}>View Memo:</span> {viewMemo}</Box>
                    </Box>
                  </Card>
                  <Card style={{ marginBottom: '1vw' }}>
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
                  </Card>
                  <Paper style={{ justifyContent: 'space-between', alignItems: 'flex-start' }} >

                    <Box style={{ display: 'flex', alignItems: 'center', paddingLeft: '1vw' }}>
                      <Box style={{ fontWeight: 'bolder' }, { paddingRight: '13px' }, { fontSize: '16px' }}>Status:
                                 </Box>
                      <Box style={{ paddingLeft: '1vw' }}><SvgIcon style={{ marginTop: '13px', fontSize: '20px' }}><Circle /></SvgIcon>
                      </Box>
                    </Box>

                  </Paper>
                  <Card style={{ justifyContent: 'space-between, space-evenly', alignItems: 'flex-start', marginTop: '1vw' }}>
                    <Box style={{ display: 'flex', alignItems: 'center', padding: '1vw' }} >
                      EhigiaMouse Emmanuel, DOAS
                        </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', padding: '1vw' }} >
                      EhigiaMouse Emmanuel
                        </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', padding: '1vw' }} >
                      EhigiaMouse Emmanuel
                        </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', padding: '1vw' }} >
                      EhigiaMouse Emmanuel
                        </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', padding: '1vw' }} >
                      EhigiaMouse Emmanuel
                        </Box>
                  </Card>

                </div>

              </div>
            </Box>
          </Grid>


          <Grid item lg style={{ marginTop: '1vw' }} >
            <Box flexDirection='column' style={{ maxWidth: '100%' }, { padding: '20px', border: '1px  red', }} fontSize='62.5%' >
              <Box >
                <Box flexDirection='column' maxWidth='100%' width='600px' minWidth='10%'>
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
                        value={subject}


                      />
                    </Box>
                    <Divider />

                    <Box>
                      <TextField
                        id="outlined-details-stati"
                        label="Details:"
                        multiline
                        cols={200}
                        rows={20}
                        style={{ maxWidth: '100%' }, { backgroundColor: 'white' }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{ disableUnderline: true }}
                        fullWidth
                        onChange={handleChangeDetails}
                        value={Details}
                      />
                    </Box>
                  </Paper>
                 { approvalJourney.map((item) => (
                      <ApprovalJourney style={{width:'100%'}} key={5} image={'dada'} name={'adada'} post={'adada'} location={'hkgjvjgft'} ministry={'nchfdtrxfhmyrx'} date={'m ,jgvtycrkc'} lastModified={'hfdfhcrcry'} comment={'fchrfrcryxrxkykrxrxrykkxkryxyfrxtwtw hre h qh ehe qvhqr qvhre veqh vheq vrqh h qh hjq wh nw nm venv env ennv wevnw renv ewnv ernv erwnv ernmv '}/>
                  ))}
                </Box>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>


    </ Grid>
    </div>
  );
};
export default RequestForm
