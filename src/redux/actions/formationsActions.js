export const fetchFormationsSuccess = (formations) => {
  return {
    type: 'FETCH_FORMATIONS_SUCCESS',
    payload: formations
  };
};

export function fetchFormationsRequest(payload) {
  return {
    type: 'FETCH_FORMATIONS_REQUESTED',
    payload: payload,
  }
}

export const selectFormation = (formationId) => {
  return {
    type: 'SELECT_FORMATION',
    payload: formationId,
  };
};
