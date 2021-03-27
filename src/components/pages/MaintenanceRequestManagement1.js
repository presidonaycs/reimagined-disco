import { Badge, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import StyledMenu from "./../components/MenuButton";
import SearchInput from './../input/SearchInput';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 10px',
    fontWeight: 'bolder',
    lineHeight: 1,
    margin: '2px',
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
      backgroundColor: 'white',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'white',
      borderColor: 'white',
    },

  },
})(Button);




const StyldTableCell = withStyles({
  head: {
    backgroundColor: 'lightgrey',
    fontWeight: 'bolder',


  },
  body: {
    fontSize: 14,
  },
})(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
  clDiv: {
    backgroundColor: 'lightgreen',
    fontWeight: 'bolder',
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14'

  },

  bootsButton: {
    borderRadius: '40px',

  }


});


function createData(items, requestInitiator, RequestType, InitiatedDate, ReviewStatus, Action) {
  return { items, requestInitiator, RequestType, InitiatedDate, ReviewStatus, Action };
}





export default function Tables() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isRequest, setIsRequest] = React.useState(true);
  const [isReview, setIsReview] = React.useState(false);





  const handleIsRequest = () => {

      setIsRequest(!isRequest)
    
  }

    const isGreen = { backgroundColor: 'light-green', borderRadius:'40px'}
    const isWhite = { backgroundColor: 'white', borderRadius:'40px'}

    const chkStatus = (status) => {
      if(status === 1)
      return {color:'yellow',margin: '2px',  fontSize: '12px'}
      else if(status === 2)
      return {color:'red',margin: '2px',  fontSize: '10px'}
      else
      return {color:'green',margin: '2px',  fontSize: '10px'}
    }
    

   



    if (isRequest) {
      return (

        <div >
          <div style={{ marginLeft: '52.2%' }} className='row'>
            <div style={{ margin: '7px' }}><StyledMenu className='col-sm-6' /></div>
            <SearchInput className='col-sm-3' />
          </div>
          <div style={{ display: 'flex' }} className='row'>

            <Grid container justify='center' alignItems='center'>
              <Grid item sm={9}>
                <TableContainer component={Paper} style={{ width: '100%' }}>
                  <div className={classes.clDiv}>
                    <div>
                      Maintenance Request Management
                    </div>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Badge badgeContent={12} showZero
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',

                          }} color='secondary'>
                          <BootstrapButton size='small' disableRipple disableFocusRipple style={isRequest ? isWhite : isGreen}>
                            Request
                      </BootstrapButton>
                        </Badge>
                      </div>
                      <div>
                        <Badge>
                          <BootstrapButton size='small' style={{ borderRadius: '40px' }} onClick={handleIsRequest}>
                            Review
                      </BootstrapButton>
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Table className={classes.table} aria-label="simple table" size='small'>
                    <TableHead>

                      <TableRow>
                        <StyldTableCell align="left" colSpan={5} style={{ border: '1px solid #b8b1b7' }}>Items</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Request initiator</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Request Type</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Initiated Date</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Review Status</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Action</StyldTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.items}>
                          <TableCell align='left' component="th" scope="row" colSpan={5} >
                            {row.items}
                          </TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.requestInitiator}</TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.RequestType} </TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.InitiatedDate}</TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.ReviewStatus}</TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.Action}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </div>
        </div>
      );
    }
    else {
      return (<div>
            <div style={{ marginLeft: '52.2%' }} className='row'>
            <div style={{ margin: '7px' }}><StyledMenu className='col-sm-6' /></div>
            <SearchInput className='col-sm-3' />
          </div>
          <div style={{ display: 'flex' }} className='row'>

            <Grid container justify='center' alignItems='center'>
              <Grid item sm={9}>
                <TableContainer component={Paper} style={{ width: '100%' }}>
                  <div className={classes.clDiv}>
                    <div>
                      Maintenance Request Management
                </div>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Badge badgeContent={12} showZero
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',

                          }} color='secondary'>
                          <BootstrapButton size='small' disableRipple disableFocusRipple style={{ borderRadius: '40px' }}  onClick={handleIsRequest}>
                            Request
                      </BootstrapButton>
                        </Badge>
                      </div>
                      <div>
                        <Badge>
                          <BootstrapButton size='small' style={{ borderRadius: '40px' }} style={isRequest ? isGreen : isWhite}>
                            Review
                      </BootstrapButton>
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Table className={classes.table} aria-label="simple table" size='small'>
                    <TableHead>

                      <TableRow>
                        <StyldTableCell align="left" colSpan={5} style={{ border: '1px solid #b8b1b7' }}>Items</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Request initiator</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Request Type</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Initiated Date</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Review Status</StyldTableCell>
                        <StyldTableCell align="left" style={{ border: '1px solid #b8b1b7' }}>Action</StyldTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.items}>
                          <TableCell align='left' component="th" scope="row" colSpan={5} >
                            {row.items}
                          </TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.requestInitiator}</TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.RequestType} </TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.InitiatedDate}</TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.ReviewStatus}</TableCell>
                          <TableCell align="left" style={{ border: '1px solid lightgrey' }}>{row.Action}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </div>
         </div>);


    }
  }


