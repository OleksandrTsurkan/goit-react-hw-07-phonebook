import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, getFilter } from 'redux/filter.Slice';

export const Filter = () => {
  const dispatch = useDispatch();
  
  const filterPhoneBook = useSelector(getFilter);

  const onChangeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterSet(value));
  }; 

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          name="filter"
          type="text"
          value={filterPhoneBook}
          onChange={onChangeFilter}
        />
      </FilterLabel>
    </div>
  );
};
