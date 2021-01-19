import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
})

axiosInstance.interceptors.response.use((value => value.data))

export default axiosInstance;