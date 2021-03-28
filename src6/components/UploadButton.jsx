import { HelpOutline } from '@material-ui/icons';
import * as React from 'react';
import { HiOutlineUpload } from 'react-icons/hi';

import { FileUpload } from './../utility/fetches';



var baseURL='http://devsvr.edogoverp.com'
const UploadButton = (props) => {
  const [file, setFile] = React.useState('');
  const [filename, setFilename] = React.useState('');
  const [imagg, setImagg] = React.useState('');
  const [namm, setNamm] = React.useState('')
  const [imagess, setImagess] = React.useState([])


  props.sendImagg ? props.sendImagg(imagg, namm) : console.log('') 
  

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
    const { type, size } = e.target.files[0] ?? '';

    let doc = e.target.files[0];

    console.log('Logging File Type and Size', type, size);
    const fileType = type.slice(type.indexOf('/') + 1);

   
    let defObj = {
      name:'',
      link:''
    }

    let defArr=[]
   
    
    
    if ( supportedTypes.includes(fileType) && size / 1024 < 1000) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      data.append('files', doc);
      FileUpload(data, (response) => {
        console.log('file upload response', response);
        if (response.code === 1) {
          setImagg(response.doclink);
          setNamm(doc.name)
          defObj.name=doc.name
          defObj.link=baseURL.concat(response.doclink)
          setImagess([...imagess, defObj]);

          if (props.formState && props.setFormState && props.stateName) {
            props.setFormState({
              ...props.formState,
              [props.stateName]: response.doclink,
              [props?.stateName2]: e.target.files[0].name,
            });
          }
         
        } else if (response.code === 0) {
          setFile('');
          setFilename('Choose File');
         
        } else {
          setFile('');
          setFilename('Choose File');
         
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
      <input type='file' id='file' hidden onChange={props.onChange || onChange} />
      <label
        //className='flex space-between'
        htmlFor='file'
        
        style={{
          display: 'inline-block',
          color: props.color || '#43425D',
          backgroundColor: props.bgColor || '#EFD66BF2',
          padding: props.padding || '6px 6px',
          width: props.width || '40%',
          borderRadius: props.borderRadius || '50px',
          fontSize:'12px',
        }}>
        {props.icon || (
          <HiOutlineUpload
            color={props.iconColor || '#1C811C'}
            fontSize={props.iconSize || '20px'}
            style={{ marginLeft: '10px' }}
          />
        )}
        <span style={{paddingLeft:'16px'}}>{props.btnText || 'Upload Document(s)'}</span>
      </label>

      {imagess?.map((item)=>(
                     
                     <div key={item.link}><a href={item.link}>{item.name}</a></div>
                   
                 ))}
    </div>
  );
};

export default UploadButton;
