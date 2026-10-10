import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-5 bg-black/20 backdrop-blur-[2px]">
      <div className="w-full px-5 md:px-8 mx-auto flex justify-center md:justify-end items-center">
        {/* LOGO */}
        {/* <div className="flex items-center text-white relative cursor-pointer">
          <span className="font-extrabold text-[22px] tracking-[0.2em] uppercase relative z-10">
            WEB PLANETS
          </span>
          <Sparkles size={18} className="absolute -top-2.5 -right-5 text-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[160%] border-[1.5px] border-white/50 rounded-[100%] -rotate-6"></div>
        </div> */}
        
        {/* NAV */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end list-none gap-4 md:gap-8 items-center m-0 p-0 w-full">
            <li><a href="#" className="text-white text-[13px] md:text-[15px] font-light uppercase tracking-wider hover:opacity-80">HOME</a></li>
            <li><a href="#" className="text-white text-[13px] md:text-[15px] font-light uppercase tracking-wider hover:opacity-80">ABOUT US</a></li>
            <li>
              <a href="#" className="text-white text-[13px] md:text-[15px] font-light uppercase tracking-wider hover:opacity-80 flex items-center gap-1.5">
                SHOP 
                <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li><a href="#" className="text-white text-[13px] md:text-[15px] font-light uppercase tracking-wider hover:opacity-80">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
