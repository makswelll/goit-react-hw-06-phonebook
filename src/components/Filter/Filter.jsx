import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;
