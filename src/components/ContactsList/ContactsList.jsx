import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <List>
      {sortedContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contactItem={contact} />
        </ListItem>
      ))}
    </List>
  );
};
