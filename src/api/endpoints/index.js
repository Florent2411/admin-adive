import { login, register, setupAccount } from "./auth";
import { createCV, deleteCV, updateCV } from "./cvs";
import { getFormations } from "./formations";

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
  },

  formations: {
    getFormations
  }
}

export default API;
