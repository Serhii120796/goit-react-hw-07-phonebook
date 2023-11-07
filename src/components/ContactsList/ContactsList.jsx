import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contactList = useSelector(state => {
    return state.contacts;
  });
  const filterData = useSelector(state => state.filter);

  const visibleContacts = contactList.filter(({ name }) =>
    name.toLowerCase().includes(filterData.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contactItem={contact} />
        </ListItem>
      ))}
    </List>
  );
};
