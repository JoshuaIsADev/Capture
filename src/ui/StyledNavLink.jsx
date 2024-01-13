import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const variations = {
  add: css`
    cursor: pointer;
    color: var(--color-grey-900);
    border: none;
    border-radius: none;
    background-color: var(--color-grey-0);
    padding: 0;
    text-decoration: none;
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey-300);
      border: none;
      text-decoration: none;
    }
    &::after {
      content: '';
      height: 0px;
      width: 0%;
      background-color: none;
      pointer-events: none;
    }
  `,
};

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    position: relative;
    color: var(--color-gray-900);
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    ${(props) => variations[props.$variation]}
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    transition: all 0.2s;
    color: var(--color-grey-900);
  }

  &::after {
    content: ' ';
    height: 1px;
    width: 100%;
    background-color: var(--color-grey-900);
    position: absolute;
    left: 0;
    bottom: -7px;
    opacity: 0;
    transition: all 0.2s;
    transform: scaleX(0);
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export default StyledNavLink;
