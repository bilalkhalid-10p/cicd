import api from '@/services/ApiService';

export default {
    getData
};

function getData() {
    return api
        .get(`/data`)
        .then(response => response.data);
}