import React from 'react';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'shop') => void;
  currentPage?: 'home' | 'shop';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage = 'home' }) => {
  const isHome = currentPage === 'home';
  const textColor = isHome ? 'text-white' : 'text-gray-800';

  return (
    <header
      className={`w-full z-10 py-5 transition-colors ${
        isHome
          ? 'absolute top-0 left-0 bg-black/20 backdrop-blur-[2px]'
          : 'relative bg-transparent'
      }`}
    >
      <div className="w-full px-5 md:px-8 mx-auto flex justify-center md:justify-end items-center">
        {/* NAV */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end list-none gap-4 md:gap-8 items-center m-0 p-0 w-full">
            <li>
              <button 
                onClick={() => onNavigate?.('home')}
                className={`${textColor} text-[13px] md:text-[15px] font-light uppercase tracking-wider hover:opacity-80 cursor-pointer bg-transparent border-none p-0`}
              >
                HOME
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate?.('home')}
                className={`${textColor} text-[13px] md:text-[15px] font-light uppercase tracking-wider hover:opacity-80 cursor-pointer bg-transparent border-none p-0`}
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate?.('shop')}
                className={`${textColor} text-[13px] md:text-[15px] font-light uppercase tracking-wider hover:opacity-80 flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0`}
              >
                SHOP 
                <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate?.('home')}
                className={`${textColor} text-[13px] md:text-[15px] font-light uppercase tracking-wider hover:opacity-80 cursor-pointer bg-transparent border-none p-0`}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
