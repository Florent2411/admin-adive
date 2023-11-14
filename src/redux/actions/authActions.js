import axios from 'axios';
import config from '../../config';

export const loginSuccess = (token) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: token
  };
};

export const login = (identifier, password) => {
  return (dispatch) => {
    axios.post(config.apiUrl + "/auth/local", {
      identifier,
      password
    })
      .then((response) => {
        //console.log(response.data.data)
        dispatch(loginSuccess(response.data.data));
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
  };
};