import axios from "axios";

export const urlApi = "http://localhost:3000";

const Api = axios.create({
  baseURL: urlApi,
  // headers: {
  // "Content-Type": "application/json",
  // },
});

export default Api;
