// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Space, Alert } from 'antd';
import { Steps, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import profilePic from './../assets/images/user-avater.png'


const baseURL = "http://devsvr.edogoverp.com"

function Stepz(props) {
    const Array = [
        {
           
            time:"2 months",
            subtitle:"DOAS",
            Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
            title:"Ehigiamouse Emmanuel,",
            descriptiom:"This is not a description. This is a description."
            // statusFInish:"finish",
            // statusProcess:"process",
            // statusWait:"wait"
        },
        {
           
          time:"3 months",
          subtitle:"DOAS",
          Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
          title:"Ehigiamouse Emmanuel,",
          descriptiom:"This is not a description. This is a description."
          // statusFInish:"finish",
          // statusProcess:"process",
          // statusWait:"wait"
      },
      {
           
        time:"4 months",
        subtitle:"DOAS",
        Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
        title:"Ehigiamouse Emmanuel,",
        descriptiom:"This is not a description. This is a description."
        // statusFInish:"finish",
        // statusProcess:"process",
        // statusWait:"wait"
    },
    {
           
      time:"5 months",
      subtitle:"DOAS",
      Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
      title:"Ehigiamouse Emmanuel,",
      descriptiom:"This is not a description. This is a description."
      // statusFInish:"finish",
      // statusProcess:"process",
      // statusWait:"wait"
  },
  {
           
    time:"6 months",
    subtitle:"DOAS",
    Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
    title:"Ehigiamouse Emmanuel,",
    descriptiom:"This is not a description. This is a description."
    // statusFInish:"finish",
    // statusProcess:"process",
    // statusWait:"wait"
},
{
           
  time:"7 months",
  subtitle:"DOAS",
  Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
  title:"Ehigiamouse Emmanuel,",
  descriptiom:"This is not a description. This is a description."
  // statusFInish:"finish",
  // statusProcess:"process",
  // statusWait:"wait"
},
{
           
  time:"8 months",
  subtitle:"DOAS",
  Picture:<img src=".\logo512.png" width="25" height="25" style={{border:"2px solid red", borderRadius:"50%", marginBottom:"5px"}} />,
  title:"Ehigiamouse Emmanuel,",
  descriptiom:"This is not a description. This is a description."
  // statusFInish:"finish",
  // statusProcess:"process",
  // statusWait:"wait"
},
        
    ]
    const { Step } = Steps;
    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (

    <div>
  <div className="steps">
 
    {/* <Divider /> */}

    {/* <Steps  current={current} direction="vertical">
      <Step title={Array[1].title} subTitle= {Array[1].subtitle} description={Array[1].time} icon={Array[1].Picture}/>
      <Step title={Array[2].title} subTitle= {Array[2].subtitle} description={Array[2].time} icon={Array[2].Picture}/>
      <Step title={Array[3].title} subTitle= {Array[3].subtitle} description={Array[3].time} icon={Array[3].Picture}/>
      <Step title={Array[4].title} subTitle= {Array[4].subtitle} description={Array[4].time} icon={Array[4].Picture}/>
      <Step title={Array[5].title} subTitle= {Array[5].subtitle} description={Array[5].time} icon={Array[5].Picture}/>
      <Step title={Array[6].title} subTitle= {Array[6].subtitle} description={Array[6].time} icon={Array[6].Picture}/>
      <Step title={Array[0].title} subTitle= {Array[0].subtitle} description={Array[0].time} icon={Array[0].Picture}/>
    </Steps>
  */}
   <div style={{backgroundColor:'white'}}>
  <div className="steps">
 
    <Divider />
    {console.log(props)}
                    {console.log("checked")}
    <Steps  current={parseInt(props.current)-1} direction="vertical">
      {props.sequence2?.map(item=>(<Step key={item.name} title={item.name} subTitle= {''} description={item.time} icon={<img src={(item.profilePic === null) ? profilePic : baseURL.concat(item.profilePic)  } />}/>))}
      {/* <Step title={'Harrison Ford'} subTitle= {Array[1].subtitle} description={Array[1].time} icon={Array[1].Picture}/>
      <Step title={'Jolly Fuss'} subTitle= {Array[2].subtitle} description={Array[2].time} icon={Array[2].Picture}/>
      <Step title={'Spade David'} subTitle= {Array[3].subtitle} description={Array[3].time} icon={Array[3].Picture}/>
      <Step title={'Godwin Obaseki'} subTitle= {Array[4].subtitle} description={Array[4].time} icon={Array[4].Picture}/> */}
    </Steps>
 
  </div>

    </div>
  </div>

    </div>
  );
}

export default Stepz;
