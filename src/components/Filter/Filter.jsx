import { useDispatch } from 'react-redux';
import { FilterTitle, StyleInput } from './Filter.styled';
import { findContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label>
      <FilterTitle>Find contacts by name</FilterTitle>
      <StyleInput
        type="text"
        name="filter"
        placeholder="Search"
        onChange={evt => dispatch(findContact(evt.target.value))}
      />
    </label>
  );
};
