import { makeStyles, Typography } from '@material-ui/core';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import React from 'react';

const useStyles = makeStyles({
    root: {
        display:'flex',
    },


});

const Greeting = () => {
    const classes = useStyles();
    return (
        <div className= {classes.root} style={{justifyContent:"space-between"}}> 
            <div>
                <Typography variant='caption'>
                    Good Day
                </Typography>
                <Typography variant='subtitle1'>
                    Sylvanus Obodagbonyi; #79843
                </Typography>
                <Typography variant='caption'>
                    His Excellency, Executive governor, Edo State
                </Typography >
            </div>
            <div>
                <div className={classes.root}>
                    <div className={classes.root} style={{flexDirection:'column'}}>
                        <Typography>Benin City, Edo State</Typography>
                        <Typography>Time of Login: 8:45AM</Typography>
                    </div>
                    <PinDropOutlinedIcon color='primary' fontSize="large"/>
                </div>
                
            </div>
        </div>
    );
};

export default Greeting;