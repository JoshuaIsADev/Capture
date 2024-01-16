import styled, { css } from 'styled-components';

const variations = {
  edit: css`
    flex-direction: row;
    align-items: flex-start;
  `,
};

const AlbumTextRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0;
  gap: 1rem;
  ${(props) => variations[props.$variation]}
  @media (max-height: 600px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 450px) {
    padding: 2rem 1rem;
  }
`;

export default AlbumTextRow;
