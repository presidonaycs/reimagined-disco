import React from 'react'
import {Button, Upload} from "antd"
import { UploadOutlined } from '@ant-design/icons';
import Page34Table from './Page34Table'
import 'antd/dist/antd.css';
import './index.css';



function Page34(props){

    return(
        <div className="Page34 background">

         <div>
<div className='padding border marginBottom colorW'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
<div className='padding border marginBottom colorW'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
<div className='padding border marginBottom colorW'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>

   </div>
         <div className="colorW" style={{marginBottom:"10px"}}>
             <Page34Table/>
         </div>

         <div className='padding border marginBottom colorW'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
<div className='padding border marginBottom colorW'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
        </div>

    )
}export default Page34
