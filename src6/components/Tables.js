import { Badge, Button, InputAdornment, MenuItem, Select, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { SearchOutlined } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import RequestMaintenance from '../pages/RequestMaintenance';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 13,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
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
      backgroundColor: '#green',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'green',
      borderColor: 'green',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


const StyledTableCell = withStyles({
  head: {
    backgroundColor: 'lightgreen',
    fontWeight:'bolder',
    
  },
  body: {
    fontSize: 14,
    backgroundColor: 'light-green',
    
  },
})(TableCell);

const StyldTableCell = withStyles({
  head: {
    backgroundColor: 'lightgrey',
    fontWeight:'bolder'
  },
  body: {
    fontSize: 14,
  },
})(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
});

function createData(items, requestInitiator, agency, amount, paymentStatus, dateRecieved, action ) {
  return { items, requestInitiator, agency, amount, paymentStatus, dateRecieved, action };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3, 5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 56, 60),
  createData('Eclair', 262, 16.0, 24, 6.0, 55, 23),
  createData('Cupcake', 305, 3.7, 67, 4.3, 22, 45),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 45, 66),
];

export default function Tables() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };




  return (
    <div>
      <div style={{display:'flex'}}>  
      <div style={{marginRight:'10px'}}><BootstrapButton color="primary" size='small' variant='contained' style={{borderRadius:'0px'}} onClick={handleOpen} endIcon={<ArrowDropDownIcon style={{ fontSize:'24px'}} color='default'/>}>Select an Option</BootstrapButton></div>
      <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={''}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
                    <div style={{marginRight:'10px'}}>
                    <TextField
                      style={{backgroundColor:'lightgreen'}}
                      variant='outlined'
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start">
                      <SearchOutlined />
                      </InputAdornment>
                      
                      )}}
                      placeholder='Search transactions, invoices or help'
                      fullWidth 
                      margin='dense'
                    />
                    
                    </div>
      </div>
      <Grid container justify='center' alignItems='center'>
        <Grid item sm={9}>
            <TableContainer component={Paper} style={{width:'100%'}}>
            <Table className={classes.table} aria-label="simple table" size='small'>
                <TableHead>
                <TableRow>
                    <StyledTableCell colSpan= {12} ><Badge value='5'>Facility Maintenance Request Management</Badge></StyledTableCell>
                </TableRow>
                <TableRow>
                    <StyldTableCell align="left" colSpan={5} style={{border:'1px solid #b8b1b7'}}>Items</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Request initiator</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Agency</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Amount</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Payment Status</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Date Recieved</StyldTableCell>
                    <StyldTableCell align="left" style={{border:'1px solid #b8b1b7'}}>Action</StyldTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.items}>
                    <TableCell align='left' component="th" scope="row" colSpan={5} >
                        {row.items}
                    </TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.requestInitiator}</TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.agency} </TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.amount}</TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.paymentStatus}</TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.dateRecieved}</TableCell>
                    <TableCell align="left" style={{border:'1px solid lightgrey'}}>{row.action }</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
        <RequestMaintenance/>
    </Grid>

    </div>
  );
}
