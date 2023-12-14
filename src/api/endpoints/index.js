import { login, register, setupAccount } from "./auth";
import { createCV, deleteCV, updateCV } from "./cvs";
import { getJobs } from "./jobs";
import { getFormations } from "./formations";
import { getDocuments } from "./library";
import { postulate, getPostulations } from "./postulations";

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
  },

  jobs: {
    getJobs,
  },

  postulations: {
    postulate,
    getPostulations,
  },

  library: {
    getDocuments,
  }
}

export default API;
