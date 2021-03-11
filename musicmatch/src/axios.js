import axios from 'axios';

const instance = axios.create({
    baseURL: "https://musicmatchbackend.herokuapp.com/"
});

export default instance;