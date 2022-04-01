import axios from 'axios';
import Swal from 'sweetalert2';
// import config from '../config';

const postApi = async (url, payload, msg, params = '') => {
  // const { servicePath } =  config;
  try {
    const response = await axios({
      // url: servicePath + url + params,
      // url: '/api/remidation',
      url: url + params,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'request-type': type,
      },
      data: payload,
    });
    Swal.fire(msg,'Thank you', 'success');
    return response;
  } catch (error) {
    Swal.fire('Error occured', 'Please try again', 'error');
    throw error;
  }
};

export default postApi;
