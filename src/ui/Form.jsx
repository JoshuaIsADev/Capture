import styled from 'styled-components';
import { css } from 'styled-components';

const FormHeader = styled.div`
  max-width: var(--container-width-m);
  width: 100%;
  margin: 0rem 1rem;
  border: 1px solid var(--color-grey-900);
  padding: 2rem 1rem;
`;

const variations = {
  albumEdit: css`
    border: 1px solid var(--color-grey-900);
    gap: 0rem;
    :last-child {
      border-right: none;
    }
  `,
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: var(--container-width-m);
  width: 100%;
  gap: 1rem;

  ${(props) => variations[props.$variation]}
`;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export { FormHeader, Form, FormRow };
