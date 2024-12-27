import React from 'react';

const PricingPlans = () => {
  const plans = [
    {
      title: "INDIVIDUAL",
      price: "$899 + IVA",
      initial: "* Primer mes $999 + IVA (Configuración inicial)",
      details: [
        "1 Campaña (búsqueda, display y youtube**).",
        "Estudio de palabras clave.",
        "Dos grupos de anuncios y un anuncio por grupo.",
        "Configuración inicial de la campaña.",
        "Seguimiento de acciones (llamadas, WhatsApp, Conversiones, etc.).",
        "Dashboard online de informes.",
        "Configuración de Google Analytics.",
        "Administración y optimización periódica de las campañas.",
        "Revisión mensual con cliente.",
        "*No incluye inversión publicitaria.",
      ],
    },
    {
      title: "3-PACK",
      price: "$1,899 + IVA",
      initial: "* Primer mes $2,699 + IVA (Configuración inicial)",
      details: [
        "3 Campañas (búsqueda, display y youtube**).",
        "Estudio de palabras clave.",
        "Seis grupos de anuncios y un anuncio por grupo.",
        "Configuración inicial de las campañas.",
        "Seguimiento de acciones (llamadas, WhatsApp, Conversiones, etc.).",
        "Dashboard online de informes.",
        "Configuración de Google Analytics.",
        "Administración y optimización periódica de las campañas.",
        "Revisión mensual con cliente.",
        "*No incluye inversión publicitaria.",
      ],
    },
    {
      title: "EMPRESARIAL",
      price: "Cotizamos en base a tus necesidades",
      initial: "* Incluye Configuración inicial",
      details: [
        "# Campañas requeridas de acuerdo a tus necesidades.",
        "Estudio de palabras clave.",
        "Configuración inicial de las campañas.",
        "Seguimiento de acciones (llamadas, WhatsApp, Conversiones, etc.).",
        "Un ejecutivo dedicado.",
        "Dashboard Premium de informes.",
        "Configuración de Google Analytics.",
        "Administración y optimización periódica de las campañas.",
        "Revisión semanal con cliente.",
        "*No incluye inversión publicitaria.",
      ],
    },
    {
      title: "LANDING PAGE",
      price: "Cotizamos en base a tus necesidades",
      initial: "(Página Web)",
      details: [
        "4 Secciones (Inicio, Nosotros, Galería y Contacto).",
        "*Sección adicional se cotiza por separado.",
        "Certificado SSL (Página Segura).",
        "Enlace a redes sociales (Facebook, Instagram, etc.).",
        "Botón de contacto de WhatsApp.",
        "Formulario enlazado a correo electrónico.",
        "Diseño Responsivo (adaptable a dispositivos móviles).",
        "Optimización de imágenes.",
        "Actualización de información sin costo durante 1 año.",
        "*Host y Dominio (se cotizan por separado).",
      ],
    },
  ];

  return (
    <div className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">PAQUETES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">{plan.title}</h3>
              <p className="text-sm text-gray-500 text-center mb-4">{plan.initial}</p>
              <p className="text-2xl font-bold text-blue-600 text-center mb-6">{plan.price}</p>
              <ul className="text-sm text-gray-600 space-y-2">
                {plan.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              CONTRATAR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
