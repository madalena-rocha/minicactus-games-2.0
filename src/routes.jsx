import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
