import styled, { css } from 'styled-components';

const variations = {
  post: css`
    grid-template-rows: 1fr 0px;
  `,
};

const StyledAlbumCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 150px;
  background-color: var(--color-grey-0);
  ${(props) => variations[props.$variation]}
  @media (max-width: 450px) {
    /* margin-bottom: 3rem; */
  }
`;

export default StyledAlbumCard;
