import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteCars } from '../../redux/selectors';
import { getAllCars } from '../../redux/operations';

import { Span } from './FavoriteCount.styled';

export const FavoriteCount = () => {
  const favorites = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  if (favorites.length === 0) {
    return null;
  }

  return <Span>{favorites.length}</Span>;
};
