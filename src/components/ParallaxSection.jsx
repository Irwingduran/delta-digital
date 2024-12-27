import React from 'react';

const ParallaxSection = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Imagen de fondo con efecto Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/50">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Efecto Parallax Scroll
        </h1>
      </div>
    </div>
  );
};

export default ParallaxSection;
