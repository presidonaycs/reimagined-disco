import { Button, Container, Divider, Grid, makeStyles, Paper, SvgIcon, TextField, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import React, { useState } from 'react';
import httpCommon from '../../httpCommon';
import imaee from './../../images/WIN_20190309_20_47_24_Pro.png';
import imaef from './../../images/WIN_20190309_20_48_16_Pro.png';
import imaeg from './../../images/WIN_20190309_20_48_22_Pro.png';
import { ReactComponent as Logo } from "./../iconComponent/upload.svg";

const BooButton = withStyles({
  root: {
    color:'white',
    boxShadow: 'none',
    textTransform: 'none',
    width:'80px',
    fontSize: 9,
    padding: '2px 11px',
    margin:'20px 5px 0px 5px',
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
      backgroundColor: 'darkgreen',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      
    },

  },
})(Button);

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
    fontSize: 11,
    padding: '2px 12px',
    width: '220px',
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



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'indigo',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root:{ 
         padding:'20px',
         width:'100%'
      }
})



function createData(ItemName, Description, Amount, Quantity, Action) {
  return { ItemName, Description, Amount, Quantity, Action};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Ice cream sandwich', 237, 9.0, 37, 43),
  createData('Eclair', 262, 16.0, 24, 56),

];

const TechnicalReview24 = (props) => {
  const classes = useStyles();
  var List = [{ fileName: "Picture of Directors office AC", filePath: imaee },
      { fileName: "Picture of reception/Waiting area", filePath: imaef },
      { fileName: "Picture of Francis and Nieces", filePath: imaeg }
      ];

const [upload, setUpload] = useState(null);
const [images, setImages] = useState(List)
const [showFormModal, setShowFormModal] = useState(true);
const [selectedRecord, setSelectedRecord] = useState([]);
const [additionalComment, setAdditionalComment] = useState("");


var handleOnUpload = event =>{
  setUpload(event.target.files[0])
  List.push({fileName:upload.name, filePath:upload.size})
} 

const handleSubmit = () =>{
  let url="ApproveRequest"
  httpCommon.post(url, {
    requestid:props.id.current,
    addtionalcomment:additionalComment,
    facilityBillofquantities:props.tech.billofquantities,

  })
  .then((response)=>{
    console.log(response)
    console.log(props.id.current)
    console.log(additionalComment)
    console.log(props.tech.billofquantities)
  })
}

console.log(additionalComment)
console.log(upload)

if(props.show){
  return (


    <div className="overlay">
    <CancelPresentationIcon   />
    <div className="modal-box" style={{ width: '80vw', fontFamily: 'auto', backgroundColor: 'transparent', display: 'flex', marginLeft: '20vw' }}>
    <Grid container sm={10} direction='column' justify='center'>
      <div style={{backgroundColor:'lightgreen'}} className={classes.root}>
        Ministry of Education generator repair & Servicing-<span>Technical Review</span> 
      </div>
      
      <div>
        <TextField
        onChange = {e=>{setAdditionalComment(e.target.value)}}
        style={{backgroundColor:'white'}}
        className={classes.root}
        multiline
        rows={10}
        cols={4}
        >

        </TextField>
      </div>
      <div style={{backgroundColor:'lightgrey'}} className={classes.root}>
        Items Required
      </div>
      <div>
      <TableContainer>
            <Table aria-label="customized table" className={classes.root}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Item Name</StyledTableCell>
                  <StyledTableCell align="right">Description</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody style={{backgroundColor:'white'}}>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.ItemName}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Description}</StyledTableCell>
                    <StyledTableCell align="right">{row.Amount}</StyledTableCell>
                    <StyledTableCell align="right">{row.Quantity}</StyledTableCell>
                    <StyledTableCell align="right">{row.Action}</StyledTableCell>                  
                  
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
      <div className={classes.root} style={{backgroundColor:'lightgrey'}}>
        Pagination
      </div>
      <Container style={{backgroundColor:'white'}}>
                {List.map((item) => (
                  <div style={{ margin: '16px 0px 16px 0px' }}>
                    <div>{item.fileName}</div>
                    <div><img src={item.filePath} alt="John" style={{ width: '100%' }}></img></div>
                  </div>
                ))}
              </Container>
              <div style={{ backgroundColor: 'lightgreen', padding: '12px', fontWeight: 'bold', fontFamily: 'auto' }}>
          Add notes
        </div>
        <Paper>
        <TextField
          id="outlined-details-stati"
          multiline
          cols={30}
          rows={10}
          style={{ width: '100%', fontSize: '5px' }, { backgroundColor: 'white', padding: '12px' }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ disableUnderline: true }}
          fullWidth

        />
        <Divider variant='middle' />
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div>
          <BootstrapButton
            type='file'
            variant='contained'
            component='label'
            startIcon={<SvgIcon style={{ marginTop: '9px' }}>
              <Logo />
            </SvgIcon>}
          >
            Upload Supporting Documents
              <input type='file' accept="image/*" hidden onChange={handleOnUpload}></input>
          </BootstrapButton>
          </div>
          <div>
          <BooButton onClick={handleSubmit}>Submit</BooButton>
          <BooButton style={{backgroundColor:'grey'}}>Clear Entry</BooButton>
          <BooButton style={{backgroundColor:'silver', color:'black'}} onClick={props.handleClose}>Close</BooButton>
          </div>
        </div>
        </Paper>
      </Grid>
    </div>

  </div>






    
  
      );
    }
    else{
      return '';
    }
      }

      export default TechnicalReview24;
