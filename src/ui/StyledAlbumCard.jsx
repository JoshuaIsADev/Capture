import styled, { css } from 'styled-components';

const variations = {
  albums: css`
    height: 50lvh;
    max-height: 500px;
    min-height: 250px;
  `,
};

const Img = styled.img`
  width: auto;
  height: calc(100lvh - 250px);
  object-fit: contain;
  ${(props) => variations[props.$variation]}
`;

const StyledAlbumCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 150px;
  background-color: var(--color-grey-0);
  @media (max-width: 450px) {
    /* margin-bottom: 3rem; */
  }
`;

export { Img, StyledAlbumCard };
