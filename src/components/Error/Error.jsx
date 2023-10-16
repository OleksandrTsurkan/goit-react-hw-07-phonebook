import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/contactSlice';

export const Error = () => {
  const error = useSelector(selectError);

  return <h1>{error}</h1>;
};
