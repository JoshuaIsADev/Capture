import styled, { css } from 'styled-components';

const variations = {
  albums: css`
    height: 50lvh;
    max-height: 500px;
    min-height: 250px;
  `,

  edit: css`
    height: 150px;
  `,

  post: css`
    height: calc(100lvh - 100px);
  `,
};

const Img = styled.img`
  width: auto;
  height: calc(100lvh - 250px);
  object-fit: contain;
  ${(props) => variations[props.$variation]}
`;

export default Img;
