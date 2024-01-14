import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import Logo from './Logo';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--container-width);
  transform: translateX(-50%);
  left: 50%;
  padding: 0 3rem 1rem;
  background-color: var(--color-grey-0);
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <Logo />
        <HeaderNav />
      </StyledHeader>
    </>
  );
}

export default Header;
