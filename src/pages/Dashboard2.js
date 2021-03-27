import { Box, Button, InputAdornment, makeStyles, TextField, ThemeProvider, withStyles } from '@material-ui/core';
import React from 'react';
import Greeting from '../components/Greeting';
import MaintenanceBar from '../components/MaintenanceBar';
import SideBar from '../components/SideBar';
import NewComponent from '../components/NewComponent';
import Cards from '../components/Cards';
import RequestBar from '../components/RequestBar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SearchOutlined } from '@material-ui/icons';

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
const sideBarWidth = 200;
const useStyles = makeStyles((theme) => ({
    root:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      fontSize:'small'
    },
    content:{

    },
    pos:{
      display:'flex',
      justifyContent:'flex-end',
      flexDirection:'column',

    },
    toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
    const classes= useStyles();

    return (
        <div className='classes.pos'>
        <div style={{display:'flex'}}>
            <NewComponent />
            
            <div className={classes.toolbar}/>
            <Box className={classes.pos} >
                <Cards />

                <div className={classes.root}>
                  <div style={{marginLeft:'12px'},{fontWeight:'900'}}>
                    Request & Transaction History
                  </div>
                  <div className={classes.root}>
                    <div style={{marginRight:'10px'}}>Filter Items By</div>
                    <div style={{marginRight:'10px'}}><BootstrapButton color="primary" size='small' variant='contained' style={{borderRadius:'0px'}} endIcon={<ArrowDropDownIcon style={{ fontSize:'24px'}} color='default'/>}>Select an Option</BootstrapButton></div>
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
                </div>

                 <RequestBar />
                 <RequestBar />
                 <RequestBar />
                 <RequestBar />
                 <RequestBar />
                 <RequestBar />
                 <RequestBar />
                 <RequestBar />
                 <RequestBar />
            </Box>
        </div>
        </div>
    );
    
};

export default Dashboard;