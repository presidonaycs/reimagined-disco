import { Box, Card, Divider, FormControl, InputLabel, makeStyles, MenuItem, Paper, Select, SvgIcon } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import React from 'react';
import { ReactComponent as Circle } from "./../components/iconComponent/circle-fill.svg";
import Stepz from './Steps';
import Cookies from "universal-cookie"




const useStyles = makeStyles({
    costBox: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px'


    },
    myDivs: {
        fontSize: '14px',
        marginTop: '12px',
        fontFamily: 'avenir',
    },
    innerDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        padding: '6px',

        borderRadius: '3px',
        fontFamily: 'avenir'

    },

})

let cookies = new Cookies();


export default function MemoSide(props) {

    const classes = useStyles();
    const initiationDate = 'January 19, 2020';
    const initiator = 'Osagie Osaigbovo';
    const viewMemo = 'August 1, 2019';
    const cost = '0.00';
    const status = {};
    const approval = [];
    const position = {};

    function formattedDate(date){

      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      
      if (day < 10) {
        day = '0' + day;
      }
      if (month < 10) {
        month = '0' + month;
      }
      
       return day + '.' + month + '.' + year
    }

    if(status==='pending'){
        
    }





    return (
        <Box flexDirection='column' style={{ justifyContent: 'space-between' }}>
            <div style={{ width: '21.5vw' }}>

                <div className={classes.root}>
                    <Card style={{ marginBottom: '1vw', height: '13vw', justifyContent: 'space-between' }}>
                        <Box style={{ backgroundColor: 'white' }, { borderRadius: '3px' }, { margin: '20px' }}>
                            <Box style={{ margin: '10px 0px 10px 0px' }}>
                                <FormControl className={classes.formControl} >
                                    <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{ width: '20vw', fontSize:'1.3em', paddingBottom:'1vw' }}>
                                        Select Request type:
                                </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-placeholder-label-label"
                                        id="demo-simple-select-placeholder-label"
                                        value={props.rows1?.requestCategoryId ? props.rows1?.requestCategoryId : ""}
                                        displayEmpty
                                        disableUnderline
                                        // value= {props.rows1.requestcategoryid}
                                        style={{ width: '20vw' }}
                                        className={classes.selectEmpty}
                                        disabled
                                    >
                                        <MenuItem value={1} >
                                        <span style={{ fontSize: '14px' }}>Facility Maintenance</span>
                                        </MenuItem>
                                        <MenuItem value={2}><span style={{ fontSize: '14px' }}>Energy & Power Maintenance</span></MenuItem>
                                        <MenuItem value={3}><span style={{ fontSize: '14px' }}>Office Equipment</span></MenuItem>
                                        <MenuItem value={4}><span style={{ fontSize: '14px' }}>Office Space Request</span></MenuItem>
                                        <MenuItem value={5}><span style={{ fontSize: '14px' }}>Work Space Management</span></MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Divider style={{ margin: '0px 0px 0px 0px' }} />
                            <Box className={classes.myDivs} ><span style={{ fontWeight: 'bolder', margin: '10px 0px 10px 0px', fontSize:'14px' }}> Memo initiation date: {formattedDate(new Date())} </span> </Box>
                      <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', fontSize: '14px', margin: '10px 10px 10px 0px' }}>Memo initiator: {cookies.get("firstName")} {cookies.get("lastName")}</span> </Box>
                        </Box>
                    </Card>
                    <Card style={{ marginBottom: '1vw' }}>
                        <div className={classes.costBox}>
                            <div className={classes.innerDiv}>
                                <Box style={{ fontWeight: 'bolder', margin: '8px' }}>Cost implication</Box>
                                <Divider flexItem variant='middle' />
                                <Box style={{ fontWeight: 'bolder', margin: '8px' }}>(N)</Box>
                            </div>
                            <Divider style={{ margin: '0px 0px 0px 0px' }} />
                            <Box className={classes.innerDiv} style={{ justifyContent: 'space-between', alignItems:'left' }}>
                                <Box style={{ margin: '8px',justifyContent: 'space-evenly', alignItems:'left' }}>{props.costImplication}</Box>
                                <a href='#' style={{ fontSize: '17px' }}>payment Approval <SaveAltIcon size="small" style={{ fontSize: '16px' }} /></a>
                            </Box>
                        </div>
                    </Card>
                    <Paper style={{ justifyContent: 'space-between', alignItems:'flex-start' }} >
                      
                            <Box style={{ display: 'flex', alignItems: 'center',paddingLeft:'1vw' }}>
                                <Box style={{ fontWeight: 'bolder'}, { paddingRight: '13px' }, { fontSize: '14px' }}>Status:
                                 </Box> 
                                  <Box style={{ paddingLeft: '1vw' }}><SvgIcon style={{ marginTop: '16px', fontSize: '25px', color:'#FDCC29' }}><Circle /></SvgIcon>
                                </Box>
                             </Box>
                       
                    </Paper>
                    <Stepz sequence2={props?.sequence1} current={props.rows1.currentApprovalStage}/>

                </div>

            </div>
        </Box>
    )
}
