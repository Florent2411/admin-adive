import { login, register, setupAccount } from "./auth";
import { createCV, deleteCV } from "./cvs";

const API = {
    auth: {
        login,
        register,
        setupAccount,
    },

    cvs: {
        createCV,
        deleteCV
    }
}

export default API;