import axios from 'axios';
import config from '../../config';

export const fetchBlogsSuccess = (blogs) => {
  return {
    type: 'FETCH_BLOGS_SUCCESS',
    payload: blogs
  };
};

export const fetchBlogs = () => {
  return (dispatch) => {
    axios.get(config.apiUrl +"/blogs?populate=*")
      .then((response) => {
        //console.log(response.data.data)
        dispatch(fetchBlogsSuccess(response.data.data));
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
  };
};