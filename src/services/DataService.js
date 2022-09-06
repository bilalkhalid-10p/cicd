import api from '@/services/ApiService';

export default {
    getData,
    getManagersData,
    listData,
    createUser,
    updateUser,
    getUserData,
    deleteUser
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

function updateUser(data) {
    return api
        .post(`/update`, { data })
        .then(response => response.data);
}

function getUserData(data) {
    return api
        .post(`/get_user`, { data })
        .then(response => response.data);
}

function deleteUser(id) {
    return api
        .delete(`/delete_user/${id}`)
        .then(response => response.data);
}