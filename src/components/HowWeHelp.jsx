import React from 'react';

const HowWeHelp = () => {
  const steps = [
    {
      number: "1",
      color: "bg-blue-500",
      text: "Se realiza un estudio completo sobre todos los medios digitales de tu negocio y emitimos un diagnóstico.",
    },
    {
      number: "2",
      color: "bg-red-500",
      text: "Generamos una propuesta de valor para tu negocio, en donde abordamos tus necesidades y áreas de oportunidad.",
    },
    {
      number: "3",
      color: "bg-yellow-500",
      text: "Configuramos tu campaña de acuerdo a la propuesta y la validamos contigo antes de ponerla en marcha.",
    },
    {
      number: "4",
      color: "bg-green-500",
      text: "Revisión periódica para hacer los ajustes necesarios y podrás consultar nuestra plataforma de informes en línea.",
    },
  ];

  return (
    <div className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        ¿CÓMO TE AYUDAMOS?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center text-white text-lg font-bold rounded-full ${step.color} mb-4`}
            >
              {step.number}
            </div>
            <p className="text-gray-600 text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeHelp;
