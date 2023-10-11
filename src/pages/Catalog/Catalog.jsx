import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../../redux/filtersSlice';
import { getCarsByPage } from '../../redux/operations';
import {
  selectIsLoading,
  selectError,
  selectCars,
  selectIsFiltered,
  selectFilteredCars,
} from '../../redux/selectors';
import { Button } from './Catalog.styled';
import { CarsList } from '../../components/CarsList/CarsList';
import { Filter } from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';

function Catalog() {
  const [page, setPage] = useState(1);
  const [isBtnShown, setIsBtnShown] = useState(true);
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const isFiltered = useSelector(selectIsFiltered);
  const filteredCars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsByPage(page));
    dispatch(resetFilter());
    setIsBtnShown(true);
  }, [dispatch, page]);

  const carsToRender = isFiltered ? filteredCars : cars;
  const shouldHideButton = carsToRender.length === 38;

  useEffect(() => {
    if (shouldHideButton) {
      setIsBtnShown(false);
    }
  }, [shouldHideButton]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      {error && <p>{error}</p>}
      {loading && !error && <Loader />}
      <Filter />
      <CarsList cars={isFiltered ? filteredCars : cars} />
      {isBtnShown && !loading && !isFiltered && <Button onClick={handleLoadMore}>Load more</Button>}
    </>
  );
}

export default Catalog;
