import api from '@/services/ApiService';

export default {
    getData,
    getManagersData,
    listData,
    createUser
};

function getData() {
    return api
        .get(`/data`)
        .then(response => response.data);
}

function getManagersData() {
    return api
        .get(`/managers`)
        .then(response => response.data);
}

function listData() {
    return api
        .get(`/list`)
        .then(response => response.data);
}

function createUser(data) {
    return api
        .post(`/create`, { data })
        .then(response => response.data);
}