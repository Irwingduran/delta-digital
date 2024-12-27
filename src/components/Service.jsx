import React from 'react';

const ServiceCard = ({ title, description, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
    <div className="h-64 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Consultoría Digital",
      description: "Realizamos un estudio completo sobre todos los medios digitales de tu negocio y emitimos un diagnóstico, donde proponemos soluciones para tu negocio.",
      image: "/servicio1.png" // Asegúrate de tener esta imagen en tu proyecto
    },
    {
      title: "Google ADS",
      description: "Nos encargamos de administrar y optimizar tus campañas de Búsqueda, Display y Youtube en Google Ads para que consigas muchos clientes potenciales y ventas.",
      image: "/servicio2.png" // Asegúrate de tener esta imagen en tu proyecto
    },
    {
      title: "Servicios Adicionales",
      description: "Diseño de páginas Web, Videos promocionales y Banners para que tus campañas destaquen y obtengas los mejores resultados.",
      image: "/servicio3.png" // Asegúrate de tener esta imagen en tu proyecto
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="mb-16">
        <h2 className="text-blue-600 text-lg font-semibold mb-2">SERVICIOS</h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;