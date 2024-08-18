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
      case 'PROGRAM DETAILS':
        return <ProgramDetails />;
      case 'WHY HZN?':
        return <WhyHZN />;
      case 'GET CONNECTED':
        return <GetConnected />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <ErrorBoundary>
      <main className="w-full min-h-screen bg-black text-white">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </ErrorBoundary>
  );
}