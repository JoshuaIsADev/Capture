import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6rem;
  width: 6rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src='../../public/capture-logo.svg' alt='Logo' />
    </StyledLogo>
  );
}

export default Logo;