import styled from 'styled-components';
import { css } from 'styled-components';

const variations = {
  edit: css`
    border: none;
    /* border-bottom: 1px solid var(--color-grey-900); */
    border-top: 1px solid var(--color-grey-900);
  `,
};

const Input = styled.input`
  border: none;
  border: 1px solid var(--color-grey-900);
  background-color: var(--color-background);
  border-radius: none;
  padding: 2rem 1rem;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  /* margin-top: 0.2rem; */
  ${(props) => variations[props.$variation]}
`;

export default Input;
