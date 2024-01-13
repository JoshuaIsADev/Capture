import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const variations = {
  add: css`
    cursor: pointer;
    color: var(--color-grey-900);
    border: 1px solid var(--color-grey-900);
    border-radius: 0.5rem;
    background-color: var(--color-grey-0);
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey-300);
      border: 1px solid var(--color-grey-300);
    }
  `,
};

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    color: var(--color-gray-900);
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.1s;
    ${(props) => variations[props.$variation]}
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-300);
    transition: all 0.1s;
  }
`;

export default StyledNavLink;
