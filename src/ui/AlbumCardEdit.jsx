import AlbumTextRow from './AlbumTextRow';
import { SlTrash, SlPencil } from 'react-icons/sl';
import StyledAlbumCard from './StyledAlbumCard';
import Button from './Button';
import styled from 'styled-components';
import Img from './Img';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAlbum } from '../services/apiAlbums';

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  /* flex-wrap: wrap; */
  width: 100%;
`;

function AlbumCardEdit({ album }) {
  const { id: albumId, title, photographer, photos } = album;
  // console.log(photos.length);

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteAlbum(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['album'],
      });
    },
  });

  return (
    <StyledAlbumCard>
      <ImgContainer>
        {photos.map((photo) => (
          <Img src={photo} $variation='edit' key={photo.id} />
        ))}
      </ImgContainer>
      <AlbumTextRow $variation='edit'>
        <h1>
          {title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {photos.length} photos
        </h1>
        <Button $variation='edit'>
          <SlPencil />
        </Button>
        <Button
          $variation='edit'
          onClick={() => mutate(albumId)}
          disabled={isDeleting}
        >
          <SlTrash />
        </Button>
      </AlbumTextRow>
    </StyledAlbumCard>
  );
}

export default AlbumCardEdit;

/* import styled from 'styled-components';
import AlbumTextRow from './AlbumTextRow';
import { SlTrash, SlPencil } from 'react-icons/sl';
import { Img, StyledAlbumCard } from './StyledAlbumCard';
import Button from './Button';

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

function AlbumCard({ album }) {
  const { title, photos } = album;
  console.log(album);

  return (
    <StyledAlbumCard $variant='edit'>
      <ImgContainer>
        {<Img src={photos[0]} />}
        {<Img src={photos[1]} />}
        {<Img src={photos[2]} />}
        {<Img src={photos[3]} />}
      </ImgContainer>
      <AlbumTextRow $variation='edit'>
        <h1>{title}</h1>
        <Button $variation='edit'>
          <SlPencil />
        </Button>
        <Button $variation='edit'>
          <SlTrash />
        </Button>
      </AlbumTextRow>
    </StyledAlbumCard>
  );
}

export default AlbumCard; */
