import React, { useRef } from 'react';
import { StyledInput, Wrapper, Icon, IconDelete } from './Search.styled';

import { GrSearch, GrClose } from 'react-icons/gr';

export const Search = ({ search, setSearch }) => {
  const inputRef = useRef();

  const onClickClear = () => {
    setSearch('');
    inputRef.current.focus();
  };
  return (
    <Wrapper>
      <Icon>
        <GrSearch />
      </Icon>

      <StyledInput
        ref={inputRef}
        placeholder="Поиск пиццы..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {search && (
        <IconDelete onClick={onClickClear}>
          <GrClose />
        </IconDelete>
      )}
    </Wrapper>
  );
};
