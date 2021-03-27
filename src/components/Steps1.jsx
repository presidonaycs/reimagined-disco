// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import { Divider, Steps } from 'antd';
import React, { useEffect } from 'react';
import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import LockOpenIcon from '@material-ui/icons/LockOpen';



function Stepz(props) {
    const Array = [
        {
           
            time:"2 months",
            subtitle:"DOAS",
            Picture:<span  style={{border:"2px solid #4AD991", borderRadius:"50%", margin:"5px",width:"30", height:"30", padding:'4px 6px'}}><RiUserSettingsLine  style={{fontSize:'18px',color:'#A3A1FB'}}/></span>,
            title:"Ehigiamouse Emmanuel,",
            descriptiom:"This is not a description. This is a description."
            // statusFInish:"finish",
            // statusProcess:"process",
            // statusWait:"wait"
        },
        {
           
          time:"3 months",
          subtitle:"DOAS",
          Picture:<span  style={{border:"2px solid #A3A1FB", borderRadius:"50%", margin:"5px",width:"30", height:"30", padding:'4px 6px'}}><ReceiptIcon  style={{fontSize:'18px', color:'#A3A1FB'}}/></span>,
          title:"Ehigiamouse Emmanuel,",
          descriptiom:"This is not a description. This is a description."
          // statusFInish:"finish",
          // statusProcess:"process",
          // statusWait:"wait"
      },
      {
           
        time:"4 months",
        subtitle:"DOAS",
        Picture:<span  style={{border:"2px solid #FF7285", borderRadius:"50%", margin:"5px",width:"30", height:"30", padding:'4px 6px'}}><LockOpenIcon  style={{fontSize:'18px', color:'#FF7285'}}/></span>,
        
        title:"Ehigiamouse Emmanuel,",
        descriptiom:"This is not a description. This is a description."
        // statusFInish:"finish",
        // statusProcess:"process",
        // statusWait:"wait"
    },
    {
           
      time:"5 months",
      subtitle:"DOAS",
      Picture:<span  style={{border:"2px solid #FF7285", borderRadius:"50%", margin:"5px",width:"30", height:"30", padding:'4px 6px'}}><QuestionAnswerIcon  style={{fontSize:'18px', color:'#FFCA83'}}/></span>,
      title:"Ehigiamouse Emmanuel,",
      descriptiom:"This is not a description. This is a description."
      // statusFInish:"finish",
      // statusProcess:"process",
      // statusWait:"wait"
  },
  {
           
    time:"6 months",
    subtitle:"DOAS",
    Picture:<span  style={{border:"2px solid #A3A1FB", borderRadius:"50%", margin:"5px",width:"30", height:"30", padding:'4px 6px'}}><ReceiptIcon  style={{fontSize:'18px', color:'#A3A1FB'}}/></span>,
    title:"Ehigiamouse Emmanuel,",
    descriptiom:"This is not a description. This is a description."
    // statusFInish:"finish",
    // statusProcess:"process",
    // statusWait:"wait"
},
// {
           
//   time:"7 months",
//   subtitle:"DOAS",
//   Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
//   title:"Ehigiamouse Emmanuel,",
//   descriptiom:"This is not a description. This is a description."
//   // statusFInish:"finish",
//   // statusProcess:"process",
//   // statusWait:"wait"
// },
// {
           
//   time:"8 months",
//   subtitle:"DOAS",
//   Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
//   title:"Ehigiamouse Emmanuel,",
//   descriptiom:"This is not a description. This is a description."
//   // statusFInish:"finish",
//   // statusProcess:"process",
// //   // statusWait:"wait"
// },
        
    ]
    const { Step } = Steps;
    const [current, setCurrent] = React.useState(3);
    


    // useEffect(() => {
    //   const next = () => {
    //     setCurrent(props.current);
    //     console.log('useeFFECT')
    //   }
    //   next();
      
    // }, [])




  ;

  const prev = () => {
    setCurrent(parseInt(props.current) - 2);
  };

  return (

    <div style={{backgroundColor:'white'}}>
  <div className="steps">
 
    <Divider />
    {console.log(props.current)}
                    {console.log("checked")}
    <Steps  current={current} direction="vertical">
      <Step title={'James John'} subTitle= {Array[0].subtitle} description={Array[0].time} icon={Array[0].Picture}/>
      <Step title={'Harrison Ford'} subTitle= {Array[1].subtitle} description={Array[1].time} icon={Array[1].Picture}/>
      <Step title={'Jolly Fuss'} subTitle= {Array[2].subtitle} description={Array[2].time} icon={Array[2].Picture}/>
      <Step title={'Spade David'} subTitle= {Array[3].subtitle} description={Array[3].time} icon={Array[3].Picture}/>
      <Step title={'Godwin Obaseki'} subTitle= {Array[4].subtitle} description={Array[4].time} icon={Array[4].Picture}/>
    </Steps>
 
  </div>

    </div>
  );
}

export default Stepz;
