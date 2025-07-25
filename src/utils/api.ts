import axios from "axios";

const apiURL = "http://localhost:3000/api";

const instance = axios.create({
    baseURL: apiURL, 
})


export default instance;