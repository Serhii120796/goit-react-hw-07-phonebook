import { useDispatch } from 'react-redux';
import { ContactData, Span, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contactItem: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContactData>
        {name}: <Span>{phone}</Span>
      </ContactData>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </>
  );
};
