import { Button, Container, Divider, Grid, makeStyles, Paper, SvgIcon, TextField, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import httpCommon from '../../httpCommon';
import imaee from './../../images/WIN_20190309_20_47_24_Pro.png';
import imaef from './../../images/WIN_20190309_20_48_16_Pro.png';
import imaeg from './../../images/WIN_20190309_20_48_22_Pro.png';
import { ReactComponent as Logo } from "./../iconComponent/upload.svg";
import FrankForm from './FrankForm';
import SuccessModal from '../../assets/SuccessModal'
import UploadButton from '../UploadButton';


const basePath = "http://devsvr.edogoverp.com"
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
    color:'white',
    boxShadow: 'none',
    textTransform: 'none',
    width:'80px',
    fontSize: 9,
    padding: '2px 11px',
    margin:'20px 5px 0px 5px',
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

const TextArea = withStyles({
  root: {
    width: '150px',
    height: '200px'
  },
  body: {
    minWidth: '150px',
    height: '200px'
  }
})(TextField)


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '120px',

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  myDivs: {
    fontSize: '12px',
    padding: '6px',
    fontFamily: 'auto'


  },
  root: {
    display: 'flex',
    maxWidth: '460px',
    flexWrap: 'wrap',
    borderRadius: '4px'
  },
  costBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10
  },

  innerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    padding: '6px',
    width: '226px',
    borderRadius: '3px',
    fontFamily: 'auto'

  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
}));


const RequestReport = (props) => {
  const classes = useStyles();

  const [requestType, setRequestType] = React.useState('');

  

       var List = props.docs
      

  const initiationDate = 'January 19, 2020';
  const initiator = 'Osagie Osaigbovo';
  const viewMemo = 'August 1, 2019';
  const cost = '0.00';
  const status = {};
  const approval = [];
  const position = {};
  
  const [upload, setUpload] = useState(null);
  var [images, setImages] = useState([]);
  var [comments, setComments] = useState("");
  var [refresh, setRefresh] = useState(false);
  var [error, setError] = useState(false);
  let [passModal, setPassModal] = useState(false);
  let [success, setSuccess]=useState(false)



  
  let imagg;
  let namm;


  var imgis = {
    image:'', 
    name:''
  }
  var path=''
   var facImg = [];
  
  const recImagg = (e,n) =>{
   
    
    
  imgis.image = e;
  imgis.name = n;
  facImg.push(imgis);
  
  // setImagess(facImg)
  //setImgState()
  
  }
  
  
  
  
  console.log(facImg)
  

  const dispImage = []
console.log( 'track')
console.log( images)
  
    console.log(comments)
    
    const fileHandler = (e) => {
        var binaryData = [];
        // setImages(e.target.files[0])
        binaryData.push(e.target.files[0])
        const image = new Image();
        var src = URL.createObjectURL(new Blob(binaryData, {type: "application/text"}));
        console.log(src);
        image.src = src;
        dispImage.push(src)
        setImages(images.concat(src)) 
        console.log(dispImage)
    }

const handleCancel=()=>{
  setError(true);
}

const onSubmit =()=>{
  console.log(props.id)
  httpCommon.post("ApproveRequest" , {
      requestid:props.id.current,
      addtionalcomment:comments,
      details:props.row.details,
      subject:props.row.subject,
      requestType:props.row.requestType,
      approvalJourneyImages:[{image:facImg.image}]

    
  })
  .then((res)=>{
    console.log(res)
    props.handleClose()
    props.reload()
  }
  )
  
  
}

const onClear=()=>{
  setComments('');
} 

const setSucceed=()=>{
  props.setSuccess(true);
}

const handleSucClose=()=>{
  setSuccess(false);
}

const openPassModal=()=>{
  setPassModal(true)
}

const closePassModal=()=>{
  setPassModal(false)
}

console.log(props.docs)

if(props.show){
  return (

    <div className="overlay">
    <IoMdClose className="close-btn pointer" onClick={props.handleClose} />
    <div className="modal-box" style={{ width: '80vw', fontFamily: 'avenir', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Grid container style={{ display: 'flex' }} alignItems='center' justify='center'  >

<Grid item sm={7} >
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div >
      <Paper style={{ marginTop: '147px' }, { padding: '20px' }}>
        <div style={{ width: '100%' }}>
          <TextField
            id="outlined-details-static"
            label="Subject"
            multiline
            InputProps={{ disableUnderline: true }}
            rows={2}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: '100%' }, { backgroundColor: 'white' }, { margin: '0px' }}
            fullWidth
            disabled
            value={props.row?.subject}

          />
        </div>
        <Divider />

        <div>
          <TextField
            id="outlined-details-stati"
            label="Details:"
            multiline
            cols={190}
            rows={20}
            style={{ width: '100%' }, { backgroundColor: 'white' }}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ disableUnderline: true }}
            fullWidth
            disabled
            value={props.row.details}
          />
        </div>
                    {/* Last Maintenance Date: {props.row?.lastMaintainanceDate} */}
        <Divider />

        <Container style={{ margin: '16px 0px 16px 0px' }}>
          {props.docs?.map((item) => (
            <div key={item.id} style={{ margin: '16px 0px 16px 0px' }}>
              <img src={item.filePath} alt={item.fileName}/>
            </div>
          ))}
        </Container>

      </Paper>

    </div>

  </div>

  <div style={{ backgroundColor: 'lightgreen', padding: '12px', fontWeight: 'bold' }}>
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
    value = {comments}
    onChange={e => {
      setComments(e.target.value);
    }}

  />
  <FrankForm accept={onSubmit} cancel={handleCancel} show={passModal} handleClose={closePassModal} setSuccess={setSucceed}/>
  <Divider variant='middle' />
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <div>
    <UploadButton width='200px' borderRadius='40px' sendImagg={recImagg}/>
    </div>
    <div>
    <BooButton onClick={openPassModal} refresh={props.refresh}>Submit</BooButton>
    <BooButton style={{backgroundColor:'grey'}} onClick={onClear}>Clear Entry</BooButton>
    <BooButton style={{backgroundColor:'silver', color:'black'}} onClick={props.handleClose} >Close</BooButton>
    </div>
  </div>
  <div style={{display:'flex', flexDirection:'column', justifyContent:'center' }}>
    {
      images?.map((item) => (
        <img key={item} src={item} alt={'broken'} style={{width:'80%', margin:'16px',display:'block'}}></img>
      ))
         
    }
  </div>
  </Paper>
</Grid>
</Grid>
<SuccessModal show={success} closeModal={handleSucClose}/>
    </div>

  </div>



    
    

  );
}
else 
  return "";

}


export default RequestReport;
