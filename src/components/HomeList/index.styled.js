import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -35px;
  margin-bottom: -65px;
`;

export const Item = styled.li`
  margin-right: 35px;
  margin-bottom: 65px;
  width: 280px;

  @media (min-width: 768px) {
    /* width: calc((100% - 105px) / 3); */
  }

  h2 {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 0.2px;
    margin-bottom: 22px;
  }
`;

export const ItemBox = styled.div`
  height: 85px;
  border-radius: 10px;
  background: #f3f3f3;
  padding: 7px;
  margin-bottom: 17px;
`;

export const Top = styled.ul`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 17px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2c2c2c;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.21px;
    width: 131px;
    height: 32px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
    margin-bottom: 7px;
    margin: auto;

    &.active {
      background: #fff;
    }
  }
`;

export const Buttom = styled(Top)`
  li {
    width: 86px;
    height: 32px;
  }
`;

export const Line = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #000;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.33px;
  }

  button {
    width: 155px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid #eb5a1e;
    background: #fff;
    color: #eb5a1e;
    font-weight: 700;
    font-size: 16px;
    position: relative;

    &::before {
      content: '+';
      position: absolute;
      width: 12px;
      height: 12px;
      color: #eb5a1e;
      left: 18px;
    }
  }
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #eb5a1e;
    right: 12px;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
  }
`;
