import React from 'react'
import LensIcon from '@material-ui/icons/Lens';
import { Divider, makeStyles } from '@material-ui/core';

export default function SubmittedRequest(props) {
 const useStyles = makeStyles({
     root:{
         
     }
 })



    var col = '';
    var message = '';
    
   

    
        if(props.status === 'pending'){
            col = "yellow"
            message = "currently with"
    }
            
        else if(props.status === 'Approved'){
             col = "red"
             message = "Rejected by"
            }
           
        else{ 
            col = "#FDCC29"
            message = "Currently with"
        }
    


    return (
        <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'white', alignItems:'center', minHeight:'54px'}}>
            <div style={{ minWidth:'600px',display:'flex', wordBreak:'break-word', fontSize:'15px', marginLeft:'16px'} }>
                <a onClick={props.handlePop}> {props.title} </a>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{marginRight:"24px"}}>
                    <span><LensIcon style={{color:col, font:"normal normal normal 17px/25px Avenir"}}/></span> {message} <span style={{fontWeight:'bolder'}}>{props.officerName}</span>
                </div>
                <Divider orientation='vertical' flexItem style={{marginLeft:"15"}}/>
                <div >
                    <span style={{fontWeight:'bolder', marginLeft:'13px'}}>Last treated:  {props.date}</span>
                </div>
            </div>
        </div>
    )
}
