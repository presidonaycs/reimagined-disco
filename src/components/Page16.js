import { Table, Tag, Space, Button,Badge, Input } from 'antd';
import DevTrain16 from './DevTrain16'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
import { useEffect } from 'react';
import http from './httpCommon';
import React from 'react';





const Page16 = () => {
  const [reviewData, setReviewData] = React.useState([]);
   
  useEffect(()=>{
    http.get('Director-ReviewedApprovals', {
      params:{
          moduleName:"requisition"
      }
  })
  .then((response)=>{
      setReviewData(response.data.data)
      console.log(response)
    })
  }, [])

  return (
      
    <div >
        <DevTrain16 reviewData={reviewData}/>
    </div>

   
  );
};
export default Page16