"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: 'JOIN HZN' },
    { name: 'PROGRAM DETAILS' },
    { name: 'WHY HZN?' },
    { name: 'GET CONNECTED' },
  ];

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 py-4 md:py-8 bg-black">
      <div className="max-w-[1421px] mx-auto flex justify-between items-center">
        <div className="w-[150px] h-[60px] md:w-[231px] md:h-[93px] relative">
          <Image 
            src="/images/logo/ai-hzn-logo.svg" 
            alt="AI + HZN Logo" 
            width={231} 
            height={93} 
            priority
          />
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  className={`px-4 py-2 rounded-full text-sm ${
                    item.name === activeTab ? 'bg-black text-[#9696FE] border border-[#9696FE]' : 'bg-[#9696FE] text-black'
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden text-[#9797FF]"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  className={`w-full px-4 py-2 rounded-full text-sm ${
                    item.name === activeTab ? 'bg-black text-[#9696FE] border border-[#9696FE]' : 'bg-[#9696FE] text-black'
                  }`}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;