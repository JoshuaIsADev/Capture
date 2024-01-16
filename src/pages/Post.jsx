import { useQuery } from '@tanstack/react-query';
import { getAlbums } from '../services/apiAlbums';
import Spinner from '../ui/Spinner';
import StyledAlbums from '../ui/StyledAlbums';
import AlbumCardPost from '../ui/AlbumCardPost';

function Post() {
  const {
    isLoading,
    data: albums,
    error,
  } = useQuery({
    queryKey: ['album'],
    queryFn: getAlbums,
  });

  console.log(albums, error, isLoading);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <StyledAlbums>
        <AlbumCardPost album={albums[0]} key={albums[0].id} />
      </StyledAlbums>
    </>
  );
}

export default Post;
