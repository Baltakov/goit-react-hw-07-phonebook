import { createSelector } from '@reduxjs/toolkit';
export const contactsSelector = state => state.contacts.items;

export const filterSelector = state => state.filter;

export const isLoadingSelector = state => state.contacts.isLoading;

export const errorSelector = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    const contactsinTheList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return contactsinTheList;
  }
);
