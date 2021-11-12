import axios from "axios";
const headersConfig = (variable, token) => {
    let config = {
        headers: {},
    };
    config.headers[variable] = token;
    return config;
};
export const handleGet = async (api, token = "") => {
    let result = {};
    try {
        const response = await axios.get(api, headersConfig("token", token));
        if (response.data.success) {
            result = { ...response.data.data };
        }
    } catch (error) {
        console.log(error);
    }
    return result;
};
export const handlePost = async (api, data, token = "") => {
    let response;
    console.log(JSON.stringify(data));
    try {
        response = await axios.post(api, data, headersConfig("token", token));
    } catch (error) {
        console.log(error.message);
    }

    return response.data;
};
export const handleDelete = async (api, token = "") => {
    let response;
    try {
        response = await axios.delete(api, headersConfig("token", token));
    } catch (error) {
        console.log(error.message);
    }
    return response.data;
};
export const handlePut = async (api, data, token = "") => {
    let response;
    console.log(JSON.stringify(data));
    try {
        response = await axios.put(api, data, headersConfig("token", token));
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
    return response.data;
};
