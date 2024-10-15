import toast, { Toaster } from "react-hot-toast";

export default toast;

const showToastWithDelay = (
  id: string,
  message: string,
  type: "success" | "error" | "custom",
  delay: number,
  options: any
) => {
  toast.dismiss(id);
  setTimeout(() => {
    if (type === "success") {
      toast.success(message, { id, ...options });
    } else if (type === "error") {
      toast.error(message, { id, ...options });
    } else if (type === "custom") {
      toast(() => message, { id, ...options });
    }
  }, delay);
};

export const successToast = (message: string) => {
  showToastWithDelay("successToast", message, "success", 100, {
    style: {
      borderRadius: "10px",
      background: "#333",
      fontSize: "16px",
      color: "#fff",
    },
    duration: 5000,
    position: "bottom-left",
  });
};

export const failToast = (message: string) => {
  showToastWithDelay("failToast", message, "error", 100, {
    style: {
      borderRadius: "10px",
      background: "#333",
      fontSize: "16px",
      color: "#fff",
    },
    duration: 5000,
    position: "bottom-left",
  });
};

export const warningToast = (message: string) => {
  showToastWithDelay("warningToast", message, "custom", 100, {
    style: {
      borderRadius: "10px",
      background: "#FFD300",
      color: "#000",
      fontSize: "16px",
    },
    duration: 5000,
    position: "bottom-left",
  });
};

export const Toast = () => {
  return <Toaster position="bottom-center" />;
};
