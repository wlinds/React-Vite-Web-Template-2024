// PortalLanding.jsx
import React from 'react';
import { Zap } from 'lucide-react';
import Header from './Header';
<ChartColumnDecreasing />
import { ChartColumnDecreasing, UserCheck, AudioLines, Github, Globe } from 'lucide-react';

const PortalLanding = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
  
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="text-lime-400">PineconePortal</span>
                <br />
                Next Generation
                <br />
                Audio Distribution
              </h1>
              
              <div className="inline-block bg-gray-800/50 px-4 py-2 rounded-md">
                A modern audio distribution service
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-lime-400 text-gray-900 px-6 py-2 rounded-full font-medium">
                  Get Started
                </button>
                <button className="bg-gray-800 px-6 py-2 rounded-full font-medium">
                  Features
                </button>
                <button className="bg-gray-800 px-6 py-2 rounded-full font-medium">
                  Why Pinecone?
                </button>
                <button className="bg-gray-800 px-6 py-2 rounded-full font-medium">
                  View on GitHub
                </button>
              </div>
          </div>
            <div className="flex justify-center lg:justify-end">
              <img src="pinecone_beta.png" className="w-48 h-48 lg:w-64 lg:h-64" alt="Pinecone Beta" />
            </div>
            </div>
            
  
          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-20">
            {[
              {
                icon: <AudioLines className="w-8 h-8 text-purple-400" />,
                title: "Release on all platforms",
                description: "Find the best platforms your audience."
              },
              {
                icon: <ChartColumnDecreasing className="w-8 h-8 rounded flex items-center justify-center" />,
                title: "Measure your audience",
                description: "Use the dashboard to view plots and important listener metrics."
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "Keep up with new trends",
                description: "Follow genre specific trends in social media."
              },
              {
                icon: <UserCheck className="w-8 h-8 flex items-center justify-center"/>,
                title: "Manage your artists",
                description: "Schedule releases, ad campaigns and plan tours."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                {feature.icon}
                <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Featured Artist Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Artist</h2>
            <p className="text-gray-400">Spotlight on creators using Pinecone Portal</p>
          </div>
  
          <div className="max-w-2xl mx-auto">
            {/* Single Featured Artist Card */}
            <div className="bg-gray-800/50 rounded-lg overflow-hidden group hover:bg-gray-800 transition-all">
              <div className="flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-4 sm:gap-8">
                {/* Image Container */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                  <img 
                    src="lindstedt-leaf-logo.png" 
                    alt="Lindstedt"
                    className="w-full h-full object-contain invert opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                
                {/* Artist Info */}
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">Lindstedt</h3>
                  <div className="flex flex-col gap-2 text-gray-400 mb-4">
                    <span className="text-lg">Electronic</span>
                    <span>10.2K followers</span>
                  </div>
                  <button className="px-6 py-2 bg-lime-400 text-gray-900 rounded-full font-medium hover:bg-lime-500 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
  
            {/* More Artists Button */}
            <div className="text-center mt-8">
              <button className="bg-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
                Discover More Artists
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PortalLanding;