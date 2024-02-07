import React, { useState } from 'react';
import { Item, ItemBox, Top, Buttom, Line } from './index.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from 'redux/slices/cartSlice';

export const HomeList = ({
  pizza: { id, imageUrl, name, types, sizes, price },
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector(state =>
    state.cart.items.find(obj => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const typeNames = ['тонкое', 'традиционное'];

  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      name,
      price,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <Item key={id}>
      <img
        src={imageUrl}
        alt="pizza"
        width="260px"
        style={{ margin: 'auto' }}
      />
      <h2>{name}</h2>
      <ItemBox>
        <Top>
          {types.map((type, i) => (
            <li
              key={i}
              onClick={() => setActiveType(type)}
              className={activeType === type ? 'active' : ''}
            >
              {typeNames[type]}
            </li>
          ))}
        </Top>
        <Buttom>
          {sizes.map((size, index) => (
            <li
              key={index}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? 'active' : ''}
            >
              {size}см.
            </li>
          ))}
        </Buttom>
      </ItemBox>
      <Line>
        <p>{price}грн.</p>
        <button onClick={onClickAdd}>Добавить</button>
        {addedCount > 0 && <span>{addedCount}</span>}
      </Line>
    </Item>
  );
};
