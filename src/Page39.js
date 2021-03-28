import React from 'react'
import {Button, Upload} from "antd"
import { UploadOutlined } from '@ant-design/icons';
import Page39Table from './Page39Table'
import 'antd/dist/antd.css';
import './index.css';

import {page39Divs} from './Array'

function Page39(props){

    return(
        <div className="page39 background">
         {/* <div className="flex-between">
             <div><p>Admin & Store Settings</p></div>
             <div>
                 <div>
                     <p>Uhmekwande, Edo State</p>
                     <p>Time of login 9:35</p>
                 </div>
                 <div><img src="./Images/logo512.png"  alt="./Images/logo512.png" width ="20" height="20" /></div>
             </div>
         </div> */}

         <div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{page39Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{page39Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{page39Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{page39Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{page39Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{page39Divs[0].div1}</p> */}
</div>
         </div>
         <div>
             <Page39Table/>
         </div>
        </div>

    )
}export default Page39
