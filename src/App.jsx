import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HubPage from "./pages/HubPage";
import DetailPage from "./pages/DetailPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HubPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}