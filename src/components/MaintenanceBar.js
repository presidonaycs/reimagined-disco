import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

const useStyles = makeStyles({
    root: {

    },

    gridbg: {
        display: 'flex',
        justify: 'space-between',
        margin: 4,
        padding: 8, 
        backgroundColor: green[200],
        alignItems:'center'
    }
}
);

const MaintenanceBar = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction='column' justify= 'center'>
                <Grid item sm={10} className= {classes.gridbg} style={{border:'1px solid blue'}, {justifyContent:'space-between'}}>
                    <Typography variant= 'subtitle1' style={{border:'1px solid blue'}}>
                        helloalndajlskndklajbdlkabdkabhsbdhkabdh
                    </Typography>
                    <div className={classes.gridbg} style={{border:'1px solid blue'}}>
                        <Button variant='contained'  style={{ borderRadius: '50px'}, {fontSize:'8px'},{padding:'8px'}}>Submit Request</Button>
                        <Button variant='contained' size='small'> <EditIcon style={{fontSize:'18px'}}/> </Button>
                        <Button variant='contained'> <DeleteOutlineIcon style={{fontSize:'18px'}} /> </Button>
                    </div>
                </Grid>
               
            </Grid>
        </div>
    );
};

export default MaintenanceBar;