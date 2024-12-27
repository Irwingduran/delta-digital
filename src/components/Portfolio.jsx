import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Proyecto Innovador',
    description: 'Solución digital avanzada para empresas.',
    image: '/proyecto1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Plataforma de ventas eficiente y rápida.',
    image: '/proyecto2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Aplicación Móvil',
    description: 'Desarrollo de apps intuitivas y funcionales.',
    image: '/proyecto3.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Sistema Empresarial',
    description: 'Optimización de procesos internos.',
    image: '/proyecto4.jpg',
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <section className="py-12 bg-gray-100 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">Nuestro Portafolio</h2>
        <p className="text-gray-400 mb-12">Explora algunos de nuestros proyectos destacados.</p>
        
        {/* Scroll Snap Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-6 scrollbar-hide">
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-center flex-shrink-0 w-80 h-96 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group"
            >
              {/* Imagen de Fondo */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Capa de Información */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-2 text-blue-400 hover:text-blue-300 underline"
                >
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 rounded-lg font-semibold transition-colors"
          >
            Ver Todos los Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
