import React from 'react';
import {
  Item,
  Description,
  DescriptionText,
  TopText,
  SubText,
  BoxNumber,
  Price,
} from './BasketItem.styled';

import minus from '../../assets/img/minus.png';
import plus from '../../assets/img/plus.png';
import del from '../../assets/img/delete.png';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from 'redux/slices/cartSlice';

export const BasketItem = ({
  id,
  imageUrl,
  name,
  type,
  size,
  price,
  count,
}) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Description>
        <img src={imageUrl} alt="pizza" width={'80px'} height={'80px'} />
        <DescriptionText>
          <TopText>{name}</TopText>
          <SubText>
            {type} {size} см.
          </SubText>
        </DescriptionText>
      </Description>
      <BoxNumber>
        <img src={minus} alt="minus" onClick={() => dispatch(minusItem(id))} />
        <p>{count}</p>
        <img src={plus} alt="plus" onClick={() => dispatch(addItem({ id }))} />
      </BoxNumber>
      <Price>{price * count} грн.</Price>

      <img src={del} alt="" onClick={() => dispatch(removeItem(id))} />
    </Item>
  );
};
