import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ConsentProvider } from "@/components/feature/ConsentProvider";
import CookieBanner from "@/components/feature/CookieBanner";
import CookiePreferences from "@/components/feature/CookiePreferences";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ConsentProvider>
          <AppRoutes />
          <CookieBanner />
          <CookiePreferences />
        </ConsentProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;