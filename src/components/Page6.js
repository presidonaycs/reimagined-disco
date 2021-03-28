import React, { useState, useContext, createContext, useEffect } from 'react';
import { Table, Tag, Space, Button,Badge, Input } from 'antd';
import DevTrain6 from './DevTrain6'
import DevTrain13 from './DevTrain13'
import'./index.css'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
import ModalContextProvider from './Contexts/ModalContext'
import {SwapTableContext} from './Contexts/SwapTableContext'
import http from './httpCommon';



const Page6 = () => {
  const [reviewData, setReviewData] = React.useState([]);
  const [requestData, setRequestData] = React.useState([]);

useEffect(()=>{
  http.get('Director-PendingApprovals', {
    params:{
        moduleName:"admin-inventory"
    }
})
.then((response)=>{
    setRequestData(response.data.data)
    console.log(response)
  })
}, [])
    
useEffect(()=>{
  http.get('Director-ReviewedApprovals', {
    params:{
        moduleName:"admin-inventory"
    }
})
.then((response)=>{
    setReviewData(response.data.data)
    console.log(response)
  })
}, [])



  const {table6, table10,handleTable6,handleTable10} = useContext(SwapTableContext)

  return (
      
    <ModalContextProvider>
    	<div className="width">
         { (table6) ?
         
         <DevTrain6 requestData={requestData}/>
        :
       <DevTrain13 reviewData={reviewData}/>}
    	</div>
    </ModalContextProvider>

   
  );
};
export default Page6