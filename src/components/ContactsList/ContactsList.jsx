import { useEffect } from 'react';
import { ButtonDelete, Lilist, Ullist } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter.Slice';
import { deleteContactsThunk, getContactsThunk } from 'redux/contacts/thunk';
import { selectContactsList } from 'redux/contacts/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const phoneBook = useSelector(selectContactsList);

  const filterPhoneBook = useSelector(getFilter);

  const visibleContacts = phoneBook.filter(({ name }) =>
    name?.toLowerCase().includes(filterPhoneBook)
  );

  const deleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  return (
    <Ullist>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Lilist key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <ButtonDelete type="button" onClick={() => deleteContact(id)}>
              Delete
            </ButtonDelete>
          </Lilist>
        );
      })}
    </Ullist>
  );
};
