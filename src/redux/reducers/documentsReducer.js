const initialState = {
  documents: [],
  purchasedDocuments: [],
  loading: false,
};

export const documentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_START':
      return {
        ...state,
        loading: true,
      };
    case 'REQUEST_END':
      return {
        ...state,
        loading: false,
      };
    case 'FETCH_DOCUMENTS_SUCCESS':
      return {
        ...state,
        documents: action.payload,
        loading: false,
      };
    case 'BUY_DOCUMENT_SUCCESS':
      return {
        ...state,
        purchasedDocuments: [...state.purchasedDocuments, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
