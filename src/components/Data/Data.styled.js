import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    font-size: 20px;
    color: #fff;
  }
`;

export const Top = styled.div`
  display: flex;

  h1 {
    font-size: 50px;
    color: #fff;
  }
`;

export const DataDay = styled.div`
  margin-left: auto;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 7px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
`;
