import apiClient from "../../api/client";
import { requestEnd, requestStart } from "./authActions";

export const fetchCvsSuccess = (cvs) => {
  return {
    type: 'FETCH_CVS_SUCCESS',
    payload: cvs
  };
};

export const createCvSuccess = (cv) => {
  return {
    type: "CREATE_CV_SUCCESS",
    payload: cv
  }
}

export function createCV({ name, occupation, email, phone, address, picture, about, skills, hobbies, experiences, birthDate, education, other, languages, colors, ownerId, token }) {
  return async (dispatch) => {
    try {
      dispatch(requestStart());
      const response = await apiClient.post("/cvs", {
        data: {
          name, occupation, email, phone, address, picture, about, skills, hobbies, experiences, birthDate, education, other, languages, colors, user: ownerId
        }
      },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const { id, attributes } = response.data.data;
      const cv = { id, ...attributes };
      dispatch(createCvSuccess(cv));
    }
    catch (error) {
      console.error(error);
    }
    finally {
      dispatch(requestEnd());
    }
  };
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