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

