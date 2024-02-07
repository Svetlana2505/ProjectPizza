import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f4f4f4;
  padding-top: 30px;
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionText = styled.div`
  width: 280px;
  margin-left: 15px;
`;

export const TopText = styled.p`
  color: #000;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.22px;
`;

export const SubText = styled.p`
  color: #8d8d8d;
  font-size: 18px;
  letter-spacing: 0.18px;
`;

export const BoxNumber = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 12px;
    color: #000;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.22px;
  }
`;

export const Price = styled.p`
  color: #000;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.22px;
`;
