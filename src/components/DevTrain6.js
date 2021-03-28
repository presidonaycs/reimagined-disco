import React, { useState, useContext } from 'react';
import { Table, Tag,Modal, Space, Button,Badge, Input } from 'antd';
import Page19 from './Page19'
import {
    HomeOutlined,
    SettingFilled,
    CloseOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
import Page22 from './Page22';
import Page27 from './Page27';
import {ModalContext} from './Contexts/ModalContext'
import {SwapTableContext} from './Contexts/SwapTableContext'
import Page36 from './Page36';






const DevTrain6 = (props) => {
  const columns = [
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
      render:text=><a onClick={showModal1} style={{textDecorationLine:"underline"}}>{text}</a>
     
    },
    {
      title: 'Requests Initiator',
      dataIndex: 'request',
      key: 'request',
    },
    {
      title: 'Request type',
      dataIndex: 'type',
      key: 'type',
    },
    // {
    //   title: 'status',
    //   key: 'details',
    //   dataIndex: 'details',
      
    // },
    // {
    //   title: 'Quantity',
    //   key: 'quantity',
    //   dataIndex: 'quantity',
     
    // },
    {
      title: 'Initiated Date',
      key: 'date',
      dataIndex: 'date',
     
    },
    {
      title: 'Review Status',
      // key: 'status',
      dataIndex: 'status',
     
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: text => <Button onClick={showModal} style={{backgroundColor:"#1C811C", border:"none", color:"white"}}>View Request</Button>,
    },
  ];
  
  const data = props.requestData?.map((item)=>(
    {
      key: item.requestId,
      items: item.items,
      request: item.requestInitiator,
      type: item.requestType,
      date:item.initiatedDate,
      status:item.reviewStatus,
      approvalStatusId:item.approvalStatusId
    }
  ))
  
  const {table6, table10,handleTable6,handleTable10} = useContext(SwapTableContext)

  const {show6, handleShow6} = useContext(ModalContext)

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChangeTo13 = ()=>{
    handleTable10()
  }
  const handleChangeTo6 = ()=>{
    handleTable6()
  }
 
  const showModal = () => {
    handleShow6()
   };

  const handleOk = () => {
    handleShow6()
  };

  const handleCancel = () => {
    // setIsModalVisible(false)
    handleShow6()
  };

  const handleCancel1 = () => {
    setIsModalVisible(false)
    // handleShow6()
  };
  const showModal1 = () => {
    setIsModalVisible(true)
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
          <p style={{width:"60%", fontWeight:"900",}}><b>Request Management</b></p>  
          <div className="flex-between" style={{minWidth:"200px" }} >
              <Badge count={3}>
                  <Button onClick={handleChangeTo6} style={{fontWeight:"bold", borderRadius:"20px", backgroundColor:"white"}}>Request</Button>
              </Badge>
              <Button onClick={handleChangeTo13} style={{fontWeight:"bold", borderRadius:"20px", backgroundColor:"transparent"}}>Reviewed</Button>
              {/* <Button style={{fontWeight:"bold"}} icon={<PlusOutlined />}>Add Request</Button> */}
              
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
 visible={show6} onOk={handleOk} onCancel={handleCancel}>
       <Page22/>

      </Modal>
      <Modal 
style={{backgroundColor:"transparent"}}
width="40%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible} onOk={handleOk} onCancel={handleCancel1} >
       <Page36/>
      </Modal>
    </div>

   
  );
};
export default DevTrain6

// const cards = houseProperties.map(item => <div className= "houseMath4" style={{border:""}}><Link to = "/page3">
// <Picture_card card = {item} height = "200px"/> 
// </Link> </div> )