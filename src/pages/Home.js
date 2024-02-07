import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Text } from 'components/Text';
import { HomeCategories } from 'components/HomeCategories';
import { HomeSort } from 'components/HomeSort';
import { HomeList } from 'components/HomeList';
import { List } from 'components/HomeList/index.styled';
import Skeleton from '../components/HomeList/Skeleton';
import { setCurrentPage } from 'redux/slices/filterSlice';
import { Pagination } from 'components/Pagination';
import { fetchPizzas } from 'redux/slices/pizzasSlice';

export const Home = ({ search }) => {
  const { categoryId, currentPage, sort } = useSelector(
    state => state.categoryId
  );
  const { pizzas, status } = useSelector(state => state.pizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItem = async () => {
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const order = sort.sort.includes('-') ? 'asc' : 'desc';
      const sortBy = sort.sort.replace('-', '');
      const searchValue = search ? `&search=${search}` : '';

      dispatch(
        fetchPizzas({
          category,
          order,
          sortBy,
          searchValue,
          currentPage,
        })
      );
    };
    fetchItem();
    window.scrollTo(0, 0);
  }, [categoryId, search, dispatch, currentPage, sort.sort]);

  const pizza = pizzas.map(pizza => <HomeList key={pizza.id} pizza={pizza} />);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}
      >
        <HomeCategories />
        <HomeSort />
      </div>

      <Text>Все пиццы</Text>
      {status === 'error' ? (
        <p>Произошла ошибка</p>
      ) : (
        <List>{status === 'isLoading' ? skeletons : pizza}</List>
      )}

      <Pagination
        currentPage={currentPage}
        onChangePage={number => dispatch(setCurrentPage(number))}
      />
    </>
  );
};
