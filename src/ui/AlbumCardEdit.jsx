import styled from 'styled-components';
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

export default AlbumCard;
