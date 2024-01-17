import styled, { css } from 'styled-components';

const variations = {
  albums: css`
    max-width: 800px;
  `,

  edit: css`
    width: 100%;
    /* height: auto; */
  `,

  post: css`
    width: 100%;
  `,
};

const Img = styled.img`
  object-fit: contain;
  ${(props) => variations[props.$variation]}
`;

export default Img;
