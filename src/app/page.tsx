'use client'; // This is necessary for using hooks in Next.js 13+

import { useState } from 'react';
import Header from './components/header';
import LandingPage from './components/landingpage';
import WhyHZN from './components/whyhzn';
import ProgramDetails from './components/programdetails';
import GetConnected from './components/getconnected';
import ErrorBoundary from './components/errorboundary';

export default function Home() {
  const [activeTab, setActiveTab] = useState('JOIN HZN');

  const renderContent = () => {
    switch(activeTab) {
      case 'JOIN HZN':
        return <LandingPage />;
      case 'WHY HZN?':
        return <WhyHZN />;
      case 'PROGRAM DETAILS':
        return <ProgramDetails />;
      case 'GET CONNECTED':
        return <GetConnected />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <ErrorBoundary>
      <main className="w-full min-h-screen bg-black text-white">
        <Header />
        <div className="flex space-x-4 mb-8 p-8">
          {['JOIN HZN', 'WHY HZN?', 'PROGRAM DETAILS', 'GET CONNECTED'].map((item) => (
            <button 
              key={item} 
              className={`px-6 py-2 rounded-full text-sm ${
                item === activeTab ? 'bg-black text-[#9696FE] border border-[#9696FE]' : 'bg-[#9696FE] text-black'
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {renderContent()}
      </main>
    </ErrorBoundary>
  );
}