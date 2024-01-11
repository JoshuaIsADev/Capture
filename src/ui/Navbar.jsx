import styled from 'styled-components';

const StyledNavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  gap: 3rem;
  align-items: center;
  padding: 3rem 0;
`;

function NavBar() {
  return (
    <>
      <StyledNavBar>
        <li>View</li>
        <li>Sort</li>
        <li>Search</li>
      </StyledNavBar>
    </>
  );
}

export default NavBar;
