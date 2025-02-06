import Hero from "./features/hero";
import ThemeProvider from "./components/theme-toggle/theme-provider";
function App() {
  return (
    <ThemeProvider>
      <Hero />
    </ThemeProvider>
  );
}

export default App;
