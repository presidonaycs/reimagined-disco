// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button} from 'antd';
import { Steps, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
 

function ApprovalJourney(prop) {
    const dataSource = [
        {
          key: '1',
          name: [{
              name:'Mike',
              picture:"./Images/logo512.png",
              desc:"Lorem ipsum"
          }],
          inTray: [{
            date:'Aug 26 1993',
            lastSeen:"5 months ago",
            post:"Lorem ipsum"
        }],
          outTray:[{
            date:'Aug 26 1993',
            lastSeen:"5 months ago",
            post:"Lorem ipsum"
        }],
          comment: 'Lorem Ipsum'
        },
        {
          key: '2',
          name: [{
            name:'John',
            picture:"./Images/logo512.png",
            desc:"Lorem ipsum"
        }],
          inTray: [{
            date:'Aug 26 1993',
            lastSeen:"5 months ago",
            post:"Lorem ipsum"
        }],
          outTray: [{
            date:'Aug 26 1993',
            lastSeen:"5 months ago",
            post:"Lorem ipsum"
        }],
          comment: 'Lorem Ipsum'
        },
      ];
      
      const columns = [
        {
          title: 'name',
          dataIndex: 'name',
          key: 'name',
          render: name => (
            <>
              {name.map(tag => {
              
                return (
                  <>
                  <div className='flex-align'>
                  <p><img width='30' height='30' src={tag.picture}/></p>
                      <div style={{marginLeft:"10px"}}>
                          <p>{tag.name}</p> 
                       
                        <p>{tag.desc}</p>
                      </div>
                  </div>
                  </>
                );
              })}
            </>
          )
        },
        
        {
          title: 'In-tray',
          dataIndex: 'inTray',
          key: 'inTray',
          render: name => (
            <>
              {name.map(tag => {
              
                return (
                  <>
                  <div className=''>
                <p>{tag.date}</p>
                          <p>{tag.lastSeen}</p> 
                        <p>{tag.post}</p>
                     
                  </div>
                  </>
                );
              })}
            </>
          )
        },
        {
          title: 'Out-tray',
          dataIndex: 'outTray',
          key: 'outTray',
          render: name => (
            <>
              {name.map(tag => {
              
                return (
                  <>
                  <div className=''>
                <p>{tag.date}</p>
                          <p>{tag.lastSeen}</p> 
                        <p>{tag.post}</p>
                     
                  </div>
                  </>
                );
              })}
            </>
          )
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment',
          },
      ];
      
const [toggle, setToggle] = useState(false)

const handleToggle = ()=>{
setToggle(!toggle)
}

    return (

       <div className="ApprovalJourney">
           { (!toggle) ? <div className="flex-align flex-between" style={{backgroundColor:"#D5FFD5", padding:"10px"}}>
                <h4 style={{fontWeight:"bold"}}>Approval Journey</h4>
                <Button onClick={handleToggle} style={{backgroundColor:"#EFD66BF2", color:"black"}}>View Querries and responses</Button>
            </div>
:
            <div>
              <div className="flex-align flex-between" style={{backgroundColor:"#D5FFD5", padding:"10px"}}>
                  <h4 style={{fontWeight:"bold"}}>Approval Journey</h4>
                  <Button onClick={handleToggle} style={{backgroundColor:"#1C811C", color:"white"}}>Collapse Querries and responses</Button>
              </div>
          <Table
           dataSource={dataSource}
            columns={columns} />
            </div>
          }
        
        </div>
    );
}

export default ApprovalJourney;


