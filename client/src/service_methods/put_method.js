import axios from 'axios';
import Swal from 'sweetalert2';
// import config from '../config';

const putApi = async (url, payload, id, type) => {
  // const { servicePath } =  config;
  try {
    const response = await axios({
      url: `${url}${id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'request-type': type,
      },
      data: payload,
    });
    Swal.fire('Data updated!', 'Thank you', 'success');
    return response;
  } catch (error) {
    Swal.fire('Error occured', 'Please try again', 'error');
    throw error;
  }
};

export default putApi;
