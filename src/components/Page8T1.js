import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Select,Button } from 'antd';
import http from './httpCommon';
const originData = [];
const array = []
const { Option } = Select;
const { TextArea } = Input;



const Page8T1 = (props) => {
	
	
	const [roles, setRoles] = useState([]);
	const [roleId, setRoleId] = useState('')
  const [sequence, setSequence] = useState(0)

	
	console.log(sequence)
	console.log(roleId)
	
	const fetchDatas = async () => {
  let url = "GetRoles" // 'Director-ReviewedApprovals';
 
   http.get(url
   )
  
    .then((response) => {
      console.log('server')
      console.log(response.data.data)
      
      setRoles(response.data.data)
      
      
    })

}
useEffect(() => {
  fetchDatas()

}, [])

const handleDone=()=>{
  http.post('create-approval-sequence', {
    id: 0,
    roleId: roleId ,
    sequence: sequence,
    modulename:props.moduleName
  })
  .then(res=>console.log(res))
}

	
const handleRoleId=(e)=>{
  setRoleId(e)
}

const handleSequence=(e)=>{
  setSequence(e)
}

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> 
    :
     <Select>
	 
	 { roles?.map((item)=>(
                        
                        <Option value={item.name}>{item.name}</Option>
                      
                    ))}
  
  {/* <Option value="1">Not Identified</Option>
                                      <Option value="2">Closed</Option>
                                      <Option value="3">Communicated</Option>
                                      <Option value="4">Identified</Option>
                                      <Option value="5">Resolved</Option>
                                      <Option value="6">Cancelled</Option> */}
    </Select>;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };




  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(10);
  
  const formRef = React.createRef();
  const isEditing = (record) => record.key === editingKey;

  

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      sequence: '',
      update: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
            //   href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            <b>Edit</b>
          </Typography.Link>
        );
      },
    },
  
    {
      title: 'Title',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Approved Sequence',
      dataIndex: 'sequence',
      width: '15%',
      editable: true,
    },
    {
      title: 'Last Updated',
      dataIndex: 'update',
      width: '35%',
    //   editable: true,
    },
    {
      title: 'Last Updated by',
      dataIndex: 'by',
      width: '40%',
    //   editable: true,
    },

    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
      //   const editable = isEditing(record);
        return  data.length >= 1  ? (
          <span>
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a>Delete</a>
              </Popconfirm>
                {/* <a
                onClick={() => handleDelete(record.key)}
                >Delete</a> */}
             
          </span>
        ) : (
        null
        );
      },
    },
  ];
  const handleDelete = (key) => {
    const newdata = [...data];
    // const index = newData.findIndex((item) => key === item.key);
    const pp = newdata.filter((item) => item.key !== key)
    setData(
     pp
    );
  };
//  const handleAdd = () => {
//     // key: i.toString(),
//     // name: `Edrward ${i}`,
//     // age: 32,
//     // update: `London Park no. ${i}`,

//     if (newObject[0] != 0) {
//         const newData = {
//             key: count,
//             name: newObject[0].name,
//             description: newObject[0].description,
//             amount: newObject[0].amount,
//             quantity: newObject[0].quantity,
//             //   Action:this.state.newObject[0].amount,
//         };
//        setData([...data, newData])
          
//             setCount(count + 1)
       
//     }
// };
const handleAdd = () => {
 
  const newData = {
    key: count,
    name: array[0].name,
    sequence: array[0].sequence,
    update: ``,
  };
  
    setData([...data, newData]) 
    setCount(count + 1) 
   setArray([])
  
};

useEffect(()=>{
  console.log('use effect ran')
})

  const onReset = () => {
    formRef.current.resetFields();
};
  const onFinish = (values) => {
    // console.log('Success:', values);
    // setFormData(values)
   
   setArray( array.push(values))
    // setNewObject(array)
    
    handleAdd();
    // onReset();
    // prop.handleHold(values)
    // formData = values
    console.log('Success:', array[0]);

};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'sequence' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
      
    <div >
       
       
        <div className="flex">
         
          <div style={{ width: "30%", padding: "15px" }}>
            <Form
    
       ref={formRef}
       layout="vertical"
       name="basic"
       initialValues={{
           remember: true,
       }}
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
    >
    <Form.Item
                                    label="Select Role"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Item Name!',
                                        },
                                    ]}
                                >
                                    <Select
                                        bordered={false}
                                        showSearch
                                        value={roleId || ''}
                                        onChange={handleRoleId}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        filterSort={(optionA, optionB) =>
                                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                        }
                                    >
                                        { roles?.map((item)=>(
                        
                        <Option key={item.id} value={item.id}>{item.name}</Option>
                      
                    ))}
   {/* <Option value="1">Not Identified</Option>
                                        <Option value="2">Closed</Option>
                                        <Option value="3">Communicated</Option>
                                        <Option value="4">Identified</Option>
                                        <Option value="5">Resolved</Option>
                                        <Option value="6">Cancelled</Option> */}
                                    </Select>
                                    {/* <Input style={{ border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} /> */}
                                </Form.Item>
    
                                
    
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Form.Item
                                        style={{ width: "100%" }}
                                        label="Sequence"
                                        name="sequence"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input Amount!',
                                            },
                                        ]}
                                    >
                                        <InputNumber style={{ width: "100%", border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} onChange={handleSequence} value={sequence} />
                                    </Form.Item>
    
                                </div>
    
    
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Form.Item style={{ width: "100%" }}>
                                        <Button block htmlType="submit"  style={{ backgroundColor: "#1C811C", borderColor: "#1C811C", color: "white", width: "95%" }} onClick={handleDone}>
                                            Save Record
                  	          </Button>
                                    </Form.Item>
    
                                    <Form.Item style={{ width: "100%" }}>
                                        <Button block htmlType="submit"  style={{ backgroundColor: "#EFEFEF", borderColor: "#BCBCBC", color: "black", width: "95%" }}>
                                            Cancel
                  	          </Button>
                                    </Form.Item>
                                </div>
        </Form>
          </div>

      <div style={{ width: "70%",}}>
        <Form form={form} component={false}>
        
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
      </div>
        </div>
    </div>

   
  );
};
export default Page8T1