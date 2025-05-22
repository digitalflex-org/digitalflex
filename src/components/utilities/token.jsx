import { jwtDecode } from "jwt-decode";

export const setDataToLocalStorage = function (key, value) {
    localStorage.setItem(key, value);
    return;
}
export const getDataFromLocalStorage = function (key) {
    return localStorage.getItem(key);
}

export const removeDataFromLocalStorage = function (key) {
    return localStorage.removeItem(key);
}
export const storeDataTocookies = function (key, value) {
    return document.cookie = `${key}=${value};`;
}

export const isAuthenticated = async function () {
    try
    {
        const token = getDataFromLocalStorage('auth_token');
        if (!token)
        {
            return false;
        }
        const decodeToken = jwtDecode(token);
        if (decodeToken.exp * 1000 < Date.now())
        {
            removeDataFromLocalStorage('auth_token');
            return false;
        }
        return true;
    } catch (error)
    {
        console.error('Error decoding token:', error);
        removeDataFromLocalStorage('auth_token');
        return false;
    }
}
