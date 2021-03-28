import { Divider, makeStyles } from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens';
import React from 'react';

export default function SubmittedRequest(props) {
 const useStyles = makeStyles({
     root:{
         
     }
 })



    var col = '';
    var message = '';
    
   

    
        if(props.status === 2){
            col = "#FDCC29"
            message = "currently with"
    }
            
        else if(props.status === 3){
             col = "#EF0621"
             message = "Rejected by"
            }
           
        else if(props.status === 1){ 
            col = "#0DAC26"
            message = "Approved"
        }
    


    return (
        <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'white', alignItems:'center', minHeight:'54px'}}>
            <div style={{width:'350px',display:'flex', wordBreak:'break-word', marginLeft:'16px',  font:"normal normal normal 17px/25px Avenir", } }>
                <a onClick={props.handlePop}> {props.title} </a>
            </div>
            <div style={{display:'flex'}}>
                <div style={{marginRight:"24px", display:'flex', justifyContent:'flex-start', width:'500px',alignItems:'center'}}>
                    <LensIcon style={{color:col, font:"normal normal normal 17px/25px Avenir", margin:'8px'}}/>
                    <span style={{ font:"normal normal normal 17px/25px Avenir",width:'120px',margin:'8px'}}>{message}</span>  
                      
                     {props.status===1 ? "" :    <span style={{ font:"normal normal normal 17px/25px Avenir",fontWeight:'bolder',  width:'310px',margin:'8px'}}>{props.officerName}</span>}
                    
                    </div>
                <Divider orientation='vertical' flexItem />
                <div style={{alignSelf:'center',marginLeft:'24px'}}>
                    <span style={{fontWeight:'bolder'}}>Last treated:{props.date}</span>
                </div>
            </div>
        </div>
    )
}
