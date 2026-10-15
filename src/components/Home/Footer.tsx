import React from 'react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'shop' | 'about') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#51647a] text-white pt-16 pb-5">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="text-base font-bold mb-5">Quick Links</h4>
            <ul className="list-none space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate?.('home')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('shop')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer"
                >
                  Shop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('about')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">Track Orders</a></li>
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold mb-5">Legal</h4>
            <ul className="list-none space-y-2">
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">Refund and Return</a></li>
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">Warranty Info</a></li>
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold mb-5">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-[13px] text-[#dcdcdc]">Customer Support center & B2B Control Center</p>
              <p className="text-[13px] text-[#dcdcdc]">3545 Ellicott Mills DR, Ellicott City MD 21043, USA</p>
              <p className="text-[13px] text-[#dcdcdc]">Toll Free: 1-833-785-8085</p>
              <p className="text-[13px] text-[#dcdcdc]">Email: support@geeksafeglobal.com</p>
              <p className="text-[13px] text-[#dcdcdc]">Office Hours: 9 AM to 5 PM (Mon - Fri Only)</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-5 text-center">
          <p className="text-[11px] text-[#b0c4de] mb-4 leading-relaxed">
            Disclaimer: Pixfix digital is an independent service provider for printers and related devices. All brand names, trademarks, and logos used on this site are for reference purposes only and belong to their respective owners.
          </p>
          <p className="text-xs text-[#b0c4de]">
            Copyright &copy; 2026 Pixfix digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
