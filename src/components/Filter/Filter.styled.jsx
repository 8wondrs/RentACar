import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding-top: 80px;
  }
`;

export const Forma = styled.form`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: var(--text-filter-title-color);
  font-size: 14px;
  position: relative;
`;

export const SelectWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 18px;
  }
`;

export const InputBrandWrap = styled.div`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const InputPriceWrap = styled.div`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 125px;
  }
`;

export const InputMileageWrap = styled.div`
  display: flex;
  position: relative;
  width: 250px;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const InputMileageText = styled.p`
  position: absolute;
  top: 35px;
  left: 22px;
  color: var(--input-placeholder-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const InputMileageFrom = styled.input`
  box-sizing: border-box;
  width: 125px;
  height: 48px;
  padding: 14px 14px 14px 70px;
  background-color: var(--input-color);
  outline: transparent;
  font-size: 16px;
  border-color: transparent;
  border-radius: 14px 0px 0px 14px;
  transition: border-color var(--transition);

  &:hover,
  :focus {
    border-color: var(--input-border-hover-color);
  }

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 14px 14px 14px 86px;
  }
`;

export const InputMileageTo = styled.input`
  box-sizing: border-box;
  width: 125px;
  height: 48px;
  padding: 14px 14px 14px 70px;
  background-color: var(--input-color);
  outline: transparent;
  font-size: 16px;
  border-color: transparent;
  border-radius: 0px 14px 14px 0px;
  transition: border-color var(--transition);

  &:hover,
  &:focus {
    border-color: var(--input-border-hover-color);
  }

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 14px 14px 14px 86px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    margin-top: 13px;
  }
`;

export const InputResetWrap = styled.div`
  display: flex;
  @media screen and (min-width: 1200px) {
    margin-top: 10px;
  }
`;
