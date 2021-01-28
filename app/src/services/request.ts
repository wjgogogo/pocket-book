import axios from "axios";

axios.interceptors.response.use((value) => value.data);

export default axios;
