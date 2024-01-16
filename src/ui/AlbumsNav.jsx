import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 5rem;
`;

function AlbumsNav({ handleButtonClick }) {
  return (
    <nav>
      <StyledList>
        {/* <li>
          <Button onClick={handleButtonClick}>View</Button>
        </li> */}
        <li>
          <Button>Sort &nbsp;&nbsp; Name</Button>
        </li>
      </StyledList>
    </nav>
  );
}

AlbumsNav.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default AlbumsNav;
