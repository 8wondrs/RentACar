import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid var(--primary-text-color);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--primary-text-color);
  font-size: 20px;
  font-weight: 700;
  transition: color 250ms ease-in-out;
  position: relative;

  &.active {
    color: var(--accent-color);
    font-weight: 900;
    text-decoration: underline;
  }

  &:hover {
    color: var(--hover-color);
  }
`;

export const Counter = styled.span`
  position: absolute;
  top: -3px;
  right: -12px;
  color: var(--accent-color);
  font-size: 20px;
  text-align: center;
  line-height: 20px;
  transition: background-color 250ms ease-in-out;
`;
