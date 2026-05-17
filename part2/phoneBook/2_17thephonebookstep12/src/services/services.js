import axios from 'axios';

// const urlBase = 'http://localhost:3001/persons';
const urlBase = '/api/persons';

const getAll = async () => {
    const request = await axios
    .get(urlBase);
    return request.data
}

const createContact = async (newContact) => {
    const request = await axios
    .post(urlBase, newContact);
    return request.data;
}

const updateContact = async (oldContact) => {
    const request = await axios
    .put(`${urlBase}/${oldContact.id}`, oldContact);
    return request.data;
/*     const response = await request;
    return response.data;
 */}

const deleteContact = async (idContact) => {
    const request = await axios
    .delete(`${urlBase}/${idContact}`);
    return request.data;
}

export default{
    getAll,
    createContact,
    updateContact,
    deleteContact,
}
