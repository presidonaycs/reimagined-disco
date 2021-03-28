import React, { useState, useContext, useEffect } from 'react';
import { Table, Tag,Modal, Space, Button,Badge, Input } from 'antd';
import Page19 from './Page19'
import httpAdmin from './httpCommonAdmin'
import http from './httpCommon'
import {
    HomeOutlined,
    SettingFilled,
    CloseOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
    import {BsFillCircleFill} from 'react-icons/bs'
    import {ModalContext} from './Contexts/ModalContext'
    import {SwapTableContext} from './Contexts/SwapTableContext'




const DevTrain = (prop) => {

  const {table5, table5A,handleTable5,handleTable5A,

}  = useContext(SwapTableContext)

const handleChangeTo5A = ()=>{
  alert("ssuccess A")
  handleTable5A()
}
const handleChangeTo5 = ()=>{
  handleTable5()
  alert("ssuccess")
}



const [requestCount, setRequestCount]= useState(0)
  const[requests, setRequests]= useState([{requestId: 0,
  category: "",
  details: "",
  quantity: 0,
  lastUpdated: new Date(),
  status: "",
  currentApprovalSequence: 0}])

  const [modalContent, setModalContent] = useState(  {
    requestId: 0,
    requestCategoryId: 0,
    memoInitiationDate: "",
    memoInitiator: "",
    costImplication: 0,
    status: "",
    currentApprovalStage: 3,
    subject: "test",
    details: "",
    lastMaintainanceDate: null,
    approvalSequence: [
      {
        "name": "Ajalla Ugochukwu, Director of Admin ",
        "time": "0 days ago",
        "profilePic": null
      },
      {
        "name": "Chuks Harry, Director of Ken ",
        "time": "1 days ago",
        "profilePic": ""
      },
      {
        "name": "Edo Gov Admin, Director of Commerce ",
        "time": "0 days ago",
        "profilePic": "/documents/cf6ecc92-7457-428f-a9eb-095a04d5bd26_2b0afa87-d006-4d15-8b05-ab4473f24b33_a3d68de2-95cf-46ca-a1d9-1c4f2fcbcf84.jpg"
      },
      {
        "name": "Chuks Harry, Director of Ken ",
        "time": "1 days ago",
        "profilePic": ""
      },
      {
        "name": "Emeson Kalu, Director of Eme ",
        "time": "0 days ago",
        "profilePic": null
      },
      {
        "name": "Abdulmalik Musa, Director of Malik ",
        "time": "0 days ago",
        "profilePic": null
      },
      {
        "name": "Chris Ejike, Director of Ugo ",
        "time": "0 days ago",
        "profilePic": null
      }
    ],
    "approvalJourneyResponse": [
      
    ],
    "uploadedDocuments": [
     
    ]
  }
)
  

  useEffect(()=>{
    
      httpAdmin.get('get-inventory-requests',{params:{modulename:"admin-inventory"}})
      .then((response)=>{
          console.log(response.data.data)
          setRequests(response.data.data)
          setRequestCount(response.data.count)
      })
    
  },[]
    
  )

 
  const columns = [
    
    {
      title: 'Requests',
      dataIndex: 'request',
      key: 'request',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Details',
      key: 'details',
      dataIndex: 'details',
      
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
     
    },
    {
      title: 'Last Updated',
      key: 'updated',
      dataIndex: 'updated',
     
    },
    {
      title: 'Status',
      // key: 'status',
      dataIndex: 'status',
     render:()=>{
       if(requests[0].status1=2)
      return <div className='flex-align' >
      <BsFillCircleFill color="yellow" style={{}}/>
    <p style={{marginLeft:"5px"}}>Pending</p>
  </div>
    else if (requests[0].status1=1) return <div className='flex-align' style={{marginLeft:"5px"}}>
      <BsFillCircleFill color="ash" style={{}}/>
    <p style={{marginLeft:"5px"}}>Draft</p>
  </div>
  else if (requests[0].status1=0) return <div className='flex-align' style={{marginLeft:"5px"}}>
  <BsFillCircleFill color="ash" style={{}}/>
<p style={{marginLeft:"5px"}}>Inactive</p>
</div>
  
} 
  
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => <Button
       onClick={()=>{setIsModalVisible(true)
      showModal(record.requestId)
      }
     
      } style={{backgroundColor:"#1C811C", border:"none", color:"white"}}>View Request</Button>
    },
  ];
  
  
  
  const data = requests?.map((res)=>
  (
    {
      key: '1',
     requestId: res.requestId,
      request: res.subject,
      category: res.category,
      details:res.details,
      quantity:res.quantity,
      updated:res.lastUpdated,
     status:res.status
    }
   )) 
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   request: 32,
    //   category: 'New York No. 1 Lake Park',
    //   details:"ee",
    //   quantity:"ee",
    //   updated:"ee"
     
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   request: 42,
    //   category: 'London No. 1 Lake Park',
    //   details:"ee",
    //   quantity:"ee",
    //   updated:"ee"
   
    // },
    // {
    //   key: '3',
    //   name: 'Joe Black',
    //   request: 32,
    //   category: 'Sidney No. 1 Lake Park',
    //   details:"ee",
    //   quantity:"ee",
    //   updated:"ee"
  
    // },
    // {
    //   key: '4',
    //   name: 'John Brown',
    //   request: 32,
    //   category: 'New York No. 1 Lake Park',
    //   details:"ee",
    //   quantity:"ee",
    //   updated:"ee"
     
    // },
    // {
    //   key: '5',
    //   name: 'Jim Green',
    //   request: 42,
    //   category: 'London No. 1 Lake Park',
    //   details:"ee",
    //   quantity:"ee",
    //   updated:"ee"
   
    // },
    // {
    //   key: '6',
    //   name: 'Joe Black',
    //   request: 32,
    //   category: 'Sidney No. 1 Lake Park',
    //   details:"ee",
    //   quantity:"ee",
    //   updated:"ee"
  
    // },
    // {
    //   key: '7',
    //   name: 'Joe Black',
    //   request: 32,
    //   category: 'Sidney No. 1 Lake Park',  details:"ee",
    //   quantity:"ee",
    //   updated:"ee"
  
    // },
  
  
// const {handleShow6} = useContext(ModalContext)
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (requestid) => {
  
    console.log(requestid)
    http.get('View-Memo-Details',{params:{
      requestId:requestid,
      modulename:'admin-inventory'
    }}).then((response)=>
    {
console.log(response.data.data)
setModalContent(response.data.data)
    })
    

  

  };
 
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
      
    <div >
         <div className="flex marginBottom" style={{width:"40%",marginLeft:"auto", backgroundColor:"white"}}>
             <Button style={{width:"38%", backgroundColor:"#1C811C", color:"white"}}>Filter Items By</Button>
             <div style={{width:"60%"}}>
                <Input style={{marginLeft:"5px" ,border: "1px solid #707070", backgroundColor: "#D5FFD5" }} suffix={<SearchOutlined />} placeholder="search" />
              </div>
           {/* <Input style={{marginLeft:"5px"}} icon={<SearchOutlined/>}/> */}
         </div>
        <div className="flex-between padding" style={{backgroundColor:"#D5FFD5"}}>
          <p style={{width:"60%"}}><b>Learning and Developement Trainig request</b></p>  
          <div className="flex-between" style={{minWidth:"350px", width:"35%"}} >
              <Badge count={requestCount}>
                  <Button onClick={handleChangeTo5} style={{fontWeight:"bold", borderRadius:"20px", backgroundColor:prop.requestColor,}}>Request</Button>
              </Badge>
              <Badge count={5}>
                  <Button onClick={handleChangeTo5A} style={{fontWeight:"bold", backgroundColor:prop.approveColor, borderRadius:"20px"}}>Approve</Button>
              </Badge>
              <Button style={{fontWeight:"bold"}} icon={<PlusOutlined />}>Add Request</Button>
              
          </div>
        </div>
       
<Table columns={columns} dataSource={data} />
<Modal 
width="70%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
// footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Page19 p = "Upload Supporting Documents"
       modalContent = {modalContent}
       />
      </Modal>
    </div>

   
  );
};
export default DevTrain

// const cards = houseProperties.map(item => <div className= "houseMath4" style={{border:""}}><Link to = "/page3">
// <Picture_card card = {item} height = "200px"/> 
// </Link> </div> )
