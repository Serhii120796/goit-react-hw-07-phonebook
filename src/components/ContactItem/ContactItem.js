import { useDispatch } from 'react-redux';
import { ContactData, Span, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contactItem: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContactData>
        {name}: <Span>{number}</Span>
      </ContactData>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </>
  );
};
