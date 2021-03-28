import React, { useState } from 'react';
import { Table, Tag,Modal, Space, Button,Badge, Input } from 'antd';
import Page19 from './Page19'
import {
    HomeOutlined,
    SettingFilled,
    CloseOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
import Page23 from './Page23';






const DevTrain16 = (props) => {
  const columns = [
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
      render:text=><a style={{textDecorationLine:"underline"}}>{text}</a>
     
    },
    {
      title: 'Requests Type',
      dataIndex: 'requestType',
      key: 'requestType',
    },
    {
      title: "Officer's Name",
      dataIndex: 'officerName',
      key: 'officerName',
    },
    {
      title: 'Details',
      key: 'details',
      dataIndex: 'details',
      
    },
    {
      title: 'Review Status',
      key: 'reviewStatus',
      dataIndex: 'reviewStatus',
     
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
      render: text => <Button onClick={showModal} style={{backgroundColor:"#1C811C", border:"none", color:"white"}}>View Request</Button>,
    },
  ];
  
  const data = props.reviewData?.map((item)=>(
        {
          key: item.requestId,
          items: item.items,
          requestType: item.requestType,
          officerName: item.officerName,
          details:item.details,
          status:item.reviewStatus,   
        }
  ))
    
  

  
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
        <div className="flex-between padding" style={{backgroundColor:"#D5FFD5"}}>
          <p style={{width:"60%"}}><b>Mainteinance Request Management</b></p>  
          <div className="flex-between" style={{minWidth:"200px" }} >
              <Badge count={5}>
                  <Button style={{fontWeight:"bold", border:"none", backgroundColor:"transparent"}}>Request</Button>
              </Badge>
             
              <Badge count={5}>
                  <Button style={{fontWeight:"bold", borderRadius:"20px", backgroundColor:"white"}}>Reviewed</Button>
              </Badge>
              
          </div>
        </div>
       
<Table columns={columns} dataSource={data} />
<Modal 
style={{backgroundColor:"transparent"}}
width="40%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Page23/>
      </Modal>
    </div>

   
  );
};
export default DevTrain16

// const cards = houseProperties.map(item => <div className= "houseMath4" style={{border:""}}><Link to = "/page3">
// <Picture_card card = {item} height = "200px"/> 
// </Link> </div> )