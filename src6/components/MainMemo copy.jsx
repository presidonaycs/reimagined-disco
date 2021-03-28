import { Button, Divider, Paper, SvgIcon, TextField, withStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { ReactComponent as Logo } from "./../components/iconComponent/upload.svg";
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
        width:'280px',
       
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


const MainMemo = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'EDSG - Employee Details';
    }, []);

    return (
        <div>
        <div className='col col-lg-12'>
        <div className='row'>
            <Paper style={{ marginTop: '147px' }, { padding: '20px', border:'1px  red', width:'800px' }} className=' col col-sm-12'>
                <div className='row col-sm-12'>
                    <TextField  id="outlined-details-static"
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

                <div className='row' >
                    <TextField
                        id="outlined-details-stati"
                        label="Details:"
                        multiline
                        cols={200}
                        rows={20}
                        style={{maxWidth: '1' }, { backgroundColor: 'white' }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{ disableUnderline: true }}
                        fullWidth

                    />
                </div>
                <Divider />

        <div className='row'>
                <BootstrapButton
                    variant='contained'
                    startIcon={<SvgIcon style={{ marginTop: '9px' }}>
                        <Logo />
                    </SvgIcon>}
                >
                    Upload Supporting Documents</BootstrapButton>
                    </div>
            </Paper>
        </div>
        <div style={{ marginTop:'12px', display:'flex', justifyContent:'space-between'}} className='row' >
            <div className='col-lg-3'>
                <BooButton className='btn-block' style={{marginRight:'0px', maxWidth:'320px'}}>
                    Save Request
                </BooButton>
            </div>
            <div className='col-lg-3'>
                <BooButton className='btn-block' style={{marginLeft:'0px', maxWidth:'320px', marginRight:'0px'}} >
                    Submit Request
                </BooButton>
            </div>
        </div>
    </div>
    </div>
    );

                    };
   
export default MainMemo;
