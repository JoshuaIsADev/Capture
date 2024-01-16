import styled, { css } from 'styled-components';

const variations = {
  albums: css`
    max-width: 800px;
  `,

  edit: css`
    height: 150px;
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
