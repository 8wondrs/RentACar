import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from '../../redux/operations';
import { resetFilter, updateFilter } from '../../redux/filtersSlice';
import { SelectInput } from '../../components/Select/Select';
import makesList from '../../data/makes.json';
import Button from '../../components/Button/Button';
import {
  ButtonWrapper,
  Container,
  Forma,
  InputBrandWrap,
  InputMileageFrom,
  InputMileageText,
  InputMileageTo,
  InputMileageWrap,
  InputPriceWrap,
  Label,
  SelectWrap,
} from './Filter.styled';

const transformSelectData = data =>
  data.map(item => ({
    value: item,
    label: item,
  }));

const optionsBrand = transformSelectData(makesList);

const optionsPrice = Array.from({ length: 38 }, (_, index) => ({
  value: String((index + 3) * 10),
  label: String((index + 3) * 10),
}));

export const Filter = () => {
  const dispatch = useDispatch();
  const selectBrandRef = useRef(null);
  const selectPriceRef = useRef(null);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const brand = form.elements.brand.value.trim();
    const mileageFrom = form.elements.mileageFrom.value;
    const mileageTo = form.elements.mileageTo.value;
    const price = form.elements.price.value;

    if (brand === '' || price === '' || mileageFrom === '' || mileageTo === '') {
      return;
    }
    dispatch(updateFilter({ brand, price, mileageFrom, mileageTo }));
    dispatch(getAllCars());
    form.reset();
    selectBrandRef.current.clearValue();
    selectPriceRef.current.clearValue();

    setFormSubmitted(true);
  };

  const handleResetClick = () => {
    dispatch(resetFilter());
    setFormSubmitted(false);
  };

  return (
    <Container>
      <Forma onSubmit={handleSubmitForm}>
        <SelectWrap>
          <Label>
            Car brand
            <InputBrandWrap>
              <SelectInput
                name={'brand'}
                options={optionsBrand}
                refProp={selectBrandRef}
                placeholder={'Enter the text'}
              />
            </InputBrandWrap>
          </Label>
          <Label>
            Price/ 1 hour
            <InputPriceWrap>
              <SelectInput
                name={'price'}
                options={optionsPrice}
                refProp={selectPriceRef}
                placeholder={'To $'}
              />
            </InputPriceWrap>
          </Label>
        </SelectWrap>
        <InputMileageWrap>
          <Label>
            Сar mileage / km
            <InputMileageText>From</InputMileageText>
            <InputMileageFrom
              required
              type="number"
              name="mileageFrom"
              min="4000"
              max="6000"
              title="Enter a number from 4000 to 6000"
            />
          </Label>
          <Label style={{ color: 'white' }}>
            Сar mileage / km
            <InputMileageText>To</InputMileageText>
            <InputMileageTo
              required
              type="number"
              name="mileageTo"
              min="4001"
              max="7000"
              title="Enter a number from 4001 to 7000"
            />
          </Label>
        </InputMileageWrap>
        <ButtonWrapper>
          {formSubmitted ? (
            <Button type="reset" text="Clear" width={136} height={48} onClick={handleResetClick} />
          ) : (
            <Button type="submit" text="Search" width={136} height={48} />
          )}
        </ButtonWrapper>
      </Forma>
    </Container>
  );
};
