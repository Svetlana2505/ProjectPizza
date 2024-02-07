import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Paginate = styled(ReactPaginate)`
  margin-top: 40px;

  li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  a {
    padding: 10px;
    border: 1px solid rgb(235, 90, 30);
    border-radius: 30px;
    color: red;
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
      background-color: rgb(235, 90, 30);
      color: #fff;
    }
  }
  .selected {
    a {
      background-color: rgb(235, 90, 30);
      color: #fff;
    }
  }
`;
