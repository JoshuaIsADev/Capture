import styled from 'styled-components';
import Button from './Button';

const StyledHeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledNav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
`;

function HeaderNav() {
  return (
    <StyledHeaderNav>
      Capture
      <StyledNav>
        <li>
          <Button>Albums</Button>
        </li>
        <li>
          <Button $variation='add'>+</Button>
        </li>
        <li>
          <Button>Sign In</Button>
        </li>
      </StyledNav>
    </StyledHeaderNav>
  );
}

export default HeaderNav;
