import styled from 'styled-components';
// import { useState } from 'react';
import AlbumsNav from '../ui/AlbumsNav';
import AlbumCard from '../ui/AlbumCard';
import { useQuery } from '@tanstack/react-query';
import { getAlbums } from '../services/apiAlbums';
import Spinner from '../ui/Spinner';

const StyledAlbums = styled.div`
  /* display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$columns}, 1fr)`};
  grid-template-rows: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  /* margin-top: 8rem; */
  /* @media (max-width: 450px) {
    margin-top: 0rem;
  } */
`;

function Albums() {
  // const isMobile = window.matchMedia(
  //   'only screen and (max-width: 500px)'
  // ).matches;

  // const isTablet = window.matchMedia(
  //   'only screen and (max-width: 800px)'
  // ).matches;

  // const isFhd = window.matchMedia(
  //   'only screen and (max-width: 1920px)'
  // ).matches;

  // const isQhd = window.matchMedia(
  //   'only screen and (min-width: 2500px)'
  // ).matches;

  // const [columns, setColumns] = useState(
  //   isMobile ? 1 : isTablet ? 2 : isFhd ? 4 : 6
  // );

  // const handleButtonClick = () => {
  //   setColumns((prevColumns) =>
  //     isMobile
  //       ? 1
  //       : isTablet && prevColumns === 1
  //       ? 2
  //       : isFhd && prevColumns === 4
  //       ? 2
  //       : isQhd && prevColumns === 6
  //       ? 4
  //       : prevColumns === 4
  //       ? 2
  //       : prevColumns === 2
  //       ? 1
  //       : isQhd
  //       ? 6
  //       : 4
  //   );
  // };

  const {
    isLoading,
    data: albums,
    // error,
  } = useQuery({
    queryKey: ['album'],
    queryFn: getAlbums,
  });

  if (isLoading) return <Spinner />;

  return (
    <>
      {/* <AlbumsNav handleButtonClick={handleButtonClick} /> */}
      {/* <AlbumsNav /> */}
      {/* <StyledAlbums $columns={columns}> */}
      <StyledAlbums>
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
        {/* <AlbumCard album={albums[0]} key={albums[0].id} /> */}
        {/* <div>Album</div>
        <div>Album</div>
        <div>Album</div>
        <div>Album</div>
        <div>Album</div>
        <div>Album</div> */}
      </StyledAlbums>
    </>
  );
}

export default Albums;
