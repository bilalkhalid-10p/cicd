import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default instance;