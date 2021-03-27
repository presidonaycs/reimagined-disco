import axios from 'axios';
import Cookies from "universal-cookie"

let cookie = new Cookies();
// 'https://localhost:5001/api/facilityrequest/'
//http://devsvr.edogoverp.com/facility/api/facilityrequest/
//http://sigmamgate:89/api/facilityrequest/
var token = cookie.get("token");
console.log(token)
export default axios.create({
     baseURL:'http://devsvr.edogoverp.com/facility/api/facilityrequest/'
     ,
      headers: {
          "content-type" : "application/json",
          'Authorization': `Bearer ${token}`,
          'X-API-Key': "e8q05322dhg429b4f778a4pa7yt562eb37q",
        
         

      }
    
});
