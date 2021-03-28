import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Typography, Select } from 'antd';
import 'antd/dist/antd.css';
import { DeleteOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;



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

class Page34Table extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Category ',
                dataIndex: 'category',
                width: '25%',
                editable: true,
            },
            {
                title: 'Description',
                dataIndex: 'description',
                width: '35%',
            },
            {
                title: 'Last Updated',
                dataIndex: 'role',
            },
            {
                title: 'Last Updated by',
                dataIndex: 'updated',
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
                //     Item: 'Edward King 0',
                //     Description: 'London, Park La:ne no. 0',
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
            rowValues:{}
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
                category: this.state.newObject[0].category,
                description: this.state.newObject[0].description,
                // module: this.state.newObject[0].module,
                // quantity: this.state.newObject[0].quantity,
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



            <div>
                <div style={{ padding: "0px 0" }}>
                    <div style={{ padding: "10px", backgroundColor: "#D5FFD5", alignItems: "center", boxShadow: "0 2px 6px", display: "flex", color: "#43425D", justifyContent: "space-between" }}>
                        <h6 style={{ fontWeight: "bold", fontSize: "14px" }}>
                            User Management 
                    </h6>
                        <div>
                            <Input style={{ border: "1px solid #707070", backgroundColor: "#D5FFD5" }} suffix={<SearchOutlined style={{opacity:"0.4"}} />} placeholder="search" />
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
                                label="Category"
                                name="category"
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

                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    <Option value={"Not Identified"}>Not Identified</Option>
                                    <Option value="Closed">Closed</Option>
                                    <Option value="Communicated">Communicated</Option>
                                    <Option value="Identified">Identified</Option>
                                    <Option value="Resolved">Resolved</Option>
                                    <Option value="Cancelled">Cancelled</Option>
                                </Select>
                            </Form.Item>

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
                            </Form.Item>


                            

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

        );
    }
} export default Page34Table
