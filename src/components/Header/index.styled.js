import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 49px 0 76px 0;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 152px;
    left: 0;
    background: #f6f6f6;

    @media (min-width: 768px) {
      top: 137px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LogoText = styled.div`
  margin-left: 17px;

  h1 {
    color: #181818;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 0.24px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    color: #7b7b7b;
    font-size: 16px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 40px;
  border-radius: 30px;
  background: #fe5f1e;
  margin: auto;
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 0;
    /* margin-left: auto; */
    width: 150px;
    height: 50px;
  }

  p {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const ButtonElem = styled.div`
  display: flex;
  p {
    margin-left: 8px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
`;
