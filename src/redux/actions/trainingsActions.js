import axios from 'axios';
import config from '../../config';

export const fetchTrainingsSuccess = (trainings) => {
  return {
    type: 'FETCH_TRAININGS_SUCCESS',
    payload: trainings,
    loading: false
  };
};

export const fetchTrainings = () => {
  return (dispatch, getState) => {
    axios.get(config.apiUrl +"/formations?populate=*")
      .then((response) => {
        //console.log(response.data.data)
        dispatch(fetchTrainingsSuccess(response.data.data));
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
  };
};

export const selectTraining = (trainingId) => {
  return {
    type: 'SELECT_TRAINING',
    payload: trainingId,
  };
};
