import AlbumTextRow from './AlbumTextRow';
import { SlTrash, SlPencil } from 'react-icons/sl';
import StyledAlbumCard from './StyledAlbumCard';
import Button from './Button';
import styled from 'styled-components';
import Img from './Img';

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.25rem 0.25rem;
  width: 100%;
`;

function AlbumCardEdit({ album }) {
  const { title, photographer, photos } = album;
  console.log(photos.length);

  return (
    <StyledAlbumCard>
      <ImgContainer>
        {<Img src={photos[0]} $variation='edit' />}
        {<Img src={photos[1]} $variation='edit' />}
        {<Img src={photos[2]} $variation='edit' />}
        {<Img src={photos[3]} $variation='edit' />}
        {<Img src={photos[4]} $variation='edit' />}
      </ImgContainer>
      <AlbumTextRow $variation='edit'>
        <h1>
          {title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {photos.length} photos
        </h1>
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
