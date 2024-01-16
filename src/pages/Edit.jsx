import AlbumCardEdit from '../ui/AlbumCardEdit';
import { useQuery } from '@tanstack/react-query';
import { getAlbums } from '../services/apiAlbums';
import Spinner from '../ui/Spinner';
import StyledAlbums from '../ui/StyledAlbums';

function Edit() {
  const {
    isLoading,
    data: albums,
    // error,
  } = useQuery({
    queryKey: ['album'],
    queryFn: getAlbums,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <StyledAlbums $variation='edit'>
        {albums.map((album) => (
          <AlbumCardEdit album={album} key={album.id} />
        ))}
      </StyledAlbums>
    </>
  );
}

export default Edit;
