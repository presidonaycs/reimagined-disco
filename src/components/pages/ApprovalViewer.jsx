import React from 'react'
import ApprovalJourney from './../ApprovalJourney'


const ApprovalViewer = props => {

    console.log(props.docs +"docs")
    const displayApprovals = () => {
        if (props.journey===undefined||props.journey===null)
        {
           return "";
        }
else{
    return props.journey.map(item => {
            
        return <ApprovalJourney key={item.inTray} image={item.profilePic} name={item.assignedOfficer} location={item.location} ministry={item.mda} inTray={item.inTray} outTray={item.outTray} inLastModified={item.inLastModified} outLastModified={item.outLastModified} comment={item.comment}/>;
    })
}
       

    }
    return (
        <>
        <section>{displayApprovals()}</section>
        </>
    )
    

}



export default ApprovalViewer
