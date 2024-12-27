import React, { useState, useEffect } from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/Logodel2.png" alt="Delta Consultora Digital" className="h-20 w-auto" />
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                Google Ads
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                Paquetes
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;