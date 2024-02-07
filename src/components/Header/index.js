import React from 'react';
import img from '../../assets/img/logo.svg';
import basket from '../../assets/img/basket.svg';
import { Wrapper, Logo, Button, ButtonElem, LogoText } from './index.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search } from 'components/Search';
import { useSelector } from 'react-redux';

export const Header = ({ setSearch, search }) => {
  const { items, totalPrice } = useSelector(state => state.cart);

  const totalCount = items.reduce((acc, obj) => acc + obj.count, 0);

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Wrapper>
      <Logo onClick={() => navigate('/')}>
        <img src={img} alt="logo" />
        <LogoText>
          <h1>REACT PIZZA </h1>
          <p>самая вкусная пицца во вселенной</p>
        </LogoText>
      </Logo>
      {location.pathname !== '/cart' && (
        <Search setSearch={setSearch} search={search} />
      )}
      {location.pathname !== '/cart' && (
        <Button onClick={() => navigate('/cart')}>
          {totalPrice > 0 && <p>{totalPrice} грн.</p>}

          <ButtonElem>
            <img src={basket} alt="basket" />
            {totalCount > 0 && <p>{totalCount}</p>}
          </ButtonElem>
        </Button>
      )}
    </Wrapper>
  );
};
