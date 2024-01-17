import styled, { css } from 'styled-components';

const variations = {
  edit: css`
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  `,
};

const AlbumTextRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0;
  gap: 1rem;
  ${(props) => variations[props.$variation]}
  @media (max-width: 850px) {
    padding: 2rem 1rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }
`;

export default AlbumTextRow;
