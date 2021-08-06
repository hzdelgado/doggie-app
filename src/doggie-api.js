import { apiGet, apiPost } from "./api"


export const getDoggieApi = () => {
    return apiGet("/dog", {});
}

export const createUserApi = (form) => {
    return apiPost("/user", form);
}