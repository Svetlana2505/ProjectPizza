import React from 'react';
import basket from '../../assets/img/basket.png';

import { Wrapper, Title, Text, Button, SubText } from './index.styled';
import { Link } from 'react-router-dom';

export const Info = () => {
  return (
    <Wrapper>
      <Title>Корзина пустая</Title>
      <Text>Вероятней всего, вы не заказывали ещё пиццу.</Text>
      <SubText>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </SubText>
      <img
        src={basket}
        alt=""
        width="300px"
        height="255px"
        style={{ margin: 'auto' }}
      />
      <Link to="/">
        <Button>Вернуться назад</Button>
      </Link>
    </Wrapper>
  );
};
