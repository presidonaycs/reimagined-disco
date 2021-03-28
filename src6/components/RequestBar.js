import { Box, Divider, makeStyles } from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens';
import React from 'react';


const useStyles = makeStyles({
    root:{
        backgroundColor:'white',
        fontSize:'small',
        margin:'6px',
        
    },
    reqBar:{
        display:'flex',
        justifyContent:'space-between',
       alignItems:'center',
       padding:'15px'

    },
    reqBa:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'

    },
});

const RequestBar = () => {
    const classes = useStyles();

    const description = 'Repair and maintenance of all cooling systems in the agency office';
    const user = 'Anthony Okungbowa';
    const date = '08.08.2020'
    const position = 'HOS'
    const statusbar = ''
    return (
        <div className={classes.root}>
            <div className={classes.reqBar}>
                <div>{description}</div>
                <div className={classes.reqBa}>
                    <div><LensIcon style={{fontWeight:'bolder'}}/> currently with <Box component='span' style={{fontWeight:'bolder'}}>{user}</Box> ({position})</div>
                    
                   <div >
                    <Divider orientation='vertical' flexItem/>
                        <div style={{paddingLeft:'8px'}}><Box component='span' style={{fontWeight:'bolder'}}>Last treated</Box>: {date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestBar;