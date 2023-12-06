import axios from "axios";


const api1 = axios.create({
  baseURL: "/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const api2 = axios.create({
  baseURL: "/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/formdata",
  },
});

export const uploadFile = (data) => api2.post("/uploads", data);
export const getFiles = () => api1.get("/uploads");
export const getFile = (id) => api1.get(`/uploads/${id}`);
