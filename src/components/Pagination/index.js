import { Paginate } from './Pagination.styled';

export const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <Paginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
