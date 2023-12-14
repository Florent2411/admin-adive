import Toaster from "../../libs/notifications/toasts";

//==================== REQUEST =====================//

export function fetchDocumentsRequest(payload) {
  return {
    type: 'FETCH_DOCUMENTS_REQUESTED',
    payload,
  }
}

export function buyDocumentRequest(payload) {
  return {
    type: 'BUY_DOCUMENT_REQUESTED',
    payload,
  }
}

//==================== SUCCESS =====================//

export const fetchDocumentsSuccess = (documents) => {
  return {
    type: 'FETCH_DOCUMENTS_SUCCESS',
    payload: documents
  };
};


export function buyDocumentSuccess(document) {
  Toaster.success("Document acheté avec succès");
  return {
    type: "BUY_DOCUMENT_SUCCESS",
    payload: document
  }
}

