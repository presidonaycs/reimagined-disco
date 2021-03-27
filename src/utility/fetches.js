import Cookies from "universal-cookie";
import axios from 'axios';

const cookie = new Cookies();
export const FileUpload = async (data, callbackfunction) => {
  let Access_token = cookie.get('token');
  const response = axios.post(
    'https://edogoverp.com/services/api/documents/facility',
    data,
    {
      headers: {
         Authorization: `Bearer ${Access_token}`,
         "content-type": "multipart/form-data",
        'content-type': undefined,
      },
    },
  );
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
      console.log(response)
    })
    .catch((error) => {
      callbackfunction(error);
    });
};
