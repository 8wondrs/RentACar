import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  border-style: none;
  border-radius: 12px;
  background-color: var(--accent-color);
  color: var(--text-button-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--hover-color);
  }
  :disabled {
    background-color: var(--text-filter-title-color);
  }
`;
