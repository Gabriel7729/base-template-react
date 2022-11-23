import axios from "axios";
import { envs } from "../../config";

export const http = axios.create({
  baseURL: envs.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
