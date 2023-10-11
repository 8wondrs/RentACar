import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/operations';
import { resetFilter } from '../../redux/filtersSlice';
import {
  selectFavoriteCars,
  selectFilteredFavoriteCars,
  selectIsFiltered,
} from '../../redux/selectors';
import { CarsList } from '../../components/CarsList/CarsList';
import { Filter } from '../../components/Filter/Filter';
import { Title } from './Favorites.styled';

const Favorites = () => {
  const dispatch = useDispatch();
  const isFiltered = useSelector(selectIsFiltered);
  const favorites = useSelector(selectFavoriteCars);
  const filteredFavorites = useSelector(selectFilteredFavoriteCars);

  useEffect(() => {
    dispatch(getAllCars());
    dispatch(resetFilter());
  }, [dispatch]);

  return (
    <main>
      <>
        {favorites.length === 0 ? (
          <Title>Currently, there are no selected favorite cars</Title>
        ) : (
          <>
            <Filter />
            <CarsList cars={isFiltered ? filteredFavorites : favorites} />
            {isFiltered && filteredFavorites?.length === 0 && <h2>No filtered cars</h2>}
          </>
        )}{' '}
      </>
    </main>
  );
};

export default Favorites;
