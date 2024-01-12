import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Album from './pages/Album';
import Account from './pages/Account';
import Login from './pages/Login';
import Share from './pages/Share';
import PageNotFound from './pages/PageNotFound';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
// import Header from './ui/header';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='album' />} />
            <Route path='album' element={<Album />} />
            <Route path='account' element={<Account />} />
            <Route path='login' element={<Login />} />
            <Route path='share' element={<Share />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
