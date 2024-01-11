import styled from 'styled-components';
import Button from './Button';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <StyledUl>
        <li>
          <Button>Collections</Button>
        </li>
        <li>
          <Button>+</Button>
        </li>
        <li>
          <Button>Sign In</Button>
        </li>
      </StyledUl>
    </StyledNavBar>
  );
}

export default NavBar;
