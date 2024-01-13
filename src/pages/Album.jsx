import styled from 'styled-components';
import { useState } from 'react';
import AlbumNav from '../ui/AlbumNav';

const StyledAlbum = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  grid-template-rows: auto;
  width: 100%;
  gap: 2rem;
`;

function Album() {
  const isMobile = window.matchMedia(
    'only screen and (max-width: 500px)'
  ).matches;

  const isTablet = window.matchMedia(
    'only screen and (max-width: 800px)'
  ).matches;

  const isFhd = window.matchMedia(
    'only screen and (max-width: 1920px)'
  ).matches;

  const isQhd = window.matchMedia(
    'only screen and (min-width: 2500px)'
  ).matches;

  const [columns, setColumns] = useState(
    isMobile ? 1 : isTablet ? 2 : isFhd ? 4 : 6
  );

  const handleButtonClick = () => {
    setColumns((prevColumns) =>
      isMobile
        ? 1
        : isTablet && prevColumns === 1
        ? 2
        : isFhd && prevColumns === 4
        ? 2
        : isQhd && prevColumns === 6
        ? 4
        : prevColumns === 4
        ? 2
        : prevColumns === 2
        ? 1
        : isQhd
        ? 6
        : 4
    );
  };

  return (
    <>
      <AlbumNav handleButtonClick={handleButtonClick} />
      <StyledAlbum columns={columns}>
        <div>Album</div>
        <div>Album</div>
        <div>Album</div>
        <div>Album</div>
        <div>Album</div>
        <div>Album</div>
        <div>Album</div>
      </StyledAlbum>
    </>
  );
}

export default Album;
