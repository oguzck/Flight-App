import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:5000';

axios.defaults.baseURL = baseURL;


axios.interceptors.response.use(
  response => response, 
  error => {
    const { data, status } = error.response;

    switch (status) {
      case 400:
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      case 401:
        toast.error('Unauthorised');
        break;
      case 405:
        toast.error('Forbidden');
        break;
      case 404:
        toast.error('Not found')
        break;
      case 500:
        toast.error('Server Error')
        break;
      default:
        toast.error('An unknown error occurred.');
        break;
    }

    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

const requests = {
  get: (url, params) => 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.get(url, { params })
          .then(response => resolve(responseBody(response)))
          .catch(err => reject(err));
      }, 1000);
    }),
};


const Flights = {
  list: (params) => requests.get(`/flights`, params),
};

const agent = {
  Flights,
};

export default agent;
