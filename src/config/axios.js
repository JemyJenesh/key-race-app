import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.API_URL + "/api" || "http://localhost:5000/api",
});
