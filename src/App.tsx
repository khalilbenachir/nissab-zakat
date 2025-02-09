import ThemeProvider from "./components/theme-toggle/theme-provider";
import Hero from "./pages/hero";

function App() {
  return (
    <ThemeProvider>
      <Hero />
    </ThemeProvider>
  );
}

export default App;
