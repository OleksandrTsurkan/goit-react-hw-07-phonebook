import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filter.Slice';
import { contactsReducer } from '../redux/contacts/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
