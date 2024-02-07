import React from 'react';
import basket from '../../assets/img/basketPage.svg';
import clearBasket from '../../assets/img/clearBasket.svg';
import { BasketList } from 'components/BasketList/BasketList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from 'redux/slices/cartSlice';
import { Info } from 'components/Info';

import {
  Basket,
  ClearBasket,
  Wrapper,
  WrapperTop,
  Result,
  Buttons,
  ButtonLeft,
  ButtonRight,
} from './index.styled';

export const Baskets = () => {
  const { items, totalPrice } = useSelector(state => state.cart);
  console.log(totalPrice);
  const dispatch = useDispatch();

  const totalCount = items.reduce((acc, obj) => acc + obj.count, 0);
  const navigation = useNavigate();

  if (!totalPrice) {
    return <Info />;
  }
  return (
    <Wrapper>
      <WrapperTop>
        <Basket>
          <img src={basket} alt="basket" />
          <p>Корзина</p>
        </Basket>
        <ClearBasket onClick={() => dispatch(clearItems())}>
          <img src={clearBasket} alt="" />
          <p>Очистить корзину</p>
        </ClearBasket>
      </WrapperTop>

      <BasketList />

      <Result>
        {totalCount > 0 && (
          <p>
            Всего пицц: <span>{totalCount} шт.</span>
          </p>
        )}
        {totalPrice > 0 && (
          <p>
            Сумма заказа: <span>{totalPrice} грн.</span>
          </p>
        )}
      </Result>
      <Buttons>
        <ButtonLeft onClick={() => navigation('/')}>Вернуться назад</ButtonLeft>
        <ButtonRight>Оплатить сейчас</ButtonRight>
      </Buttons>
    </Wrapper>
  );
};
