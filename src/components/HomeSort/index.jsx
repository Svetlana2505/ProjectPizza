import React, { useState } from 'react';
import { Wrapper, List, Item } from './index.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from 'redux/slices/filterSlice';

const list = [
  { name: 'популярности (DESC)', sort: 'rating' },
  { name: 'популярности (ASC)', sort: '-rating' },
  { name: 'цене (DESC)', sort: 'price' },
  { name: 'цене (ASC)', sort: '-price' },
  { name: 'алфавиту (DESC)', sort: 'title' },
  { name: 'алфавиту (ASC)', sort: '-title' },
];

export const HomeSort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.categoryId.sort);
  const [open, setOpen] = useState(false);

  const selectedItem = obj => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <Wrapper>
      <b>Сортировать по:</b>
      <span onClick={() => setOpen(!open)}>{sort.name}</span>

      {open && (
        <List>
          {list.map((obj, i) => (
            <Item
              key={i}
              onClick={() => selectedItem(obj)}
              className={sort.sort === obj.sort ? 'active' : ''}
            >
              {obj.name}
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};
