import { toast } from "react-toastify";

function toastError(message, error) {
  toast.error(message + error.message, {
    autoClose: false
  });
}

export default toastError();
