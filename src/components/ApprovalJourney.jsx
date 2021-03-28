import { TableCell, withStyles,TableContainer,Table,TableBody,TableRow, TableHead, makeStyles } from '@material-ui/core';
import React from 'react'

const StyleTableCell = withStyles({
  root: {
    fontSize: '12px',
    padding: '4px 8px 4px 8px'
  }
})(TableCell)


 



const ApprovalJourney = (props) => {
  const image = props.profilePic;
  const name = props.assignedOfficer;
  const post = props.post;
  const location = props.location;
  const ministry = props.mda;
  const inTray=props.inTray
  const outTray=props.outTray
  const inLastModified = props.inLastModified;
  const outLastModified = props.outLastModified;
  const comment = props.comment;
  

const officer = 
  <div style={{display:'flex'}}>
    <div style={{borderRadius:'50%', width:'100%', height:'100%'}}>
      <img src={image}></img>
    </div>

    <div style={{display:'flex', flexDirection:'column'}}>
      <div>{name}</div>
      <div>{post}</div>
      <div>{ministry}</div>
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
    {props.outLastastModified}
  </div>
  <div>
    {location}
  </div>
</div>

return(
  <TableContainer style={{backgroundColor:'white'}}>
    <Table>  
      <TableHead style={{font: "normal normal 900 15px/20px Avenir"}}>
        <StyleTableCell>Assigned Officers</StyleTableCell>
        <StyleTableCell>In-Tray</StyleTableCell>
        <StyleTableCell>Out-Tray</StyleTableCell>
        <StyleTableCell>Comment</StyleTableCell>

      </TableHead>
      <TableBody>      
      
        <TableRow>
          <StyleTableCell align="left">{officer}</StyleTableCell>
          <StyleTableCell align="left">{disInTray}</StyleTableCell>
          <StyleTableCell align="left">{disOutTray}</StyleTableCell>
          <StyleTableCell align="left">{comment}</StyleTableCell>
        </TableRow>
        
      </TableBody>        
      
    </Table>
  </TableContainer >
)

}

export default ApprovalJourney;
