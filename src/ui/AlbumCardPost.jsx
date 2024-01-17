import AlbumTextRow from './AlbumTextRow';
import { SlHeart } from 'react-icons/sl';
import StyledAlbumCard from './StyledAlbumCard';
import Img from './Img';
import styled from 'styled-components';

const AlbumInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 350px;
  gap: 1rem;
  padding: 0 1rem 8rem;
`;

function AlbumCardPost({ album }) {
  const { title, photographer, photos, paragraph } = album;
  // console.log(photos.length);

  return (
    <>
      <AlbumInfoRow>
        <h1>{title}</h1>
        <h2>{photographer}</h2>
        <SlHeart />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>{paragraph}</p>
      </AlbumInfoRow>
      {photos.map((photo) => (
        <Img src={photo} $variation='post' alt={photographer} key={photo} />
      ))}
    </>
  );
}

export default AlbumCardPost;
