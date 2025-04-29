import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global-styles";
import Router from "./routes";
import { Toaster } from "react-hot-toast";
import { theme } from "./assets/styles/theme";
import { toastConfig } from "./config/toast-config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toaster position="top-center" toastOptions={{ ...toastConfig }} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
