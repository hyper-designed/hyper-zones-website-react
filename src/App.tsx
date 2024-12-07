import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sky } from './components/Sky';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import DownloadPage from './pages/DownloadPage';
import AboutPage from './pages/AboutPage';
import LegalPage from './pages/LegalPage';

export default function App() {
  return (
    <Router>
      <Sky>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy-policy" element={<LegalPage />} />
              <Route path="/terms-and-conditions" element={<LegalPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Sky>
    </Router>
  );
}