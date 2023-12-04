import { login, register, setupAccount } from "./auth";
import { createCV, deleteCV, updateCV } from "./cvs";

const API = {
  auth: {
    login,
    register,
    setupAccount,
  },

  cvs: {
    createCV,
    deleteCV,
    updateCV,
  }
}

export default API;
