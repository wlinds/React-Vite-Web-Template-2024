// Header.jsx
import React, { useState } from 'react';
import { 
  Search, 
  Github, 
  Moon, 
  Twitter, 
  MessageSquare,
  Menu,
  X
} from 'lucide-react';
import { AuthButton } from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800">
      {/* Main Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src="pinecone_beta.png" className="w-5 h-5" />
            <a href="/"><span className="ml-2 font-semibold">PineconePortal</span></a>
          </div>
          <div className="hidden md:flex items-center px-3 py-1 bg-gray-800 rounded-md">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none ml-2 text-sm w-32 lg:w-auto"
            />
            <span className="text-xs text-gray-500 ml-2">⌘K</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="space-x-2">
            <button className="px-3 py-1 text-sm">Guide</button>
            <button className="px-3 py-1 text-sm">API</button>
            <button className="px-3 py-1 text-sm hidden lg:inline">Config</button>
            <button className="px-3 py-1 text-sm hidden lg:inline">Browser Mode</button>
            <button className="px-3 py-1 text-sm hidden lg:inline">Resources</button>
            <button className="px-3 py-1 text-sm">v2.1.4</button>
          </div>
            <AuthButton />
          <div className="flex items-center space-x-2">
            <Moon className="w-5 h-5" />
            <Twitter className="w-5 h-5 hidden sm:block" />
            <MessageSquare className="w-5 h-5 hidden sm:block" />
            <Github className="w-5 h-5" />
          </div>
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
          <div className="flex items-center px-3 py-1 bg-gray-800 rounded-md mb-4">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none ml-2 text-sm w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <button className="px-3 py-2 text-sm text-left hover:bg-gray-800 rounded">Guide</button>
            <button className="px-3 py-2 text-sm text-left hover:bg-gray-800 rounded">API</button>
            <button className="px-3 py-2 text-sm text-left hover:bg-gray-800 rounded">Config</button>
            <button className="px-3 py-2 text-sm text-left hover:bg-gray-800 rounded">Browser Mode</button>
            <button className="px-3 py-2 text-sm text-left hover:bg-gray-800 rounded">Resources</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;