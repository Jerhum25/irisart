import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import "./index.css";
import Accueil from "./pages/Accueil/Accueil";
import GeneralConditionsOfSale from "./pages/GeneralConditionsOfSale/GeneralConditionsOfSale";
import LegalNotices from "./pages/LegalNotices/LegalNotices";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Page404 from "./pages/Page404/Page404";
import Contact from "./components/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LegalNotices" element={<LegalNotices />} />
          <Route
            path="/GeneralConditionsOfSale"
            element={<GeneralConditionsOfSale />}
          />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Page404" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
