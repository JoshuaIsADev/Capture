// import styled from 'styled-components';
import StyledAlbums from '../ui/StyledAlbums';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import { FormHeader, Form, FormRow } from '../ui/Form';

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
