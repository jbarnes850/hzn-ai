import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'Near AI', href: 'https://near.org/ai' },
    { name: 'Platform', href: 'https://near.org/blockchain' },
    { name: 'Develop', href: 'https://dev.near.org/' },
    { name: 'Discover', href: 'https://nearcatalog.xyz/' },
    { name: 'Ecosystem', href: 'https://near.org/ecosystem' },
    { name: 'About', href: 'https://dev.near.org/learn' },
  ];

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 py-4 md:py-8 bg-black">
      <div className="max-w-[1421px] mx-auto flex justify-between items-center">
        <div className="w-[231px] h-[93px] relative">
          <Image src="/images/logo/AI + HZN Logo.svg" alt="AI + HZN Logo" layout="fill" objectFit="contain" />
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-[#9797FF] text-xs font-medium font-['FK Grotesk'] hover:text-white transition-colors"
                  style={{ left: `${987 + index * 71}px` }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
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
                <Link 
                  href={item.href}
                  className="text-[#9797FF] text-xs font-medium font-['FK Grotesk'] hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;