import { Container, Divider, Paper, SvgIcon, TextField, withStyles } from '@material-ui/core';
import { Button, Form, Input, Select, Table, Typography } from 'antd';
import 'antd/dist/antd.css';
import { default as React,  useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import Cookies from "universal-cookie";
import httpCommon from '../../httpCommon';
import IsLoading from './../../assets/IsLoading'

import { ReactComponent as Logo } from "./../iconComponent/upload.svg";
import { FileUpload } from './../../utility/fetches';
import UploadButton from './../UploadButton'





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





const { Option } = Select;
const { Text } = Typography;
const cookies = new Cookies();
var grade = 'Grade level 8'
const gg =[]




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



class Tech24 extends React.Component {

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
            review:"",
            file:'',
            fileName:'',
            loading:false,
            
        };
    }


   
  onSubmit=()=>{
    console.log(this.props.id.current)
            this.state.loading=true
            httpCommon.post("ApproveRequest", {
               requestId: this.props.id.current,
              addtionalcomment: this.state.review,
              
            })
            .then((res)=>{
              console.log(res)
              this.props.handleClose()
              this.state.loading=false
            }
            )
          }





 data = this.props.tech?.billofquantities?.map((it) => (
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

clear=()=>{
  this.setState({review:""})
}

    onReset = () => {
        this.formRef.current.resetFields();
    };

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
        
       this.List = []; 
        
        if(this.props.show){
          if(this.state.loading){
             return <IsLoading/>
          }
          else{
        return (
            
        <div className="overlay">
        <IoMdClose className="close-btn pointer" onClick={this.props.handleClose} />

      <div className="modal-box" style={{ width: '100%', fontFamily: 'avenir', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

     

            <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
            <div style={{width:"70%"}}>
                <div style={{ padding: "15px", backgroundColor: "#D5FFD5", boxShadow: "0 2px 6px", color: "#43425D" }}>{this.props.row.subject}</div>
                <div><TextArea rows={8} disabled defaultValue={this.props.tech.technicalReview || "Tech message here"} placeholder="Details/Report" style={{ width: "100%" }} /></div>

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
              <Container style={{ backgroundColor: 'white' }}>
              {this.List?.map((item) => (
                <div style={{ margin: '16px 0px 16px 0px' }}>
                  <div>{item.fileName}</div>
                  <div><img src={item.filePath} alt="John" style={{ width: '100%' }}></img></div>
                </div>
              ))}
            </Container>
            <div style={{ backgroundColor: 'lightgreen', padding: '12px', fontWeight: 'bold'}}>
              Add notes
        </div>
            <Paper>
              <TextField
                id="outlined-details-stati"
                multiline
                cols={30}
                rows={10}
                style={{ width: '100%', fontSize: '5px' }, { backgroundColor: 'white', padding: '12px' }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ disableUnderline: true }}
                fullWidth
                value={this.state.review}
                onChange={(e)=>this.setState({review:e.target.value})}

              />
              <Divider variant='middle' />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                <UploadButton style={{width:'200px'}}  width='100%' borderRadius='40px' fontSize='10px' onChange={this.onChange}/>
+

                </div>
                <div>
                  <BooButton onClick={this.onSubmit}>Submit</BooButton>
                  <BooButton style={{ backgroundColor: 'grey' }} onClick={this.clear}>Clear Entry</BooButton>
                  <BooButton style={{ backgroundColor: 'silver', color: 'black' }} onClick={this.props.handleClose}>Close</BooButton>
                </div>
              </div>
            </Paper>

                    </div>
                   
                </div>
                
            </div>
        </div>
        </div>
        </div>
                      

        );}  
    }
    else{
        return""
    }
    }
} export default Tech24

