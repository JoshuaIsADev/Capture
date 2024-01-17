import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import Albums from './pages/Albums';
import Account from './pages/Account';
import Post from './pages/Post';
import Login from './pages/Login';
import Share from './pages/Share';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import Edit from './pages/Edit';

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
            <Route path='post' element={<Post />} />
            <Route path='edit' element={<Edit />} />
            <Route path='login' element={<Login />} />
            <Route path='share' element={<Share />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '1rem' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '1rem',
            maxWidth: '500px',
            padding: '3rem 4rem',
            borderRadius: '0',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-900)',
            textTransform: 'uppercase',
            letterSpacing: '.1rem',
            fontWeight: '300',
            boxShadow: 'none',
            border: '1px solid #000',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
