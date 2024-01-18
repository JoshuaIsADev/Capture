import styled from 'styled-components';
import StyledAlbums from '../ui/StyledAlbums';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

const FormHeader = styled.div`
  max-width: var(--container-width-m);
  width: 100%;
  margin: 0rem 1rem;
  border: 1px solid var(--color-grey-900);
  padding: 2rem 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: var(--container-width-m);
  width: 100%;
  gap: 1rem;
`;

const FormRow = styled.div`
  width: 100%;
`;

function Share() {
  return (
    <>
      <StyledAlbums $variation='share'>
        <FormHeader>
          <FormRow>
            <h1>Share</h1>
          </FormRow>
        </FormHeader>
        <Form>
          <FormRow>
            <label htmlFor='title'></label>
            <Input type='text' id='title' placeholder='Album title'></Input>
          </FormRow>
          <FormRow>
            <label htmlFor='caption'></label>
            <TextArea
              id='caption'
              rows='5'
              placeholder='Enter a caption'
            ></TextArea>
          </FormRow>
          <FormRow>
            <label htmlFor='location'></label>
            <Input type='text' id='location' placeholder='Location'></Input>
          </FormRow>
        </Form>
      </StyledAlbums>
    </>
  );
}

export default Share;
