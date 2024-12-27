import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-gray-600">
        <p className="text-sm">2025 © Delta Digital.</p>
        <a href="#" className="text-sm hover:underline">
          Aviso de Privacidad
        </a>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
