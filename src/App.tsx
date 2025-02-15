import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ThemeProvider from "./components/theme-toggle/theme-provider";
import { useUpdateSiteTitle } from "./hooks/use-update-site-title";
import Hero from "./pages/hero";

const queryClient = new QueryClient();

function App() {
  useUpdateSiteTitle();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
