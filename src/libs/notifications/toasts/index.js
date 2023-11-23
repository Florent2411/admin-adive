import { toast } from "react-toastify";

const Toaster = {
    notify: (message) => toast(message),
    warning: (message) => toast(message, { type: "warning" }),
    success: (message) => toast(message, { type: "success" }),
    error: (message) => toast(message, { type: "error" }),
    info: (message) => toast(message, { type: "info" }),
};

export default Toaster;