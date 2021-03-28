import React from 'react';
import http from '../../httpServices'
import Cookies from 'universal-cookie'
import {useEffect} from 'react'
import LocationIcon from '../../assets/images/location-icon-100.png';






const cookies = new Cookies();



  

console.log('heya heya')

var Latitude='';
var Longitude= '';


const LocationDetails = () =>{
    
  
  // useEffect(()=>{

  
  
  //     if(navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition( )
  //         .then((position)=>{
  //           Latitude = position.coords.latitude ;
  //             Longitude =  position.coords.longitude;
  //             http.post('', {
  //               id:cookies.get('userId'),
  //               lattitude:Latitude,
  //               longitude:Longitude
  //             })
  //             .then((res)=>{
  //               console.log(res)
                
  //             })
  //         })
  //     }
  //      else {
  //         alert("Sorry, your browser does not support HTML5 geolocation.");
  //     }
    
  //   }, [])
  
  
  

  return (
    <div className="location-details flex flex-v-center">
      <div className="m-r-5 right-text" style={{ paddingTop: '3px', fontSize:'14px' }}>
        <p className="location" style={{fontSize:'14px' }}>{ 'Uhunmwonde, Edo State'}</p>
        <p className="login-time" style={{fontSize:'14px' }}>{ 'Time of login: 08:45am'}</p>
      </div>
      <div className="flex">
        <img src={LocationIcon} alt="user avater" />
      </div>
    </div>
  );
    }
  
  export default LocationDetails;
