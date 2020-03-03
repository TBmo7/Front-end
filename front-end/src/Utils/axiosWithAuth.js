import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({ 
        baseURL: "https://african-marketplace-bw-1.herokuapp.com/api/",
        headers: {
            Authorization: token
        }
    })
}