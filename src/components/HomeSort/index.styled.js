import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 305px;
  margin: auto;
  color: #2c2c2c;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.21px;
  margin-left: auto;

  @media (min-width: 768px) {
    margin: 0;
    margin-left: auto;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }

  span {
    color: #fe5f1e;
    font-style: 14px;
    letter-spacing: 0.21px;
    border-bottom: 1px dashed #fe5f1e;
    margin-left: 8px;
  }
`;

export const List = styled.ul`
  width: 190px;
  background: #fff;
  padding: 13px 0;
  margin-top: 10px;
  position: absolute;
  right: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
`;

export const Item = styled.li`
  color: #000;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.21px;

  &.active {
    background: rgba(254, 95, 30, 0.05);
    color: #fe5f1e;
  }
`;
