import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';
import { selectorItems, selectorFilter } from 'redux/selectors';

export const ContactList = () => {
  const contactList = useSelector(selectorItems);
  const filterData = useSelector(selectorFilter);

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
