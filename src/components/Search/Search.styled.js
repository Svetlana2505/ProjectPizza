import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 14px;
  left: 14px;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding-left: 35px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const IconDelete = styled.div`
  position: absolute;
  right: 14px;
  top: 13px;
  svg {
    width: 15px;
    height: 15px;
    opacity: 0.2;

    :hover {
      opacity: 0.4;
    }
  }
`;
