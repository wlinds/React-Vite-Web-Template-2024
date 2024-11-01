import React from 'react';
import { Heart, Twitter, Github, MessageSquare } from 'lucide-react';

const Footer = () => {
return (
    <footer className="border-t border-gray-800 mt-12 lg:mt-20">
    <div className="max-w-6xl mx-auto px-4 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
            <img src="pinecone_beta.png" className="w-4 h-4"/>
            <span>© 2024 Pinecone Portal</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center text-sm text-gray-400">
            <Heart className="w-4 h-4 text-red-400 mr-2" />
            <span>asdffööö</span>
            </div>
            <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
            </a>
            </div>
        </div>
        </div>
    </div>
    </footer>
);
};
  

export default Footer;