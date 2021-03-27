import { Box, Button, Divider, Paper, TextField, withStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import PhotoViewer from "../components/PhotoViewer";
import Cookies from "universal-cookie";


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
        width: '280px',

        lineHeight: 3,
        borderRadius: 0,
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

    

const MainMemo1 = (props) => {
    console.log('main memo called')
    console.log(props.rows1)
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'EDSG - Employee Details';
    }, []);

    return (
        <Box flexDirection='column' style={{ maxWidth: '100%' }, { padding: '20px', border: '1px  red', }} fontSize='62.5%' >
            <Box >
                <Box flexDirection='column' maxWidth='100%' width='600px' minWidth='10%'>
                    <Paper style={{ marginTop: '147px' }, { padding: '20px', border: '1px  red', maxWidth: '100%', minWidth: '10%' }}>
                        <Box>
                            <TextField id="outlined-details-static"
                                label="Subject:"
                                multiline
                                InputProps={{ disableUnderline: true }}
                                rows={2}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '100%' }, { backgroundColor: 'white' }, { margin: '0px' }}
                                fullWidth
                                value={props.rows1?.subject??""}
                                disabled


                            />
                        </Box>
                        <Divider />

                        <Box>
                            <TextField
                                id="outlined-details-stati"
                                label="Details:"
                                
                                multiline
                                cols={200}
                                rows={20}
                                style={{ maxWidth: '1' }, { backgroundColor: 'white' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{ disableUnderline: true }}
                                fullWidth
                                value={props.rows1?.details?? ""}
                                disabled

                            />
                        </Box>
                        <Divider />

                        <Box>
                            
                            <PhotoViewer docs={props.docs}/>
                        </Box>
                    </Paper>
                </Box>

            </Box>
        </Box>
    );

};

export default MainMemo1;
