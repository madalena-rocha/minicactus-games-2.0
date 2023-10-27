import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./pages/App";
import { News } from "./pages/News";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<News />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
