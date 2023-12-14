import Toaster from "../../libs/notifications/toasts";

//==================== REQUEST =====================//

export function postulateRequest(payload) {
  return {
    type: 'POSTULATE_REQUESTED',
    payload,
  }
}

export function fetchPostulationsRequest(payload) {
  return {
    type: 'FETCH_POSTULATIONS_REQUESTED',
    payload,
  }
}

export function updatePostulationRequest(payload) {
  return {
    type: 'UPDATE_POSTULATION_REQUESTED',
    payload,
  }
}

export function deletePostulationRequest(payload) {
  return {
    type: 'DELETE_POSTULATION_REQUESTED',
    payload,
  }
}

//==================== SUCCESS =====================//

export const postulateSuccess = (postulation) => {
  return {
    type: 'POSTULATE_SUCCESS',
    payload: postulation
  };
};

export function fetchPostulationsSuccess(postulations) {
  return {
    type: 'FETCH_POSTULATIONS_SUCCESS',
    postulations,
  }
}

export function updatePostulationSuccess(postulation) {
  return {
    type: "UPDATE_POSTULATION_SUCCESS",
    payload: postulation
  }
}

export function deletePostulationSuccess(postulationId) {
  Toaster.success("Postulation supprimé avec succès");
  return {
    type: "DELETE_POSTULATION_SUCCESS",
    payload: postulationId
  }
}

