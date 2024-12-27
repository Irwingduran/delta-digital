import React from 'react';

const features = [
  {
    id: '01',
    title: 'Certificación Google Ads',
    description: 'Nuestro personal, está altamente capacitado y cuenta con las certificaciones de Google para hacer crecer tu negocio.',
    image: '/google_ads2.png',
  },
  {
    id: '02',
    title: 'Expertos en Google Ads',
    description: 'Configuramos correctamente tus campañas para que funcionen y atraemos clientes potenciales a un bajo costo.',
    image: '/google_ads.png',
  },
  {
    id: '03',
    title: 'Experiencia',
    description: 'Contamos con amplia experiencia en diferentes sectores. Adecuamos tus anuncios de acuerdo a tu sector y tus objetivos.',
    image: '/google_ads3.png',
  },
  {
    id: '04',
    title: 'Acompañamiento',
    description: 'No te dejamos solo, te acompañamos durante todo el proceso para maximizar el rendimiento de tus campañas.',
    image: '/acompanamiento.png',
  },
];

const GoogleAds = () => {
  return (
    <section className="py-16 bg-white text-center" id="google-ads">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-blue-600 text-lg font-semibold mb-2">GOOGLE ADS</h2>
        <p className="text-gray-700 mb-10">¿Cómo podemos ayudarte en tus campañas?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Imagen con efecto flotante */}
              <div className="h-32 w-32 flex items-center justify-center mb-4 animate-float">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{feature.id}.</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
              <div className="w-8 h-1 bg-blue-600 mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleAds;
