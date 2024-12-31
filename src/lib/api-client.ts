import { ShowErrorMessage } from "@/utils/show-error-message";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response.data)
    const messages = error.response.data.message;

    if (Array.isArray(messages)) {
      messages.forEach((msg: string) => {
        ShowErrorMessage(msg);
      });
    } else if (typeof messages === "string") {
      ShowErrorMessage(messages);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
