import styled, { css } from 'styled-components';

const variations = {
  post: css`
    width: 100%;
    padding: 0 0;
  `,
};

const StyledAlbumCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  padding: 0;
  ${(props) => variations[props.$variation]}
  @media (max-width: 450px) {
    /* margin-bottom: 3rem; */
  }
`;

export default StyledAlbumCard;
