import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  gap: 3rem;
  align-items: center;
`;

function AlbumsNav({ handleButtonClick }) {
  return (
    <nav>
      <NavList>
        <li>
          <Button onClick={handleButtonClick}>View</Button>
        </li>
        <li>
          <Button>Sort</Button>
        </li>
        <li>
          <input type='input' placeholder='Search'></input>
        </li>
      </NavList>
    </nav>
  );
}

AlbumsNav.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default AlbumsNav;
