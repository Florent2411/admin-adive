import axios from 'axios';
import config from '../../config';

const handleRequestError = (error) => {
  console.error(error);
}

export const fetchCvsSuccess = (cvs) => {
  return {
    type: 'FETCH_CVS_SUCCESS',
    payload: cvs
  };
};

export const createCvsSuccess = (input) => {
  return (dispatch) => {

    axios.post(config.apiUrl + "/")

  }
}

export const fetchBlogs = () => {
  return (dispatch) => {
    axios.get(config.apiUrl + "/blogs?populate=*")
      .then((response) => {
        //console.log(response.data.data)
        dispatch(fetchBlogsSuccess(response.data.data));
      })
      .catch((error) => {
        handleRequestError(error);
      });
  };
};