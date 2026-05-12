import axios from "axios";

//cria a conexão base apontando para o spring
const api = axios.create({
    baseURL: 'http://localhost:8080/',
});

export default api;