import { ToastContainer, ToastContainerProps, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastNotification(props: ToastContainerProps) {
  return <ToastContainer {...props} />;
}

export function showToast(
  message: string,
  type: "success" | "error" | "info" | "warning" = "info"
) {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    default:
      toast(message);
  }
}
