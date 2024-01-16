import styled, { css } from 'styled-components';

const variations = {
  edit: css`
    gap: 4rem;
  `,
};

const StyledAlbums = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-end;
  flex-wrap: nowrap;
  gap: 1rem;
  ${(props) => variations[props.$variation]}/* height: 100%; */
`;

export default StyledAlbums;
