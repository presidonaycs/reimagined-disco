import React from 'react'
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class MyUpload extends React.Component {

  constructor(props) {
    super(props);
  
  this.state = {
    fileList: [
      {
       
      },
    ],
  };}

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-5);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
    this.props.filing(this.state.fileList)
  };

  render() {
    const props = {
      action: 'https://edogoverp.com/services/api/documents/facility',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    );
  }
}

export default MyUpload;
