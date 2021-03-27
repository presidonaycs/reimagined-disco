import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import Request from './../components/MainMemo';
import LocationDetails from './layouts/LocationDetails';
import MemoSide from './MemoSide';


var InitiatedRequest = 7786790;
    var CompletedRequest = 7786790;
    var status = 3;
    var officerName = "John Hancock"
    var officerPost = "HOS"
    var date = '08.08.08'
    var title = 'i can still recall our last summers'
    var post = 'officer 1'
    var ministry = 'ministry of Education'
    var numb = 78943
    var grade = 'Grade level 8'
    var descriptions = 'sorry its ovaaaaaaaaaaaaaaaaaa'

const RequestForm = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'EDSG - Employee Details';
    }, []);

    return (
        <Container className='container'>
            <div className='col'>
                <div className='row flex space-between' style={{marginBottom:'16px'}}>
                    <div>
                        <div>Good Morning</div>
                        <div style={{ fontSize: '23px' }}>Osagie Osaigbovo; #{numb}</div>

                        <div>{post} {ministry} | {grade}</div>
                    </div>
                    <div>
                        <LocationDetails />
                    </div>

                </div>
                <div className='row'>
                    <div className='col' >
                    <div style={{fontWeight:'bold', fontFamily:'auto'}}>Facility Request Management</div>
                    <div className='col col-lg-2' style={{ width: '300px', marginRight: '2px', height: 'auto' }}>
                        <MemoSide />
                    </div>
                    </div>

                    <div className='col col-lg-10' style={{ width: '680px', marginLeft: '30px' , marginTop:'24px'}} >
                        <Request />
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default RequestForm