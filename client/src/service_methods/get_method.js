import axios from 'axios';
import Swal from 'sweetalert2';
// import config from '../config';

const getApi = async (url, type, params = '') => {
  // const { servicePath } =  config;
  try {
    const response = await axios({
      // url: servicePath + url + params,
      url: url + params,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'request-type': type,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    Swal.fire('Error occured', 'Please try again', 'error');
    throw error;
  }
};

export default getApi;
