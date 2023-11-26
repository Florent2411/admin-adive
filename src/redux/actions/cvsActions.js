import apiClient from "../../api/client";
import Toaster from "../../libs/notifications/toasts";
import { requestEnd, requestStart } from "./authActions";

export const fetchCvsSuccess = (cvs) => {
  return {
    type: 'FETCH_CVS_SUCCESS',
    payload: cvs
  };
};


// export function createCV({ name, occupation, email, phone, address, picture, about, skills, hobbies, experiences, birthDate, education, other, languages, colors, ownerId, token }) {
//   return async (dispatch) => {
//     try {
//       dispatch(requestStart());

//       dispatch(createCvSuccess(cv));
//     }
//     catch (error) {
//       console.error(error);
//     }
//     finally {
//       dispatch(requestEnd());
//     }
//   };
// }

export function createCVRequest(payload) {
  return {
    type: 'CREATE_CV_REQUESTED',
    payload,
  }
}

export function deleteCVRequest(payload) {
  return {
    type: 'DELETE_CV_REQUESTED',
    payload,
  }
}

export function createCVSuccess(cv) {
  Toaster.success("CV créé avec succès");
  return {
    type: "CREATE_CV_SUCCESS",
    payload: cv
  }
}

export function deleteCVSuccess(cvId) {
  Toaster.success("CV supprimé avec succès");
  return {
    type: "DELETE_CV_SUCCESS",
    payload: cvId
  }
}

function toLocalArray(array) {
  return array.map((entry) => ({ id: entry.id, ...entry.attributes }));
}

export function fetchCVs(token) {
  return async (dispatch) => {
    try {
      dispatch(requestStart());

      const response = await apiClient.get("/cvs", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      );

      const responseCVs = response.data.data;
      const cvs = toLocalArray(responseCVs);

      dispatch(fetchCvsSuccess(cvs));
    }
    catch (error) {
      console.error(error);
    }
    finally {
      dispatch(requestEnd());
    }
  };
}