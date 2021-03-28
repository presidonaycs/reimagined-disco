import { Container } from '@material-ui/core';
import React from 'react';
import Greeting from '../components/Greeting';
import SideBar from '../components/SideBar';
import Tables from '../components/Tables';

const ReviewRequest = () => {
    return (
        <div>
            <SideBar />
            
           <Container  style={{display:'flex'}, {justifyContent:'center'}, {border:'1px solid green'}, {marginLeft:'40px'}}> 
           <Greeting />
           <Tables />
           </Container>
        </div>
    );
};

export default ReviewRequest;