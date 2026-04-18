import axios from 'axios';

const urlBase = 'http://localhost:3001/persons';

const getAll = async () => {
    const request = axios
    .get(urlBase);
    return request.then(response => response.data)
}

const createContact = async (newContact) => {
    const request = axios
    .post(urlBase, newContact);
    return request.then(response => response.data);
}

export default {
    getAll,
    createContact,
}