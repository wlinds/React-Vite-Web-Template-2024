// Header.jsx
import { useState } from 'react';
import {
  Menu,
  X,
  Languages
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'sv' ? 'en' : 'sv';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="border-b border-gray-800">
      {/* Main Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/icon.png"
                alt="SR Player"
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-semibold text-lg">Player</span>
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 rounded-md flex items-center space-x-2 transition-colors"
          >
            <Languages className="w-4 h-4" />
            <span>{i18n.language === 'sv' ? 'EN' : 'SV'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 px-4 py-2">
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 text-sm text-left hover:bg-gray-800 rounded flex items-center space-x-2 w-full"
          >
            <Languages className="w-4 h-4" />
            <span>{i18n.language === 'sv' ? 'English' : 'Svenska'}</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;