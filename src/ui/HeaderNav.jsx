import styled from 'styled-components';
import StyledNavLink from './StyledNavLink';
import { SlPlus } from 'react-icons/sl';
import { IconContext } from 'react-icons';

const StyledHeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
`;

function HeaderNav() {
  return (
    <StyledHeaderNav>
      <h3>Capture</h3>
      <NavList>
        <li>
          <StyledNavLink to='/album'>Album</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/share'>
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <SlPlus />
            </IconContext.Provider>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/login'>Sign In</StyledNavLink>
        </li>
      </NavList>
    </StyledHeaderNav>
  );
}

export default HeaderNav;
