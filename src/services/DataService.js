import api from '@/services/ApiService';

export default {
    getData,
    getParentsData,
    listData
};

function getData() {
    return api
        .get(`/data`)
        .then(response => response.data);
}

function getParentsData() {
    return api
        .get(`/parents`)
        .then(response => response.data);
}

function listData() {
    return api
        .get(`/list`)
        .then(response => response.data);
}