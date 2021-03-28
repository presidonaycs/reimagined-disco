// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';

// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Select, Form, Space, Alert, InputNumber, DatePicker, Upload } from 'antd';
import Page37Form from './Page37Form';
import Imagez from './Imagez';
import { Steps, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';



function Page14(prop) {
    const { Option } = Select;

    const columns = [
        {
          title: 'Deposit',
          dataIndex: 'deposit',
          key: 'deposit',
        //   render: text => <a>{text}</a>,
        },
        {
          title: 'Withdrawal',
          dataIndex: 'withdrawal',
          key: 'withdrawal',
        },
        {
          title: 'Balance',
          dataIndex: 'balance',
          key: 'balance',
        },
        {
          title: 'Initiated By',
          key: 'initiated',
          dataIndex: 'initiated',
        },
        {
          title: 'Date Initiated',
          dataIndex: 'date',
          key: 'date',
        },
        {
            title: 'Approver',
            dataIndex: 'approve',
            key: 'approve',
          },
          {
            title: 'Store Keepers comment',
            dataIndex: 'store',
            key: 'store',
          },
      ];
      
      const data = [
        {
          key: '1',
          deposit: 'John Brown',
          withdrawal: 32,
          balance: 'New York No. 1 Lake Park',
          initiated: 'nice',
          approve:"Emmanuel",
           store:"Emmanuel",
           date:"12 may 1990"
        },
        {
          key: '2',
          deposit: 'Jim Green',
          withdrawal: 42,
          balance: 'London No. 1 Lake Park',
          initiated: 'loser',
           approve:"Emmanuel",
            store:"Emmanuel",
            date:"12 may 1990"
        },
        {
          key: '3',
          deposit: 'Joe Black',
          withdrawal: 32,
          balance: 'Sidney No. 1 Lake Park',
          initiated: 'cool',
          approve:"Emmanuel",
          store:"Emmanuel",
          date:"12 may 1990"
        },
      ];

    return (
        <div className="page21">
         <div className="padding" style={{backgroundColor:"#D5FFD5"}}>
<h4 style={{fontWeight:"bold"}}>Transaction History</h4>
         </div>
         <div>
         <div className="TransactionHistory">
        <Table
        bordered
         dataSource={data}
          columns={columns} 
          pagination={{
            //   itemRender:(items)=>{{}}
            showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} items`,
            position: ["bottomLeft"]
            

            // showQuickJumper:true,
            // showSizeChanger:true
        }}
        />
          <div className="position" >
          <Button style={{fontWeight:"bold", float:"right"}}>Close</Button>
        </div>
      
        </div>
         </div>
        </div>
    );
}

export default Page14;


