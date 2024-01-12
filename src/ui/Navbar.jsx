import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const StyledNavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  gap: 3rem;
  align-items: center;
`;

function NavBar({ handleButtonClick }) {
  return (
    <>
      <StyledNavBar>
        <li>
          <Button onClick={handleButtonClick}>View</Button>
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

NavBar.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default NavBar;
