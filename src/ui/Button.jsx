import styled, { css } from 'styled-components';

const variations = {
  add: css`
    color: var(--color-grey-900);
    border: 1px solid var(--color-grey-900);
    border-radius: 0rem;
    background-color: transparent;
    padding: 0.5rem 0.75rem;
    transition: 0.15s ease-in-out;
    &:hover {
      border-radius: 0.75rem;
    }
  `,
  edit: css`
    color: var(--color-grey-900);
    border: none;

    border-top: 1px solid var(--color-grey-900);
    border-right: 1px solid var(--color-grey-900);
    width: 100%;
    border-radius: 0rem;
    background-color: transparent;
    padding: 1rem;
    transition: 0.15s ease-in-out;
    font-size: 1rem;
    font-weight: 300;
    &:hover {
      border-radius: none;
      color: var(--color-grey-200);
    }
  `,
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: var(--color-grey-900);
  background-color: var(--color-grey-0);
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  ${(props) => variations[props.$variation]}
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    transition: all 0.2s ease-in-out;
  }
`;

export default Button;
