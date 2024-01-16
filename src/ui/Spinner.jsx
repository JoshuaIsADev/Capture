import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;
  width: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-grey-0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
