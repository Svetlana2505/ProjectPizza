import React from 'react';
import { List, Item } from './index.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from 'redux/slices/filterSlice';

export const HomeCategories = () => {
  const { categoryId } = useSelector(state => state.categoryId);
  const dispatch = useDispatch();

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <List>
      {categories.map((category, i) => (
        <Item
          onClick={() => dispatch(setCategoryId(i))}
          className={categoryId === i ? 'active' : ''}
        >
          {category}
        </Item>
      ))}
    </List>
  );
};
