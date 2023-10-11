import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;
  font-size: 20px;
`;

export const Button = styled.button`
  display: block;
  color: var(--accent-color);
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  border-style: none;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
  cursor: pointer;
  background-color: transparent;

  &:active {
    color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 150px;
  }
`;
