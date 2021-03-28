import { Button, Grid, InputAdornment, SvgIcon, TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ReactComponent as Logo } from "./../iconComponent/upload.svg";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'indigo',
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

const BooButton = withStyles({
  root: {
    color: 'white',
    boxShadow: 'none',
    textTransform: 'none',
    width: '80px',
    fontSize: 9,
    padding: '2px 11px',
    margin: '20px 5px 0px 5px',
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

var list = ["yes", "no", "maybe"]

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

const useStyles = makeStyles({
  table: {

  },
  input: {
    paddingTop: '20px'
  },
  root:{
    padding:'20px',
    width:'100%'
  }

});




const Page10 = (props) => {
  const classes = useStyles();
  const [upload, setUpload] = useState(list);
  const [selectedRecord, setSelectedRecord] = useState([]);
  let [itemName, setItemName] = useState('')
  let [description, setDescription] = useState('')
  let [amount, setAmount] = useState('')
  let [quantity, setQuantity] = useState('')

let showFormModal=props.showFormModal
  var handleOnUpload = event => {
    setUpload(event.target.files[0])
    list.push({ fileName: upload.name, filePath: upload.size })
  }
  console.log(upload)
  

if(props.showFormModal){
  return (

<div className="overlay">
      <IoMdClose className="close-btn pointer" onClick={props.handleClose} />
      <div className="modal-box" style={{ width: '80vw', fontFamily: 'auto', backgroundColor: 'transparent', display: 'flex', marginLeft: '20vw' }}>
      <Grid container direction='column' justify='center'>
      <Grid item sm={10} style={{backgroundColor:'white'}}>
      
        <div className={classes.root} style={{backgroundColor:'lightgreen'}}>
          Ministry of Education Generator Repair and Servicing
      </div>
        <div>
          <TextField
            multiline
            rows={10}
            cols={8}
            style={{
              width: '100%',
              padding: '20px'

            }}

          >

          </TextField>
        </div>
        <div style={{ backgroundColor: 'lightgrey' }} className={classes.root}>
          Add Items Required
      </div>
        <Grid item container sm={12} style={{ display: 'flex', flexDirection: 'row'}}>
          <Grid item sm={4} style={{ display: 'flex', flexDirection: 'column'}}>
            <TextField
              className={classes.input}
              label='Item Name'
              value={itemName}
              onInput={e => setItemName(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
            >

            </TextField >
            <TextField
              className={classes.input}

              InputLabelProps={{
                shrink: true,
              }}
              
              label='Description'
            >

            </TextField>

            <div style={{display:'flex', justifyContent:'space-between'}}>
              <TextField
                className={classes.input}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                type='number'
                label='Amount'
                InputLabelProps={{
                  shrink: true,
                }}                style={{
                  width:'60%'
                }}
              >
                
              </TextField>
              <TextField
                className={classes.input}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                type='number'
                label='Quantity'
                InputLabelProps={{
                  shrink: true,
                }}               
                style={{
                  width:'35%'
                }}
                
              >
                
              </TextField>
              
              </div>
              <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
              <BooButton style={{width:'45%'}}>Submit</BooButton>
              <BooButton style={{backgroundColor:'silver', color:'black',width:'45%'}}>Close</BooButton>
              </div>
              

          </Grid>
          <Grid item sm={8} >
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
              <TableBody>
                {list.map((row) => (
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
          <div className={classes.root} style={{ backgroundColor: 'lightgrey'}}>Pagination</div>
            
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <div>
            <div></div><a>Picture of reception/waiting area</a><div></div>
          <BootstrapButton
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
          <BooButton >Submit</BooButton>
          <BooButton style={{backgroundColor:'grey'}}>Clear Entry</BooButton>
          <BooButton style={{backgroundColor:'silver', color:'black'}}>Close</BooButton>
          </div>
        </div>


      </Grid>
        </Grid>


      </Grid>

    </Grid>
      </div>

    </div>







   
  );
}
else
  return "";
};

export default Page10;
