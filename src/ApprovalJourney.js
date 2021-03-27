// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';
import React from 'react';
import { LoadingOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import LockOpenIcon from '@material-ui/icons/LockOpen';


function ApprovalJourney(prop) {
    const Array = [
        {
            name:"Ehigiamouse Emmanuel, DOAS",
            time:"2 months",
            Picture:<img src=".\logo512.png" width="20" height="20" style={{border:"2px solid red"}} />,
            title:"",
            statusFInish:"finish",
            statusProcess:"process",
            statusWait:"wait"
        }
    ]
    const { Step } = Steps;

  return (

    <div>
  <div className="steps">
  <Steps direction="vertical" current={3}>
    <Step status="finish" title="Login" icon={<RiUserSettingsLine className="icon" style={{color:'#4AD991'}}/>} />
    <Step status="finish" title="Verification" icon={<ReceiptIcon className="icon" style={{color:'#A3A1FB'}}/>} />
    <Step status="process" title="Pay" icon={<LockOpenIcon />} style={{color:'#FF7285'}}/>
    <Step status="wait" title="Done" icon={<QuestionAnswerIcon style={{color:'#FFCA83'}}/>} />
    <Step status="finish" title="Verification" icon={<ReceiptIcon className="icon" style={{color:'#A3A1FB'}}/>} />
    
  </Steps>
  </div>
    </div>
  );
}

export default ApprovalJourney;
