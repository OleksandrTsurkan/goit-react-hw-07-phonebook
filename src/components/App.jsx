import { useSelector } from 'react-redux';
import { CreateContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import React from 'react';
import { selectContactsList, selectError, selectIsLoading } from 'redux/contacts/contactSlice';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

export const App = () => {
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const contacts = useSelector(selectContactsList)
  return (
    <>
      <CreateContact />
      {contacts.length === 0 && !error && !isLoading ? (
        "You don't have any contacts yet"
      ) : (
        <Filter />
      )}
      {isLoading && <Loader />}
      {error ? <Error /> : <ContactList />}
    </>
  );
};

export default App;
