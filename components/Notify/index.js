import { toast } from "react-toastify";

export const notify = {
  success(msg) {
    toast(msg, { type: "success" });
  },
  warning(msg) {
    toast(msg, { type: "warning" });
  },
  info(msg) {
    toast(msg, { type: "info" });
  },
  error(msg) {
    toast(msg, { type: "error" });
  },
  toast(msg, variant = "default") {
    toast(msg, { type: variant });
  },
};