import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContactFech, deleteContactFech } from 'API/api';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const { data } = await fetchContacts();

    return data;
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await addContactFech(contact);
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await deleteContactFech(id);

    return data;
  }
);

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
