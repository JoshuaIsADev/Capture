import styled, { css } from 'styled-components';

const variations = {
  edit: css`
    gap: 4rem;
  `,
  post: css`
    gap: 0rem;
  `,
};

const StyledAlbums = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6rem;
  ${(props) => variations[props.$variation]} /* height: 100%; */
  @media (max-width: 600px) {
    gap: 2rem;
  }
`;

export default StyledAlbums;
