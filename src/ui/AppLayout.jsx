import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0 10rem 0;
  /* height: 90lvh; */
`;

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default AppLayout;
