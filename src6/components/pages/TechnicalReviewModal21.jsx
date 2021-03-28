import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Divider, withStyles } from '@material-ui/core';
import { Button, Form, Input, Popconfirm, Select, Table, Typography } from 'antd';
import 'antd/dist/antd.css';
import React, { useContext } from 'react';
import http from '../../httpCommon';
import Cookies from "universal-cookie";
import LocationDetails from '../LocationDetails';
import { IoMdClose } from 'react-icons/io';


const { Option } = Select;
const { Text } = Typography;
const cookies = new Cookies();
var grade = 'Grade level 8'
const gg =[]

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
                dataIndex: 'itemname',
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
                dataIndex: 'action',
                align: 'right',
            },
        ];


        
       
        // const billOfQuantity = []
        // const detail = this.props.row.detail
        // const requestID = this.props.row.requestId
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
            Theader:'',
            colData:[],
            
        };
    }


   
   
   



componentDidMount(){
  this.setState({Theader: this.props.technical?.technicalReview ?? ""})
  this.setState({colData : this.props.technical?.billofquantities ?? ""})


  console.log(this.state.technicalReview)
      console.log(this.state.billofquantities)
}

 data = this.props.technical.billofquantities?.map((it) => (
  {
    key: it.requestId,
    itemname: it.itemname,
    description: it.description,
    amount: it.amount,
    quantity: it.quantity,
    action: it.action,
    // reviewStatus: it.reviewStatus,
    //action:<SplitsButton onClick={handleAccept}/>

  }
))



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
        
        
        
        if(this.props.show){
          
        return (
            
        <div className="overlay">
        <IoMdClose className="close-btn pointer" onClick={this.props.handleClose} />

      <div className="modal-box" style={{ width: '100%', fontFamily: 'avenir', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

     

            <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
            <div style={{width:"70%"}}>
                <div style={{ padding: "15px", backgroundColor: "#D5FFD5", boxShadow: "0 2px 6px", color: "#43425D" }}>{this.props.tech?.technicalReview || "Technical review team"}</div>
                <div><TextArea rows={8} placeholder="Repair Details/Report" style={{ width: "100%" }} value={this.props.technical.technicalReview}/></div>

                <div style={{ padding: "15px", textAlign: "left", backgroundColor: "#EFEFEF", boxShadow: "0 2px 6px", color: "#43425D", }}>Add Items Required</div>

                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" , backgroundColor:'white'}}>
                    


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
                            dataSource={this.data}
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
                                            <div style={{display:'flex', width:'100%',justifyContent:'flex-end'}}>
                                                
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
