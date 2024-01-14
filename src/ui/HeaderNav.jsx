import styled from 'styled-components';
import StyledNavLink from './StyledNavLink';
import { SlPlus } from 'react-icons/sl';
import { IconContext } from 'react-icons';

// const StyledHeaderNav = styled.nav`
//   display: flex;
//   justify-content: space-between;
// `;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding-top: 1rem;
  align-items: center;
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
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <SlPlus />
            </IconContext.Provider>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/login'>Sign In</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default HeaderNav;
