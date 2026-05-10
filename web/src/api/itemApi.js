import axios from "axios";

const API_URL = "http://localhost:8080/api/items";

export const getAllItems = () => {
    return axios.get(API_URL);
};

export const createItem = (itemData) => {
    return axios.post(API_URL, itemData);
};

export const updateItemStatus = (id, status) => {
    return axios.put(
        `${API_URL}/${id}/status?status=${status}`
    );
};

export const deleteItem = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const getUserItems = (email) => {
    return axios.get(`${API_URL}/user/${email}`);
};