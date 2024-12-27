import React from 'react';
import { Globe, ArrowDown, MousePointer, Target, LineChart, Monitor } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6">
    <div className="mb-4">
      <Icon className="w-8 h-8 text-gray-400" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyGoogleAds = () => {
  const features = [
    {
      icon: Globe,
      title: "Amplia cobertura",
      description: "Amplia Cobertura. Llegas tan lejos como quieras rápidamente"
    },
    {
      icon: ArrowDown,
      title: "Costo más bajo",
      description: "Costo mucho más bajo en comparación con el marketing tradicional."
    },
    {
      icon: MousePointer,
      title: "Alta interacción",
      description: "Alta probabilidad de aparecer cuando están buscando tu producto o servicio."
    },
    {
      icon: Target,
      title: "Orienta tus anuncios",
      description: "Orientas tus anuncios por ubicación, dispositivos, edad, sexo e intereses."
    },
    {
      icon: LineChart,
      title: "Controla tu presupuesto",
      description: "Controlas perfectamente tu presupuesto y retorno de la inversión."
    },
    {
      icon: Monitor,
      title: "Aparece en miles de sitios",
      description: "Puedes aparecer en miles de sitios web de socios de búsqueda de Google."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-600">
            ¿PORQUÉ ANUNCIARME EN GOOGLE ADS?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>

        {/* Texto destacado */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-xl text-gray-700">
            <span className="font-bold">Google</span> procesa aproximadamente{" "}
            <span className="font-bold">5,600 millones de búsquedas por día</span> y 
            tiene más del <span className="font-bold">92% del mercado</span> de buscadores.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGoogleAds;