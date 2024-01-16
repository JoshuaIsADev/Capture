import AlbumTextRow from './AlbumTextRow';
import { SlHeart } from 'react-icons/sl';
import StyledAlbumCard from './StyledAlbumCard';
import Img from './Img';
import styled from 'styled-components';

const AlbumInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  min-width: 500px;
  max-width: 500px;
  gap: 1rem;
  padding: 0 10rem 1rem 0;
`;

const AlbumCommentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: 100%;
  min-width: 500px;
  gap: 3rem;
  padding: 0 1rem 1rem 0;
`;

const AlbumCommentRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 1rem;
`;

function AlbumCardPost({ album }) {
  const { title, photographer, photos, paragraph } = album;
  // console.log(photos.length);

  return (
    <>
      <AlbumInfoColumn>
        {/* <AlbumTextRow> */}
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
        {/* </AlbumTextRow> */}
      </AlbumInfoColumn>
      {photos.map((photo) => (
        <StyledAlbumCard $variation='post' key={photo.id}>
          <Img src={photo} $variation='post' />
        </StyledAlbumCard>
      ))}
      {/* <AlbumCommentColumn>
        <h1>Comments</h1>
        <br />
        <br />
        <AlbumCommentRow>
          <h2>{photographer}</h2>
          <p>{paragraph}</p>
        </AlbumCommentRow>
      </AlbumCommentColumn> */}
      {/* <StyledAlbumCard $variation='post'>
        {<Img src={photos[0]} $variation='post' />}
      </StyledAlbumCard>
      <StyledAlbumCard $variation='post'>
        {<Img src={photos[1]} $variation='post' />}
      </StyledAlbumCard> */}
    </>
  );
}

export default AlbumCardPost;
