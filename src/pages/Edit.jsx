import AlbumCardEdit from '../ui/AlbumCardEdit';
import { useQuery } from '@tanstack/react-query';
import { getAlbums } from '../services/apiAlbums';
import Spinner from '../ui/Spinner';
import StyledAlbums from '../ui/StyledAlbums';
import { FormHeader, Form, FormRow } from '../ui/Form';

function Edit() {
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
      <StyledAlbums $variation='edit'>
        <FormHeader>
          <FormRow>
            <h1>Share</h1>
          </FormRow>
        </FormHeader>

        {albums.map((album) => (
          <AlbumCardEdit album={album} key={album.id} />
        ))}
      </StyledAlbums>
    </>
  );
}

export default Edit;
