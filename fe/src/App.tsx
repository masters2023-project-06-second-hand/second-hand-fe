import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from '@styles/DesignSystem';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { Loading } from '@pages/Loading';
import { GlobalModal } from '@components/Modal/GlobalModal';
import router from '@routes/router';

const queryClient = new QueryClient({
  /* options */
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} fallbackElement={<Loading />} />
          <GlobalModal />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
