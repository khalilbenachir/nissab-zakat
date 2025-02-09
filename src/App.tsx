import ThemeProvider from "./components/theme-toggle/theme-provider";
import Hero from "./pages/hero";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
