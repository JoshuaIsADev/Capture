import styled from 'styled-components';
import StyledNavLink from './StyledNavLink';
import { SlPlus } from 'react-icons/sl';
import { IconContext } from 'react-icons';
import Button from './Button';

// const StyledHeaderNav = styled.nav`
//   display: flex;
//   justify-content: space-between;
// `;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

function HeaderNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to='/albums'>Albums</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/share' $variation='add'>
            <Button $variation='add'>+</Button>
            {/* <IconContext.Provider value={{ size: '1.5rem' }}>
              <SlPlus />
            </IconContext.Provider> */}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/posts'>Posts</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default HeaderNav;
