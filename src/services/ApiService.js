import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://desolate-mountain-37815.herokuapp.com',
});


export default instance;