import { CssVarsProvider } from "@mui/joy/styles";

import { Home } from "./pages";

function App() {
  return (
    <CssVarsProvider>
      <Home />
    </CssVarsProvider>
  );
}

export default App;
