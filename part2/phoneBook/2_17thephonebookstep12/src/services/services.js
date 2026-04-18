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

const updateContact = async (oldContact) => {
    const request = axios
    .put(`${urlBase}/${oldContact.id}`, oldContact);
    return request.then(response => response.data);
/*     const response = await request;
    return response.data;
 */}

const deleteContact = async (idContact) => {
    const request = axios
    .delete(`${urlBase}/${idContact}`);
    return request.then(response => response.data);
}

export default{
    getAll,
    createContact,
    updateContact,
    deleteContact,
}
