import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    width: 0;
    margin-bottom: 20px;
  }

  &.active {
    background-color: #282828;
    color: #fff;
  }
`;

export const Item = styled.li`
  border-radius: 8px;
  background: #f9f9f9;
  color: #2c2c2c;
  text-align: center;
  letter-spacing: 0.24px;
  padding: 8px;
  font-size: 10px;
  font-weight: 700;

  :not(:last-child) {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    border-radius: 30px;
    padding: 14px 16px;
    font-size: 16px;
  }

  &.active {
    background: #282828;
    color: #fff;
  }
`;
