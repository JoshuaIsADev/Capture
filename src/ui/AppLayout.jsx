import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  position: absolute;
  top: 9rem;
  width: 100%;
  max-width: var(--container-width);
  transform: translateX(-50%);
  left: 50%;
  padding: 0 3rem;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
