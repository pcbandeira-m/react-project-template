import axios from "axios";

// dentro do create, passa um objeto com configurações
const axiosInstance = axios.create({
    baseURL: 'https://hp-api.onrender.com/api/',
    
});

export default axiosInstance;