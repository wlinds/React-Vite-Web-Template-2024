import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TermsPage, PrivacyPage } from './components/Legal';
import PortalLanding from './components/PortalLanding'
import Footer from './components/Footer';

const App = () => {
    return (
      <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PortalLanding />
                  <Footer />
                </>
              }
            />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/policy" element={<PrivacyPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    );
  };
  
  export default App;