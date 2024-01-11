import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import NavBar from './Navbar';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: flex-start;
  width: 100%;
  max-width: var(--container-width);
  transform: translateX(-50%);
  left: 50%;
  padding: 1rem 3rem;
  background-color: var(--color-grey-0);
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <HeaderNav />
        <NavBar />
      </StyledHeader>
    </>
  );
}

export default Header;
