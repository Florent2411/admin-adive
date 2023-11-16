import apiClient from "../../api/client";
import { requestEnd, requestStart } from "./authActions";

//  name: '',
//         occupation: '',
//         email: '',
//         phone: '',
//         address: '',
//         picture: '',
//         about: '',
//         skills: [],
//         hobbies: [],
//         experiences: [],
//         birthDate: '',
//         education: [],
//         other: '',
//         languages: [],
//         colors: {
//             primaryColor: '#000000',
//             secondaryColor: '#FFFFFF',
//         },

export const fetchCvsSuccess = (cvs) => {
  return {
    type: 'FETCH_CVS_SUCCESS',
    payload: cvs
  };
};

// export const createCvsSuccess = (input) => {
//   return (dispatch) => {

//     axios.post(config.apiUrl + "/")

//   }
// }

export function createCV({ name, occupation, email, phone, address, picture, about, skills, hobbies, experiences, birthDate, education, other, languages, colors, user }) {
  return async (dispatch) => {
    try {
      dispatch(requestStart());
      const response = await apiClient.post("/auth/local", { identifier, password });
      const { jwt, user } = response.data;
      // dispatch(loginSuccess(jwt, user));
    }
    catch (error) {
      console.error(error);
    }
    finally {
      dispatch(requestEnd());
    }
  };
}