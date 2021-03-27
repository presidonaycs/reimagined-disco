import axios from 'axios';
//"https://localhost:5001/api/authenticate/"
//http://devsvr.edogoverp.com/facility/api/authenticate/
//http://sigmamgate:89/api/authenticate/
var token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIzIiwiRmlyc3ROYW1lIjoiQ2h1a3d1bm9uc28iLCJMYXN0TmFtZSI6Ik9yamlha29yIiwiZXhwIjoxNjE1NTk0Mjc2LCJpc3MiOiJzZXJ2ZXIiLCJhdWQiOiJjbGllbnQifQ.0SjQWgRUMZiqhXfpnP3Sq4-u7e6b_GxA22fHPo0HUDA'
export default axios.create({
     baseURL: "http://devsvr.edogoverp.com/facility/api/authenticate/"
     ,
      headers: {
          "content-type" : "application/x-www-form-urlencoded",
          'Authorization': `Bearer ${token}`,
          'X-API-Key': "e8q05322dhg429b4f778a4pa7yt562eb37q",
        
         
       
      }

});
