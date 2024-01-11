import styled, { css } from 'styled-components';

const variations = {
  add: css`
    color: var(--color-grey-900);
    border: 1px solid var(--color-grey-900);
    border-radius: 0.5rem;
    background-color: var(--color-grey-0);
    padding: 0.25rem 0.5rem;
  `,
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: var(--color-grey-900);
  background-color: var(--color-grey-0);
  ${(props) => variations[props.$variation]}
`;

export default Button;
