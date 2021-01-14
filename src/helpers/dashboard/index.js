const setDataToStorage = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
}

const getDataFromStorage = key => {
    return JSON.parse(localStorage.getItem(key))
}

export {
    setDataToStorage,
    getDataFromStorage
}