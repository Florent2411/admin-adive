import Toaster from "../../libs/notifications/toasts";

export function requestStart() {
  return {
    type: 'REQUEST_START',
  };
}

export function requestEnd() {
  return {
    type: 'REQUEST_END',
  };
}

export function requestError(message) {
  Toaster.error(message);
  return {
    type: 'REQUEST_ERROR',
    payload: {
      message
    }
  }
}
