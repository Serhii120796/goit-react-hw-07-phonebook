import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);

// Перевірити цю деструктуризацію

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  // Відредагувати error

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {items.length > 0 && <ContactList />}
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </Layout>
  );
};

