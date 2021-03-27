import { Box, Card, Divider, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles({
    costBox: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px'


    },
    myDivs: {
        fontSize: '14px',
        marginTop: '12px',
        fontFamily: 'auto',
    },
    innerDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        padding: '6px',

        borderRadius: '3px',
        fontFamily: 'auto'

    },

})

export default function EditSideMemo( props) {
var xx= parseInt(props.rows1.requestCategoryId) 
    const classes = useStyles();
    const initiationDate = 'January 19, 2020';
    const initiator = 'Osagie Osaigbovo';
    const viewMemo = 'August 1, 2019';
    const cost = '0.00';
    const status = {};
    const approval = [];
    const position = {};
    const [category, setCategory] = React.useState(1);
  
    const handleChange = event => {
    setCategory(event.target.value);
    props.handleSel(event.target.value)
};

    const chkStatus = (status) => {
        if(status === 'Pending')
        return {color:'#FDCC29',margin: '2px', fontSize: '12px'}
        else if(status === 'Rejected')
        return {color:'#EF0621',margin: '2px', fontSize: '12px'}
        else if(status === "Approved")
        return {color:'#0DAC26', margin: '2px', fontSize: '12px'}
        else
        return {color:'#BEBCBD', margin: '2px', fontSize: "12px"}
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
                                        value={xx}
                                        displayEmpty
                                        disableUnderline
                                        style={{ width: '20vw' }}
                                        onChange={handleChange}
                                        className={classes.selectEmpty}
                                        
                                    >
                                        <MenuItem value={1} >
                                            <span style={{ fontSize: '16px' }}>Facility Maintenance</span>
                                        </MenuItem>
                                        <MenuItem value={2}>Energy & Power Maintenance</MenuItem>
                                        <MenuItem value={3}>Office Equipment</MenuItem>
                                        <MenuItem value={4}>Office Space Request</MenuItem>
                                        <MenuItem value={5}>Work Space Management</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Divider style={{ margin: '0px 0px 0px 0px' }} />
                            <Box className={classes.myDivs} fontSize='12px'><span style={{ fontWeight: 'bolder', size: '18vw',  margin: '10px 0px 10px 0px' }}> Memo initiation date: </span> {props.rows1?.memoInitiationDate??""}</Box>
                            <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', size: '18vw',fontSize:'12px', margin: '10px 0px 10px 0px' }}>Memo initiator:</span> {props.rows1?.memoInitiator??""}</Box>
                            <Box className={classes.myDivs}> <span style={{ fontWeight: 'bolder', size: '18vw',fontSize:'12px', margin: '10px 10px 20px 0px' }}>View Memo:</span></Box>
                        </Box>
                    </Card>
                    {/* <Card style={{ marginBottom: '1vw' }}>
                        <div className={classes.costBox}>
                            <div className={classes.innerDiv}>
                                <Box style={{ fontWeight: 'bolder', margin: '8px' }}>Cost implication</Box>
                                <Divider flexItem variant='middle' />
                                <Box style={{ fontWeight: 'bolder', margin: '8px' }}>(N)</Box>
                            </div>
                            <Divider style={{ margin: '0px 0px 0px 0px' }} />
                            <Box className={classes.innerDiv} style={{ justifyContent: 'space-between', alignItems:'left' }}>
                                <Box style={{ margin: '8px',justifyContent: 'space-evenly', alignItems:'left' }}>{props.rows1.costImplication}</Box>
                                <a href='#' style={{ fontSize: '17px' }}>payment Approval <SaveAltIcon size="small" style={{ fontSize: '16px' }} /></a>
                            </Box>
                        </div>
                    </Card>
                    <Paper style={{ justifyContent: 'space-between', alignItems:'flex-start' }} >
                      
                            <Box style={{ display: 'flex', alignItems: 'center',paddingLeft:'1vw' }}>
                                <Box style={{ fontWeight: 'bolder'}, { paddingRight: '13px' }, { fontSize: '16px' }}>Status:
                                 </Box> 
                                  <Box style={{ paddingLeft: '1vw' }}><SvgIcon style={{ marginTop: '13px', fontSize: '20px' }}><Circle style={chkStatus(props.rows1.status)}/></SvgIcon>
                                </Box>
                             </Box>
                       
                    </Paper>
                    <Stepz /> */}

                </div>

            </div>
        </Box>
    )

}
