import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortalLanding from './components/PortalLanding'
import Download from './components/Download';
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
            <Route
              path="/download"
              element={
                <>
                  <Download />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    );
  };

  export default App;