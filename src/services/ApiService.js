import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://desolate-mountain-37815.herokuapp.com/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default instance;