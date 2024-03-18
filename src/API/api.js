import axios from 'axios';

const BASE_URL = 'https://62f5827fac59075124d26022.mockapi.io';
const mockApi = axios.create({ baseURL: BASE_URL });

export const fetchContacts = () => {
  const data = mockApi.get('/contacts');
  console.log(data);
  return data;
};

export const addContactFech = contact => {
  const data = mockApi.post('/contacts', { ...contact });
  return data;
};

export const deleteContactFech = id => {
  const data = mockApi.delete(`/contacts/${id}`);
  return data;
};
