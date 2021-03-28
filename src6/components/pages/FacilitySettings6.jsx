import { Grid, TextField, Button, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { SearchOutlined } from '@material-ui/icons';
import LocationDetails from './../LocationDetails'

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    borderRadius:'0px',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 10px',
    fontWeight: 'bolder',
    lineHeight: 1,
    margin: '2px',
    backgroundColor: 'green',
    borderColor: 'green',
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
      backgroundColor: 'green',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'green',
      borderColor: 'white',
    },

  },
})(Button);

const BooButton = withStyles({
  root:{
    backgroundColor:"lightgrey",
    textTransform:'none',
    borderRadius:'0px',
    padding:'6px 10px',
    margin:'2px',
    width:'50px'
  }
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

function createData(staffName, MDA, module, action) {
  return { staffName, MDA, module, action};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),

];

const useStyles = makeStyles({
  table: {
    
  },
  input:{
    paddingTop:'20px'
  }
});


const FacilitySettings6 = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container >
        <Grid item sm={12} style={{backgroundColor:'lightgreen'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',padding:'20px'}}>
          <div>
            User Settings (Privileges & Access)
          </div>
          <div style={{border:'1px solid green'}}>
            <input type='text' placeholder='Search' style={{backgroundColor:'lightgreen', padding:'8px', borderRadius:'3px'}}></input>
            
          </div>
        </div>
        </Grid>
        <Grid item container sm={12}>
        <Grid item sm={4} style={{display:'flex', flexDirection:'column'}}>
          <TextField
          className={classes.input}
          label='MDA'
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
            label='Staff'
          >

          </TextField>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" shrink>Assign Module</InputLabel>
        <Select
          className={classes.input}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item sm={8}>
          <TableContainer>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Staff Name</StyledTableCell>
                  <StyledTableCell align="right">MDA</StyledTableCell>
                  <StyledTableCell align="right">Module</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.staffName}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.MDA}</StyledTableCell>
                    <StyledTableCell align="right">{row.module}</StyledTableCell>
                    <StyledTableCell align="right">{row.action}</StyledTableCell>                  
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <BootstrapButton>
          Save Record
        </BootstrapButton>
        <BooButton >
          cancel
        </BooButton>
      </Grid>
      </Grid>
    </div>
  );
};

export default FacilitySettings6;
