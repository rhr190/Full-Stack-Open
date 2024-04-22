import axios from "axios"
const baseURL = 'http://localhost:3001/phonebook'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = newObj => {
    const request = axios.post(baseURL, newObj)
    return request.then(response => response.data)
}

const deleteContact = removeId => {
    const delURL = `${baseURL}/${removeId}`
    const request = axios.delete(delURL)
    return request.then(response => response.data)
}

const replaceContact = (modObj, updatedNum) => {
    const replaceURL = `${baseURL}/${modObj.id}`
    const request = axios.put(replaceURL, { ...modObj, number : `${updatedNum}`})
    return request.then(response => response.data)
}

export default {
    getAll, create, deleteContact, replaceContact
}