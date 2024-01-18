import AlbumTextRow from './AlbumTextRow';
import { SlTrash, SlPencil } from 'react-icons/sl';
import StyledAlbumCard from './StyledAlbumCard';
import Button from './Button';
import styled from 'styled-components';
import Img from './Img';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAlbum } from '../services/apiAlbums';
import toast, { Toaster } from 'react-hot-toast';
import { Form, FormRow } from './Form';
import Input from './Input';

const FormImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 1rem;
  /* flex-wrap: wrap; */
  /* grid-auto-flow: column; */
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

function AlbumCardEdit({ album }) {
  const { id: albumId, title, photographer, photos, location } = album;
  // console.log(photos.length);

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteAlbum(id),
    onSuccess: () => {
      toast.success('Album successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['albums'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <StyledAlbumCard $variation='edit'>
      <Form $variation='albumEdit'>
        <FormImgContainer>
          {photos.map((photo) => (
            <Img src={photo} $variation='edit' key={photo} />
          ))}
        </FormImgContainer>
        <FormRow>
          <label htmlFor='title'></label>
          <Input type='text' id='title' value={title} $variation='edit' />
        </FormRow>
        <FormRow>
          <label htmlFor='location'></label>
          <Input type='text' id='location' value={location} $variation='edit' />
        </FormRow>
        <FormRow>
          <Button
            $variation='edit'
            onClick={() => mutate(albumId)}
            disabled={isDeleting}
          >
            <SlTrash />
          </Button>
          <Button
            $variation='edit'
            onClick={() => mutate(albumId)}
            disabled={isDeleting}
          >
            Reset
          </Button>
          <Button
            $variation='edit'
            onClick={() => mutate(albumId)}
            disabled={isDeleting}
          >
            Save
          </Button>
        </FormRow>
      </Form>
    </StyledAlbumCard>
  );
}

export default AlbumCardEdit;

/* import styled from 'styled-components';
import AlbumTextRow from './AlbumTextRow';
import { SlTrash, SlPencil } from 'react-icons/sl';
import { Img, StyledAlbumCard } from './StyledAlbumCard';
import Button from './Button';

const FormImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

function AlbumCard({ album }) {
  const { title, photos } = album;
  console.log(album);

  return (
    <StyledAlbumCard $variant='edit'>
      <FormImgContainer>
        {<Img src={photos[0]} />}
        {<Img src={photos[1]} />}
        {<Img src={photos[2]} />}
        {<Img src={photos[3]} />}
      </FormImgContainer>
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
