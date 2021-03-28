import axios from 'axios';
 import Cookies from "universal-cookie"

 let cookie = new Cookies();
// 'https://localhost:5001/api/facilityrequest/'
//http://devsvr.edogoverp.com/facility/api/facilityrequest/
//var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI1IiwiRmlyc3ROYW1lIjoiQWphbGxhIiwiTGFzdE5hbWUiOiJVZ29jaHVrd3UiLCJleHAiOjE2MTYwMjA4MjksImlzcyI6InNlcnZlciIsImF1ZCI6ImNsaWVudCJ9.UiiMw36BIiDul1C49GEFAuHdZ4JhXTr2lQmNy-OVIso"
console.log(token)
var token = cookie.get('token')
export default axios.create({
     baseURL: 'https://localhost:5001/api/facilityrequest/'       
     ,
      headers: {
          "content-type" : "application/json",
          'Authorization': `Bearer ${token}`,
          'X-API-Key': "e8q05322dhg429b4f778a4pa7yt562eb37q",
        
      }

});
