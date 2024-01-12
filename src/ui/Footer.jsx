import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: Flex;
  position: fixed;
  bottom: 0;
  background-color: var(--color-grey-0);
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
