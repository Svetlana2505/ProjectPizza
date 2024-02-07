import styled from 'styled-components';

import icon from '../../assets/img/path.svg';

export const Wrapper = styled.div`
  width: 821px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Basket = styled.div`
  display: flex;

  p {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.32px;
    margin-left: 17px;
  }
`;

export const ClearBasket = styled.div`
  display: flex;
  cursor: pointer;

  p {
    color: #b6b6b6;
    margin-left: 7px;
  }
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  p {
    color: #000;
    font-size: 22px;
    letter-spacing: 0.22px;
  }

  span {
    font-weight: 700;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cacaca;
  font-size: 16px;
  width: 211px;
  height: 55px;
  border-radius: 30px;
  border: 1px solid #d3d3d3;
  background: #fff;
`;

export const ButtonLeft = styled(ButtonRight)`
  cursor: pointer;
  ::before {
    content: '';
    display: block;
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-size: cover;
    width: 6px;
    height: 12px;
    color: #d3d3d3;
    margin-right: 10px;
  }
`;
