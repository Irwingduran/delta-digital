import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Información de Contacto */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-6">CONTÁCTANOS</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="fas fa-whatsapp text-blue-500 text-lg mr-4"></i>
              <span>
                <strong>Whatsapp:</strong> 221-594-5734 / 55-7962-7960
              </span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope text-blue-500 text-lg mr-4"></i>
              <span>
                <strong>Correo:</strong> contacto@delta-digital.com.mx
              </span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone text-blue-500 text-lg mr-4"></i>
              <span>
                <strong>Llámanos:</strong> 221-594-5734 / 55-7962-7960
              </span>
            </li>
          </ul>
        </div>

        {/* Formulario */}
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre :"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Correo :"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="tel"
              placeholder="Teléfono (opcional) :"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Mensaje :"
              rows={4}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
