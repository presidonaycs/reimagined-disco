import { Button, Divider, Grid, makeStyles, Paper, SvgIcon, TextField, withStyles } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Logo } from "./../iconComponent/upload.svg";



const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        borderRadius: '20px 20px 20px 20px',
        textTransform: 'none',
        fontSize: 12,
        padding: '2px 12px',
        width: '240px',
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

const BooButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 12,
        padding: '2px 12px',
       
       
        lineHeight: 3,
        borderRadius:0,
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

const TextArea = withStyles({
    root: {
        width: '150px',
        height: '200px'
    },
    body: {
        minWidth: '150px',
        height: '200px'
    }
})(TextField)


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '120px',

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    myDivs: {
        fontSize: '12px',
        padding: '6px',
        fontFamily: 'auto'


    },
    root: {
        display: 'flex',
        maxWidth: '460px',
        flexWrap: 'wrap',
        borderRadius: '4px'
    },
    costBox: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10
    },

    innerDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '12px',
        padding: '6px',
        width: '226px',
        borderRadius: '3px',
        fontFamily: 'auto'

    },
    imageIcon: {
        height: '100%'
    },
    iconRoot: {
        textAlign: 'center'
    }
}));

const RequestMaintenance = () => {

    const classes = useStyles();

    const [requestType, setRequestType] = React.useState('');

    const handleChange = (event) => {
        setRequestType(event.target.value);
    };

    const initiationDate = 'January 19, 2020';
    const initiator = 'Osagie Osaigbovo';
    const viewMemo = 'August 1, 2019';
    const cost = '0.00';
    const status = {};
    const approval = [];
    const position = {};
    return (

        <Grid container style={{ display: 'flex' }} alignItems='center' justify='center'  >
            

            <Grid item sm={7} >
                <div style= {{display:'flex', flexDirection:'column'}}>
                    <div >
                        <Paper style={{ marginTop: '147px' }, { padding: '20px' }}>
                            <div style={{ width: '100%' }}>
                                <TextField
                                    id="outlined-details-static"
                                    label="Subject:"
                                    multiline
                                    InputProps={{ disableUnderline: true }}
                                    rows={2}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ width: '100%' }, { backgroundColor: 'white' }, { margin: '0px' }}
                                    fullWidth


                                />
                            </div>
                            <Divider />

                            <div>
                                <TextField
                                    id="outlined-details-stati"
                                    label="Details:"
                                    multiline
                                    cols={190}
                                    rows={20}
                                    style={{ width: '100%' }, { backgroundColor: 'white' }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                    fullWidth

                                />
                            </div>
                            <Divider />

                            <BootstrapButton
                                variant='contained'
                                startIcon={<SvgIcon style={{ marginTop: '9px' }}>
                                    <Logo />
                                </SvgIcon>}
                            >
                                Upload Supporting Documents</BootstrapButton>
                        </Paper>
                    </div>
                    <div style={{ marginTop:'12px'}} className='row'>
                        <div  className='col-lg-6'>
                            <BooButton className='btn-block' style={{marginRight:0}}>
                                Save Request
                            </BooButton>
                        </div>
                        <div className='col-lg-6 '>
                            <BooButton className='btn-block' style={{marginLeft:0}}>
                                Submit Request
                            </BooButton>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default RequestMaintenance;