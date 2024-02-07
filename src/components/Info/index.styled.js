import styled from 'styled-components';

import smile from '../../assets/img/😕.png';

export const Wrapper = styled.div`
  width: 593px;
  margin: 0 auto;
  text-align: center;
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.32px;
  margin-bottom: 10px;

  &::after {
    content: '';
    width: 32px;
    height: 32px;
    display: inline-block;
    background-image: url(${smile});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export const Text = styled.p`
  color: #777;
  text-align: center;
  font-size: 18px;
`;

export const SubText = styled(Text)`
  margin-bottom: 47px;
`;

export const Button = styled.button`
  width: 210px;
  height: 46px;
  margin-top: 74px;
  border-radius: 30px;
  background: #282828;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.24px;
`;
