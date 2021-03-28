import { DeleteOutlined } from '@ant-design/icons';
import { Divider, SvgIcon, withStyles } from '@material-ui/core';
import { Button, Form, Input, InputNumber, Popconfirm, Select, Table, Typography } from 'antd';
import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import http from '../httpCommon';
import ImgUpload from './ImgUpload';
import IsLoading from './../assets/IsLoading'
import UploadButton from './UploadButton'
import { ReactComponent as Logo } from "./iconComponent/upload.svg";
import { FileUpload } from './../utility/fetches';



const { Option } = Select;
const { Text } = Typography;
const gg =[]

let imagg;
let namm;



const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
    fontSize: 11,
    padding: '2px 12px',
    width: '220px',
    lineHeight: 1,
    margin: '20px',
    backgroundColor: 'yellow',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'yellow',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'yellow',
      borderColor: 'yellow',
    },

  },
})(Button);

const BooButton = withStyles({
    root: {
      color: 'white',
      boxShadow: 'none',
      textTransform: 'none',
      width: '80px',
      fontSize: 9,
      padding: '2px 11px',
      margin: '20px 5px 0px 5px',
      lineHeight: 3,
      borderRadius: 0,
      backgroundColor: 'green',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: 'darkgreen',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
  
      },
  
    },
  })(Button);


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



class Page10F extends React.Component {

    formRef = React.createRef();
    constructor(props) {
        super(props);
        
        this.columns = [
            {
                title: 'ItemName',
                dataIndex: 'name',
                width: '25%',
                editable: true,
            },
            {
                title: 'Description',
                dataIndex: 'description',
                width: '35%',
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
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
       
        const billOfQuantity = []
        const detail = this.props.row.detail
        const requestID = this.props.row.requestId
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
            rowValues:{},
            poster:{},
            flow:[],
            tottal:0,
            file:'',
            fileName:'',
            review:'',
        };
    }

     responseData = {};


memoDetails=()=>{
    http.get('View-Memo-Details', {
      params:{
        requestId:this.props.row.requestId
      }
    })
    .then((res) => {this.responseData = res.data.data
    console.log(res)}
    )
  }


    approve = () =>{
this.state.loading=true;      
let bills=[]
     console.log(gg)
     console.log(this.gg)
      gg.forEach(element => {
        let tempss=   { id : 0,
          requestid : 0,
          itemname : "",
          description : "",
          amount : 0,
          quantity : 0
      }
        let sum = element.amount * element.quantity
        tempss.id=0
        tempss.requestid=this.props.row.requestID
        tempss.itemname=element.name
        tempss.description=element.description
        tempss.amount=sum
        tempss.quantity=element.quantity
        bills.push(tempss)
       } ); 
       

           
      

        let url = 'ApproveRequest'
        http.post(url, {
      requestid: this.props.row.requestID,
      techReview: this.state.review,
      
      createdBy: 0,
      modifiedBy: 0,
      
    facilityBillofquantities: bills
      
    }
        )
        .then((response)=>{
            console.log(response)
            console.log(this.props.row.requestId)
            this.state.loading=false
            this.props.handleClose();
        })

    }
    
  
    //  var imgis = {
    //   image:'', 
    //   name:''
    // }
    //  var path=''
    //   var facImg = [];
    
     
      
      
    // this.imgis.image = e;
    // this.imgis.name = n;
    // var paths = `http://devsvr.edogoverp.com${e}`
    // this.facImg.push(this.imgis);
    
    // this.setState({path:paths})
    // imagess.push(imgis)
    //setImgState()
    


  
  
    // props.sendImagg(imagg, namm) 
    
  
   onChange = (e) => {
      // setFile(e.target.files[0]);
      // setFilename(e.target.files[0].name);
      const data = new FormData();
  
      const supportedTypes = [
        'jpeg',
        'png',
        'gif',
        'pdf',
        'vnd.openxmlformats-officedocument.wordprocessingml.document',
        'doc',
        'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ];
      const { type, size } = e.target.files[0];
  
      let doc = e.target.files[0];
  
      console.log('Logging File Type and Size', type, size);
      console.log(this.state.fileName, this.state.file, this.state.imagg)
      const fileType = type.slice(type.indexOf('/') + 1);
  
     
      
     
      
      
      if (!this.state.file && supportedTypes.includes(fileType) && size / 1024 < 1000) {
        this.setState({file:e.target.files[0]});
        this.setState({fileName:e.target.files[0].name});
        data.append('files', doc);
        FileUpload(data, (response) => {
          console.log('file upload response', response);
          if (response.code === 1) {
            this.setState({imagg:response.doclink});
            this.setState({namm:doc.name})
            if (this.props.formState && this.props.setFormState && this.props.stateName) {
              this.props.setFormState({
                ...this.props.formState,
                [this.props.stateName]: response.doclink,
                [this.props?.stateName2]: e.target.files[0].name,
              });
            }
           
          } else if (response.code === 0) {
            this.setState({file:''});
            this.setState({fileName:'Choose File'});
           
          } else {
            this.setState({file:''});
            this.setState({fileName:'Choose File'});
           
          }
        });
      }
    }
  
    // React.useEffect(() => {
    //   setFilename('');
    //   setFile('');
    // }, [props.reload]);
  
    // React.useEffect(() => {
    //   if (props?.fileName) {
    //     setFilename(props?.fileName);
    //   } else {
    //     setFilename('');
    //   }
    // }, [props?.fileName]);

  























  
  


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
                description: this.state.newObject[0].description,
                amount: this.state.newObject[0].amount,
                quantity: this.state.newObject[0].quantity,
                //   Action:this.state.newObject[0].amount,
            };
            this.setState({
                dataSource: [...dataSource, newData],
                count: count + 1,
            });
        }
    };
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
        const layout = {
            // labelCol: {
            //   span: 4,
            // },
            // wrapperCol: {
            //   span: 16,
            // },
        };

        const onFinish = (values) => {
            // console.log('Success:', values);
            // console.log('Success:', this.props.row);
            // setFormData(values)
            const array = []
            array.push(values)
            gg.push(values)
          // this.billOfQuantity=values
            // array.push(this.props.row)
            this.setState({
                newObject: (array),
                
            })
            console.log(this.props.data)

           
            console.log(gg.length)
            // this.setState({
            //     poster: (values, this.props.rows)
            // })
            //  console.log('Success:',this.props.row);
            this.handleAdd();
            this.onReset();
           
            // prop.handleHold(values)
            // formData = values
           

        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        
        // <IsLoading show={this.state.loading}/>
        if(this.props.show){
        return (
            
        <div className="overlay">
        <IoMdClose className="close-btn pointer" onClick={this.props.handleClose} />

      <div className="modal-box" style={{ width: '100%',  backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      


            <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
            <div >
                <div style={{ padding: "15px", backgroundColor: "#D5FFD5", boxShadow: "0 2px 6px", color: "#43425D" }}>{this.props.row?.subject}</div>
                <div><TextArea rows={8} placeholder="Repair Details/Report" style={{ width: "100%" }} onChange={(e)=>this.setState({review:e.target.value})}/></div>

                <div style={{ padding: "15px", textAlign: "left", backgroundColor: "#EFEFEF", boxShadow: "0 2px 6px", color: "#43425D", }}>Add Items Required</div>

                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" , backgroundColor:'white'}}>
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
                                label="Item Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Item Name!',
                                    },
                                ]}
                            >
                                
                                <Input bordered={false}/>
                                

                                {/* <Input style={{ border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} /> */}
                            </Form.Item>
                            <Divider style={{marginBottom:"8px"}}/>

                            <Form.Item

                                label="Description"
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Description!',
                                    },
                                ]}
                            >
                                <Input bordered={false}/>
                                {/* <TextArea rows={4} style={{ border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} /> */}
                                
                            </Form.Item>
                            <Divider style={{marginBottom:"8px"}}/>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Form.Item
                                    style={{ width: "90%" }}
                                    label="Amount"
                                    name="amount"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input amount!',
                                        },
                                    ]}
                                >
                                    
                                    <InputNumber style={{ width: "90%", border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} />
                                   

                                </Form.Item>
                            <Divider style={{marginBottom:"8px"}}/>
                                <Form.Item
                                    style={{ width: "100%" }}
                                    label="Quantity"
                                    name="quantity"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input quantity!',
                                        },
                                    ]}
                                >
                                    <InputNumber style={{ width: "90%", border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} />
                                    

                                </Form.Item><Divider style={{marginBottom:"8px"}}/>
                            </div>


                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Form.Item style={{ width: "100%" }}>
                                    <Button block htmlType="submit" style={{ backgroundColor: "#1C811C", borderColor: "#1C811C", color: "white", width: "95%" }} >
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
                        <UploadButton style={{width:'200px'}}  width='100%' borderRadius='40px' fontSize='10px' onChange={this.onChange}/>
                    {/* <BootstrapButton
                      type='file'
                      variant='contained'
                      component='label'
                      startIcon={<SvgIcon style={{ marginTop: '9px' }}>
                      <Logo />
                    </SvgIcon>}
                  >
                    Upload Supporting Documents
                  <input type='file' accept="image/*" hidden onChange={(e) => this.onChange(e)}></input>
                  </BootstrapButton> */}
                  
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
                                // showQuickJumper:true,
                                // showSizeChanger:true
                            }}
                            summary={pageData => {
                                let totalAmount = 0;


                                pageData.forEach(({ amount }) => {
                                    totalAmount += amount;

                                }
                                );
                                

                                return (
                                    <>
                                        <Table.Summary.Row style={{ backgroundColor: "#EFEFEF", fontWeight: "bold" }}>
                                            <Table.Summary.Cell>Total</Table.Summary.Cell>
                                            <Table.Summary.Cell>
                                                <Text type="danger" >{}</Text>
                                            </Table.Summary.Cell>
                                            <Table.Summary.Cell>
                                                <Text>{totalAmount}</Text>
                                            </Table.Summary.Cell>
                                            <Table.Summary.Cell>
                                                <Text type="danger" >{}</Text>
                                            </Table.Summary.Cell>
                                            <Table.Summary.Cell>
                                                <Text type="danger" >{}</Text>
                                            </Table.Summary.Cell>
                                        </Table.Summary.Row>

                                    </>
                                );
                            }}

                        />
                                            <div style={{display:'flex', width:'100%',justifyContent:'flex-end', marginRight:'16px'}}>
                                                <BooButton onClick={this.approve}>Submit</BooButton>
                                    {/* //<BooButton style={{ backgroundColor: 'grey' }} >Clear Entry</BooButton> */}
                                                <BooButton style={{ backgroundColor: 'silver', color: 'black',marginRight:'16px' }} onClick={this.props.handleClose}>Close</BooButton>
                                            </div>

                    </div>
                   
                </div>
                
            </div>
        </div>
        </div>
        </div>
                      

        );  
    }
    else{
        return""
    }
    }
} export default Page10F
