import AlbumCard from '../ui/AlbumCard';
import { useQuery } from '@tanstack/react-query';
import { getAlbums } from '../services/apiAlbums';
import Spinner from '../ui/Spinner';
import StyledAlbums from '../ui/StyledAlbums';

function Albums() {
  const {
    isLoading,
    data: albums,
    // error,
  } = useQuery({
    queryKey: ['albums'],
    queryFn: getAlbums,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <StyledAlbums>
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </StyledAlbums>
    </>
  );
}

export default Albums;
