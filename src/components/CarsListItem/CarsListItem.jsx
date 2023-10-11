import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { addFavorite, deleteFavorite } from '../../redux/favoriteSlice';
import { Modal } from '../../components/Modal/Modal';
import { ReactComponent as HeartNormalIcon } from '../../images/icons/heart-normal.svg';
import { ReactComponent as HeartActiveIcon } from '../../images/icons/heart-active.svg';
import Button from '../Button/Button';
import {
  Image,
  Title,
  Item,
  Span,
  TitleWrap,
  DetailsItem,
  DetailsList,
  InfoWrap,
  HeartIconStyle,
} from './CarsListItem.styled';

export const CarsListItem = ({
  id,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  accessories,
  mileage,
  img,
}) => {
  const favorites = useSelector(selectFavorites);
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => setIsShowModal(!isShowModal);

  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
  };

  const handleDeleteFavorites = favId => {
    dispatch(deleteFavorite(favId));
  };

  const addressParts = address.split(',');

  const isFavorite = favorites.includes(id);

  const heartIcon = isFavorite ? (
    <HeartActiveIcon style={HeartIconStyle} onClick={() => handleDeleteFavorites(id)} />
  ) : (
    <HeartNormalIcon style={HeartIconStyle} onClick={() => handleAddFavorites(id)} />
  );

  return (
    <>
      <Item>
        <InfoWrap>
          {heartIcon}
          <Image src={img} alt={make} loading="lazy" width="274" />
          <TitleWrap>
            <Title>
              {make} <Span>{model}, </Span>
              {year}
            </Title>
            <p>{rentalPrice}</p>
          </TitleWrap>
          <DetailsList>
            <DetailsItem>{addressParts[1]}</DetailsItem>
            <DetailsItem>{addressParts[2]}</DetailsItem>
            <DetailsItem>{rentalCompany}</DetailsItem>
          </DetailsList>
          <DetailsList>
            <DetailsItem>{type}</DetailsItem>
            <DetailsItem>{model}</DetailsItem>
            <DetailsItem>{mileage}</DetailsItem>
            <DetailsItem>{accessories[0]}</DetailsItem>
          </DetailsList>
        </InfoWrap>
        <Button text="Learn more" onClick={toggleModal} />
      </Item>
      {isShowModal && (
        <Modal onClose={toggleModal} carId={id}>
          <img alt={make} src={img} />
        </Modal>
      )}
    </>
  );
};
