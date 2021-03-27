import * as React from 'react';
import { HiOutlineUpload } from 'react-icons/hi';

import { FileUpload } from './../utility/fetch';
import notification from './../utility/notification';

const UploadButton = (props) => {
  const [file, setFile] = React.useState('');
  const [filename, setFilename] = React.useState('');

  const onChange = (e) => {
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
    const fileType = type.slice(type.indexOf('/') + 1);

    if (file) {
      notification({
        title: 'File Limit Exceeded',
        message: 'You can only upload one document.',
        type: 'danger',
      });
      return;
    }
    if (!supportedTypes.includes(fileType)) {
      notification({
        title: 'Invalid File Type',
        message:
          'Invalid file format. Supported file types are pdf, docx, doc, xlsx, jpeg, png and gif',
        type: 'danger',
      });
      return;
    }
    if (size / 1024 > 1000) {
      notification({
        title: 'File Too Large',
        message: 'The file size must not be more than 1MB',
        type: 'danger',
      });
      return;
    }
    if (!file && supportedTypes.includes(fileType) && size / 1024 < 1000) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      data.append('files', doc);
      // props?.setIsLoading(true);
      FileUpload(data, (response) => {
        // props?.setIsLoading(false);
        console.log('file upload response', response);
        if (response.code === 1) {
          if (props.formState && props.setFormState && props.stateName) {
            props.setFormState({
              ...props.formState,
              [props.stateName]: response.doclink,
              [props?.stateName2]: e.target.files[0].name,
            });
          }
          notification({
            title: 'Success',
            message: 'File Uploaded successfully!',
            type: 'success',
          });
        } else if (response.code === 0) {
          setFile('');
          setFilename('Choose File');
          notification({
            title: 'File Upload Error',
            message: `${response.message}`,
            type: 'danger',
          });
        } else {
          setFile('');
          setFilename('Choose File');
          notification({
            title: 'File Upload Error',
            message: 'Something went wrong while uploading file please try again',
            type: 'danger',
          });
        }
      });
    }
  };

  React.useEffect(() => {
    setFilename('');
    setFile('');
  }, [props.reload]);

  React.useEffect(() => {
    if (props?.fileName) {
      setFilename(props?.fileName);
    } else {
      setFilename('');
    }
  }, [props?.fileName]);

  return (
    <div className={`${props?.className}`}>
      <input type='file' id='file' hidden onChange={(e) => onChange(e)} />
      <label
        className='flex space-between'
        htmlFor='file'
        id='file-label'
        style={{
          display: 'inline-block',
          color: props.color || '#43425D',
          backgroundColor: props.bgColor || '#EFD66BF2',
          padding: props.padding || '6px 0',
          width: props.width || '75%',
          borderRadius: props.borderRadius || '50px',
        }}>
        {props.icon || (
          <HiOutlineUpload
            color={props.iconColor || '#1C811C'}
            fontSize={props.iconSize || '20px'}
            style={{ marginLeft: '10px' }}
          />
        )}
        <span className='mx-auto m-t-auto'>{props.btnText || 'Upload Document(s)'}</span>
      </label>
      <p>{props.noLabel && props.noLabel ? '' : filename && filename}</p>
    </div>
  );
};

export default UploadButton;
