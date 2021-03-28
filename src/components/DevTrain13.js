import React, { useState, useContext } from 'react';
import { Table, Tag,Modal, Space, Button,Badge, Input } from 'antd';
import Page19 from './Page19'
import {
    HomeOutlined,
    SettingFilled,
    CloseOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
import Page36 from './Page36';
import {SwapTableContext} from './Contexts/SwapTableContext'

import {BsFillCircleFill} from 'react-icons/bs'





const DevTrain13 = (props) => {
  const columns = [
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'name',
      render:text=><a onClick={showModal} style={{textDecorationLine:"underline"}}>{text}</a>
    },
    {
      title: 'Requests Type',
      dataIndex: 'requestType',
      key: 'request',
    },
    {
      title: "Officer's Name",
      dataIndex: 'officerName',
      key: 'officer',
    },
    {
      title: 'Details',
      key: 'details',
      dataIndex: 'details',
      
    },
    {
      title: 'Review Status',
      key: 'status',
      dataIndex: 'reviewStatus',
      render:()=>
<div className='flex-align' >
      <BsFillCircleFill color="green" style={{}}/>
    <p style={{marginLeft:"5px"}}>Pending</p>
  </div>
      
     
    },
    // {
    //   title: 'Last Updated',
    //   key: 'updated',
    //   dataIndex: 'updated',
     
    // },
    
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: text => <Button  style={{backgroundColor:"#1C811C", border:"none", color:"white"}}>View Request</Button>,
    },
  ];
  
  const data =  props.reviewData?.map((item)=>(
    {
      key: item.requestid,
      items:item.items ,
      requestType: item.requestType,
      officerName: item.officerName,
      details:item.details,
      reviewStatus:item.reviewStatus
    }
  ))
    
  const {table6, table10,handleTable6,handleTable10} = useContext(SwapTableContext)
  const handleChangeTo13 = ()=>{
    handleTable10()
  }
  const handleChangeTo6 = ()=>{
    handleTable6()
  }

  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
      
    <div >
         <div className="flex marginBottom" style={{width:"40%",marginLeft:"auto"}}>
             <Button style={{width:"38%", backgroundColor:"#1C811C", color:"white"}}>Filter Items By</Button>
             <div style={{width:"60%"}}>
                <Input style={{marginLeft:"5px" ,border: "1px solid #707070", backgroundColor: "#D5FFD5" }} suffix={<SearchOutlined />} placeholder="search" />
              </div>
           {/* <Input style={{marginLeft:"5px"}} icon={<SearchOutlined/>}/> */}
         </div>
        <div className="flex-between flex-align padding" style={{backgroundColor:"#D5FFD5"}}>
          <p style={{width:"60%"}}><b>Mainteinance Request Management</b></p>  
          <div className="flex-between" style={{minWidth:"200px" }} >
              <Badge count={5}>
                  <Button onClick={handleChangeTo6} style={{fontWeight:"bold", borderRadius:"20px", backgroundColor:"transparent"}}>Request</Button>
              </Badge>
             
              <Badge count={5}>
                  <Button onClick={handleChangeTo13} style={{fontWeight:"bold", borderRadius:"20px", backgroundColor:"white"}}>Reviewed</Button>
              </Badge>
              
          </div>
        </div>
       
<Table columns={columns} dataSource={data} />
{/* <Modal 
style={{backgroundColor:"transparent"}}
width="50%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Page36/>
      </Modal> */}

      <Modal 
style={{backgroundColor:"transparent"}}
width="50%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Page36/>
      </Modal>
    </div>

   
  );
};
export default DevTrain13

// const cards = houseProperties.map(item => <div className= "houseMath4" style={{border:""}}><Link to = "/page3">
// <Picture_card card = {item} height = "200px"/> 
// </Link> </div> )