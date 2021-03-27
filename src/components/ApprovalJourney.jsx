import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import React from 'react';
import user from './../assets/images/user-avater.png'

const StyleTableCell = withStyles({
  root: {
    fontSize: '12px',
    padding: '4px 8px 4px 8px'
  }
})(TableCell)

const baseURL = 'http://devsvr.edogoverp.com'

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




const ApprovalJourney = (props) => {
  const image = props.profilePic;
  const name = props.assignedOfficer;
  const post = props.post;
  const location = props.location;
  const ministry = props.mda;
  const inTray= props.inTray
  const outTray=props.outTray
  const inLastModified = props.inLastModified;
  const outLastModified = props.outLastModified;
  const comment = props.comment;
  

const officer = 
  <div style={{display:'flex'}}>
    <div style={{borderRadius:'50%',margin:'8px'}}>
      <img src={(props.image === null) ? user : baseURL.concat(props.image)}/>    
      </div>

    <div style={{display:'flex', flexDirection:'column',padding:'8px'}}>
      <div>{props.name}</div>
      <div>{props.post??""}</div>
      <div>{props.ministry}</div>
    </div >
  </div>;

const disInTray = 
<div>
  <div>
    {props.inTray}
  </div>
  <div>
    {props.inLastModified}
  </div>
  <div>
    {location}
  </div>
</div>

const disOutTray= 
<div>
  <div>
    {props.outTray}
  </div>
  <div>
    {props.outLastModified}
  </div>
  <div>
    {location}
  </div>
</div>

return(
  <TableContainer style={{backgroundColor:'white'}}>
    <Table> 
     
      <TableBody>      
      
        <TableRow>
          <StyleTableCell align="left" style={{width:'30%'}}>{officer}</StyleTableCell>
          <StyleTableCell align="left" style={{width:'20%'}}>{disInTray}</StyleTableCell>
          <StyleTableCell align="left" style={{width:'20%'}}>{disOutTray}</StyleTableCell>
          <StyleTableCell align="left" style={{width:'30%'}}>{comment}</StyleTableCell>
        </TableRow>
        
      </TableBody>        
      
    </Table>
  </TableContainer >
)

}

export default ApprovalJourney;
