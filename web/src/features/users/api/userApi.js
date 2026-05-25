import axios from "axios";

const BASE_URL = "http://localhost:8080/users";

// Get current user profile
export const getUserProfile = async (email) => {
    return await axios.get(`${BASE_URL}/profile`, {
        params: { email }
    });
};

// Update profile
export const updateUserProfile = async (data) => {
    return await axios.put(`${BASE_URL}/profile`, data);
};