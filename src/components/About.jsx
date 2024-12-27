import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white" id="nosotros">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Sección de texto */}
        <div>
          <h2 className="text-blue-600 text-lg font-semibold mb-2">NOSOTROS</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Delta Consultora Digital.</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Somos una consultora joven de marketing digital, integrada por gente altamente capacitada y certificada 
            en herramientas de vanguardia y comprometida con sus clientes para generar valor. Somos especialistas 
            en Google Ads y herramientas complementarias, las cuales aunadas a nuestra experiencia harán que su 
            negocio crezca exponencialmente a corto plazo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                <i className="fas fa-home text-blue-500 mr-2"></i> Misión
              </h3>
              <p className="text-gray-600">
                Ayudar a las pequeñas empresas a lograr un posicionamiento óptimo en internet e incrementar sus ventas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                <i className="fas fa-lightbulb text-blue-500 mr-2"></i> Visión
              </h3>
              <p className="text-gray-600">
                Ser una consultora líder en el ramo del marketing digital, comprometidos con nuestros clientes para 
                que obtengan el máximo beneficio y rendimiento de su publicidad en internet.
              </p>
            </div>

            <div className="col-span-2">
              <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                <i className="fas fa-handshake text-blue-500 mr-2"></i> Valores
              </h3>
              <p className="text-gray-600">
                Compromiso, Calidad, Seriedad, Honestidad y Puntualidad.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="relative flex justify-center items-center">
          <div className="absolute top-0 left-0 bg-blue-500 h-12 w-32 rounded-md"></div>
          <img 
            src="/nosotros.png" 
            alt="Delta Consultora Digital" 
            className="rounded-lg shadow-lg w-3/4 lg:w-2/4"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
