import styled from 'styled-components';
import Button from './Button';

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
        <li>
          <Button>View</Button>
        </li>
        <li>
          <Button>Sort</Button>
        </li>
        <li>
          <input type='input' placeholder='Search'></input>
        </li>
      </StyledNavBar>
    </>
  );
}

export default NavBar;
