import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Albums from './pages/Albums';
import Account from './pages/Account';
import Posts from './pages/Posts';
import Login from './pages/Login';
import Share from './pages/Share';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='albums' />} />
            <Route path='albums' element={<Albums />} />
            <Route path='posts' element={<Posts />} />
            <Route path='login' element={<Login />} />
            <Route path='share' element={<Share />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
