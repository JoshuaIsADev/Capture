import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border: 1px solid var(--color-grey-900);
  /* background-color: var(--color-grey-0); */
  width: 8rem;
  height: 6rem;
  padding-bottom: 0.1rem;
`;

// const Img = styled.img`
//   height: 6rem;
//   width: 6rem;
// `;

function Logo() {
  return (
    <StyledLogo>
      <h1>Capture</h1>
      {/* <Img src='../../public/capture-logo.svg' alt='Logo' /> */}
    </StyledLogo>
  );
}

export default Logo;
