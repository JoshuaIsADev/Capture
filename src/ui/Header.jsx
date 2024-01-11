import styled from 'styled-components';
import NavBar from './Navbar';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  max-width: var(--container-width);
  transform: translateX(-50%);
  left: 50%;
  background-color: var(--color-grey-0);
`;

function Header() {
  return (
    <>
      <StyledHeader>
        Capture
        <NavBar />
      </StyledHeader>
    </>
  );
}

export default Header;
