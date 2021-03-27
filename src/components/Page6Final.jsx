import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Divider } from '@material-ui/core';
import { Button, Form, Input, Popconfirm, Select, Table, Typography } from 'antd';
import 'antd/dist/antd.css';
import React, { useContext } from 'react';
import http from '../httpCommon';
import Cookies from "universal-cookie";
import LocationDetails from './layouts/LocationDetails';

const { Option } = Select;
const { Text } = Typography;
const cookies = new Cookies();
var grade = 'Grade level 8'


const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  //   const [editing, setEditing] = useState(false);
  //   const inputRef = useRef(null);
  const form = useContext(EditableContext);
  //   useEffect(() => {
  //     if (editing) {
  //       inputRef.current.focus();
  //     }
  //   }, [editing]);

  //   const toggleEdit = () => {
  //     setEditing(!editing);
  //     form.setFieldsValue({
  //       [dataIndex]: record[dataIndex],
  //     });
  //   };

  const save = async () => {
    try {
      const values = await form.validateFields();
      //   toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };


  
  let childNode = children;

  //   if (editable) {
  //     childNode = editing ? (
  //       <Form.Item
  //         style={{
  //           margin: 0,
  //         }}
  //         name={dataIndex}
  //         rules={[
  //           {
  //             required: true,
  //             message: `${title} is required.`,
  //           },
  //         ]}
  //       >
  //         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
  //       </Form.Item>
  //     ) : (
  //       <div
  //         className="editable-cell-value-wrap"
  //         style={{
  //           paddingRight: 24,
  //         }}
  //         onClick={toggleEdit}
  //       >
  //         {children}
  //       </div>
  //     );
  //   }

  return <td {...restProps}>{childNode}</td>;
};

var obj = [{ id: 0, name: "Please select a value" }]
class Page6F extends React.Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Staff Name',
        dataIndex: 'name',
        width: '25%',
        editable: true,
      },
      {
        title: 'MDA',
        dataIndex: 'mda',
        width: '35%',
      },
      {
        title: 'Module',
        dataIndex: 'module',
      },


      {
        title: 'Action',
        dataIndex: 'operation',
        align: 'right',

        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a><DeleteOutlined style={{ fontSize: "23px" }} /></a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        // {
        //     key: '0',
        //     name: 'Edward King 0',
        //     description: 'London, Park La:ne no. 0',
        //     amount:'32',
        //     quantity:'32',
        // },
        // {
        //     key: '0',
        //     name: 'Edward King 0',
        //     description: 'London, Park La:ne no. 0',
        //     amount:'32',
        //     quantity:'32',
        // },
      ],
      count: 2,
      newObject: [],
      rowValues: {},
      MDAvalues: [],
      employees: [],
      modules: [],
      subModule:0,
      employee:0,
      mdaId:0,
    };
  }
  onReset = () => {
    this.formRef.current.resetFields();
  };
  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;

    if (this.state.newObject != 0) {
      const newData = {
        key: count,
        name: this.state.newObject[0].name,
        mda: this.state.newObject[0].mda,
        module: this.state.newObject[0].module,
        // quantity: this.state.newObject[0].quantity,
        //   Action:this.state.newObject[0].amount,
      };
      this.setState({
        dataSource: [...dataSource, newData],
        count: count + 1,
      });
    }
  };

  componentDidMount = () => {
    var self = this;
    let url = "GetMdas";
    http.get(url)
      .then(function (res) {
        console.log(res.data.data);
        self.setState({ MDAvalues: res.data.data })
      })

    http.get('GetEmployees', {
      params: {
        MdaId: 1
      }
    })
      .then(function (res) {
        console.log(res.data.data);
        self.setState({ employees: res.data.data })
      })

    
  }



   createPriviledge=()=>{
    http.post('CreateAccessPrivilege', {

    })
  }


  handleMDA=(e)=>{
    this.state.mdaId=e.target.value
  }

  handleEmployees=(e)=>{
    this.state.employee = e.target.value
  }

  handleSubModule=(e)=>{
    this.state.subModule = e
  }


  // componentDidMounts =  () => {
  //     var self = this;
  //     let url = "GetEmployees";
  //      http.get(url, {
  //          params:{
  //              MdaId:1
  //          }
  //      })
  //     .then(function (res){
  //         console.log(res.data.data);
  //         self.setState({employees:res.data.data})
  //     })

  // }





  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };



  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    const { TextArea } = Input;




    const onFinish = (values) => {
      console.log('Success:', values);
      // setFormData(values)
      // this.state.newObject[0] = (values)
      const array = []
      array.push(values)
      this.setState({
        newObject: (array),
      })
      this.handleAdd();
      this.onReset();

    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (


<div style={{ width: '100%', height: '80%' }}>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div>Good Day</div>
            <div style={{ fontSize: '23px' }}>{cookies.get("firstName")} {cookies.get("lastName")}; #{cookies.get("staffNumber")}</div>

            <div>{cookies.get("role")} {cookies.get("mda")} | {grade}</div>
          </div>
          <div>
            <LocationDetails />
          </div>

        </div>
      <div style={{ width: '100%', backgroundColor: 'white', height: '80%', marginTop:'16px' }}>

        {  console.log(this.state.subModule + this.state.employee + this.state.mdaId)}


        <div style={{ padding: "0px 0" }}>
          <div style={{ padding: "10px", backgroundColor: "#D5FFD5", alignItems: "center", boxShadow: "0 2px 6px", display: "flex", color: "#43425D", justifyContent: "space-between" }}>
            <h6 style={{ fontWeight: "bold", fontSize: "14px" }}>
              User Settings (Privileges & Access)
                    </h6>
            <div>
              <Input style={{ border: "1px solid #707070", backgroundColor: "#D5FFD5" }} suffix={<SearchOutlined />} placeholder="search" />
            </div>
          </div>
        </div>




        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "33%", padding: "15px" }}>

            <Form

              ref={this.formRef}
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="MDA"
                name="mda"
                rules={[
                  {
                    required: true,
                    message: 'Please input your MDA',
                  },
                ]}
              >
                <Select
                  bordered={false}
                  showSearch

                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {this.state.MDAvalues.map((item) => (
                    <option key={item.id} value={item.id} onChange={this.handleMDA}>{item.name}</option>
                  ))}
                </Select>
              </Form.Item>
              <Divider style={{ marginBottom: "8px" }} />
              <Form.Item

                label="Staff"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input Description!',
                  },
                ]}
              >
                <Select
                  bordered={false}
                  showSearch

                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {this.state.employees.map((item) => (

                    <Option key={item.id} value={item.id} onChange={this.handleEmployees}>{item.firstName}  {item.lastName}</Option>
                  ))}

                </Select>
              </Form.Item>
              <Divider style={{ marginBottom: "8px" }} />


              <Form.Item
                // style={{ width: "90%" }}
                label="Assign Module"
                name="module"
                rules={[
                  {
                    required: true,
                    message: 'Please input Amount!',
                  },
                ]}
              >
                <Select
                  bordered={false}
                  showSearch
                  onChange={this.handleSubModule}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value={1} key={1}>Dashboard</Option>
                  <Option value={2} key={2}>Request Maintainance</Option>
                  <Option value={3} key={3}>Review Request</Option>
                  <Option value={4} key={4}>Manage Request</Option>
                  <Option value={5} key={5}>Settings</Option>
                  <Option value={6} key={6}>Report</Option>
                </Select>
              </Form.Item>
              <Divider style={{ marginBottom: "8px" }} />

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Form.Item style={{ width: "100%" }}>
                  <Button block htmlType="submit" onClick={this.onSubmit} style={{ backgroundColor: "#1C811C", borderColor: "#1C811C", color: "white", width: "95%" }} >
                    Save Record
              	          </Button>
                </Form.Item>

                <Form.Item style={{ width: "100%" }}>
                  <Button block htmlType="submit" onClick={this.onReset} style={{ backgroundColor: "#EFEFEF", borderColor: "#BCBCBC", color: "black", width: "95%" }}>
                    Cancel
              	          </Button>
                </Form.Item>
              </div>
            </Form>
          </div>


          <div style={{ width: "100%" }}>
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    this.setState({
                      rowValues: (record),
                    })
                  },
                };
              }}






              total={this.state.dataSource.length}
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
              pagination={{
                showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} items`,
                position: ["bottomLeft"]
                // showQuickJumper:true,
                // showSizeChanger:true
              }}


            />

            {/* <p>{this.state.rowValues.key}</p> */}

          </div>
        </div>
      </div>
</div>
    );
  }
} export default Page6F
