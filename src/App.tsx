import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global-styles";
import Router from "./routes";
import { Toaster } from "react-hot-toast";
import { theme } from "./assets/styles/theme";
import { toastConfig } from "./config/toast-config";
import { PibProvider } from "./context/pib-context";

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Configura temas e variáveis CSS */}
      <PibProvider> {/* Contexto com os dados do IBGE e Banco Central */}
        <GlobalStyles /> {/* Reset CSS e estilos globais */}
        <Toaster                       
          position="top-center" 
          toastOptions={{ ...toastConfig }} 
        /> {/* Configuração centralizada de notificações */}
        <Router />
      </PibProvider>
    </ThemeProvider>
  );
}

export default App;