import AlbumTextRow from './AlbumTextRow';
import { SlHeart } from 'react-icons/sl';
import { Img, StyledAlbumCard } from './StyledAlbumCard';

function AlbumCard({ album }) {
  const { title, photographer, photos } = album;
  console.log(photos.length);

  return (
    <StyledAlbumCard>
      {<Img src={photos[0]} $variation='albums' />}
      <AlbumTextRow>
        <h1>
          {title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {photos.length} photos
        </h1>
        <h2>{photographer}</h2>
        <SlHeart />
      </AlbumTextRow>
    </StyledAlbumCard>
  );
}

export default AlbumCard;
