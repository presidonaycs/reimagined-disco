import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Grid, Link, makeStyles, TextField, withStyles } from '@material-ui/core';
import {IoMdClose}   from 'react-icons/io';


const BooButton = withStyles({
  root: {
    backgroundColor: "lightgrey",
    textTransform: 'none',
    borderRadius: '0px',
    padding: '6px 10px',
    margin: '2px',
    width: '40px'
  }
})(Button);


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

const useStyles = makeStyles({
  root: {
    padding: '20px',
    width: '100%'
  }
})


function createData(ItemName, Description, Amount, Quantity, Action) {
  return { ItemName, Description, Amount, Quantity, Action };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Ice cream sandwich', 237, 9.0, 37, 43),
  createData('Eclair', 262, 16.0, 24, 56),

];


const TechnicalReviewModal21 = () => {
  const classes = useStyles();
  const [showFormModal, setShowFormModal] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState([]);

  const closeModal = () => {
    setSelectedRecord([]);
    setShowFormModal(false);
    console.log('clicked')
  };

  return (

    <div className="overlay">
      <IoMdClose className="close-btn pointer" onClick={closeModal} />
      <div className="modal-box" style={{ width: '80vw', fontFamily: 'auto', backgroundColor: 'transparent', display: 'flex', marginLeft: '20vw' }}>
        <Grid container sm={10} direction='column' justify='center'>
          <div style={{ backgroundColor: 'lightgreen' }} className={classes.root}>
            Ministry of Education generator repair & Servicing-<span>Techical Review</span>
          </div>
          <div>
            <TextField
              style={{backgroundColor:'white'}}
              className={classes.root}
              multiline
              rows={10}
              cols={4}
            >

            </TextField>
          </div>
          <div style={{ backgroundColor: 'lightgrey' }} className={classes.root}>
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
          <div className={classes.root} style={{ backgroundColor: 'lightgrey' }}>
            Pagination
      </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',backgroundColor:'white' }} className={classes.root}>
            <div><Link>Picture of Reception/waiting area</Link></div>
            <div><BooButton>Close</BooButton></div>
          </div>
        </Grid>
      </div>

    </div>







  );
};

export default TechnicalReviewModal21;
