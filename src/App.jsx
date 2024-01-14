import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Albums from './pages/Albums';
import Account from './pages/Account';
import Login from './pages/Login';
import Share from './pages/Share';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='albums' />} />
            <Route path='albums' element={<Albums />} />
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
