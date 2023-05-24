import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={handleFilterChange} type="search" name="filter" />
    </>
  );
};

export default Filter;
