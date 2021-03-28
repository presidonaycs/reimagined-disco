import React, { useEffect } from 'react';
import { Table, Tag, Space, Button,Badge, Input } from 'antd';
import DevTrain6 from './DevTrain6'
import DevTrain10 from './DevTrain10'
import http from './httpCommon'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';





const Page10 = () => {
   const [requestData, setRequestData]=React.useState([]);

  useEffect(()=>{
    http.get('Director-PendingApprovals', {
      params:{
          moduleName:"warehouse"
      }
  })
  .then((response)=>{
      setRequestData(response.data.data)
      console.log(response)
    })
  }, [])



  return (
      
    <div >
        <DevTrain10 requestData={requestData}/>
    </div>

   
  );
};
export default Page10