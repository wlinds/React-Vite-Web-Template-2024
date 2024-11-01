import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TermsPage, PrivacyPage } from './components/Legal';
import PortalLanding from './components/PortalLanding'
import Footer from './components/Footer';

const App = () => {
    return (
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
    );
  };
  
  export default App;