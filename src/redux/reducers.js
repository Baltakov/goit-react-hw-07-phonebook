import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { contactsInitialState } from './initialState';

import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from '../redux/thunks/thunks';

const getActions = type =>
  isAnyOf(
    getContactsThunk[type],
    addContactThunk[type],
    deleteContactThunk[type]
  );

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.items.unshift(action.payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(getActions('pending'), state => {
        state.contacts.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
      }),
});

export const contactsReducer = contactsSlice.reducer;
export const { filter } = contactsSlice.actions;

console.log(contactsSlice.actions);
// export default contactsSlice.reducer;
// console.log(contactsReducer);

// export const filterReducer = createReducer(contactsInitialState.filter, {
//   [filterContactsAction]: (_, action) => action.payload,
// });

// export const rootReducer = combineReducers({
//   items: contactsSlice.reducer,
//   filter: '',
// });
