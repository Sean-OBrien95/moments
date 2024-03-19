import axios from "axios";

axios.defaults.baseURL = "https://drf-api11-bdfdb88f585f.herokuapp.com/";
// axios.defaults.baseURL = "https://8000-seanobrien95-drfapi-vpqqp4zhbuj.ws-eu110.gitpod.io";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();