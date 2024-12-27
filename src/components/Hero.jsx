import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-white py-20 h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <img src="/portada_delta.png" alt="Delta Logo" className="mx-auto mb-4 h-60" />
        <h1 className="text-5xl md:text-5xl font-bold text-gray-800">Delta Consultora <br /> Digital</h1>
        <p className="text-gray-500 mt-2 py-10">"LA DIFERENCIA DIGITAL QUE SE NOTA"</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          CONTÁCTANOS
        </button>
      </div>
    
    </section>
  );
};

export default Hero;
