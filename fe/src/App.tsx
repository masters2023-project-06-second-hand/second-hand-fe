import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from '@styles/DesignSystem';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient({
  /* options */
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}></ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
