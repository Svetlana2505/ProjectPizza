import React from 'react';

import { useSelector } from 'react-redux';
import { List } from './BasketList.styled';

import { BasketItem } from 'components/BasketItem/BasketItem';

export const BasketList = () => {
  const { items } = useSelector(state => state.cart);

  return (
    <>
      <List>
        {items.map(obj => (
          <BasketItem {...obj} key={obj.id} />
        ))}
      </List>
    </>
  );
};
