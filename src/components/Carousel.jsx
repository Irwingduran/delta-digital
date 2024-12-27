import { useState } from "react";

const testimonials = [
  {
    id: 1,
    img: "images/clients/findoctor.png",
    quote:
      "Excelente servicio, nos han ayudado a publicitar a más de 50 doctores generándoles más consultas y tráfico hacia su tarjeta digital. Totalmente recomendable.",
    name: "Findoctor",
    role: "Directorio Médico",
  },
  {
    id: 2,
    img: "images/clients/nextor-web.png",
    quote:
      "Muy buen servicio, nos han ayudado a posicionar la marca y obtener leads calificados a bajo costo. Además, están muy al pendiente de las campañas.",
    name: "Nextor Móvil",
    role: "Telefonía Móvil",
  },
  {
    id: 3,
    img: "images/clients/ccbh-web.png",
    quote:
      "Muy buen servicio, explican todo muy bien y las veces que sean necesarias. Nos ayudaron a tener mayor presencia en Google.",
    name: "CCBH",
    role: "Consumibles de impresoras",
  },
  {
    id: 4,
    img: "images/clients/arte41-web.png",
    quote:
      "Muy buena atención y personalizada. Nos ayudaron a posicionarnos en Google Mi Negocio con un bajo presupuesto.",
    name: "Arte41",
    role: "Estudio de Arte",
  },
  {
    id: 5,
    img: "images/clients/sabai-web.png",
    quote:
      "Nos ayudaron a llegar a más público, generando mucho más movimiento en el SPA. Muy recomendables.",
    name: "Sabai Center",
    role: "Skin & Body Spa",
  },
  {
    id: 6,
    img: "images/clients/golazo-web.png",
    quote:
      "Nos ayudan con presencia en Google y atracción de más clientes, fortaleciendo nuestro sitio web y dependiendo menos de plataformas como Uber Eats o Didi.",
    name: "El Golazo",
    role: "Taquería",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h5 className="text-center text-2xl font-bold text-gray-700 mb-10">
          Ellos confían en nosotros
        </h5>
        <div className="relative">
          {/* Carousel */}
          <div className="flex overflow-hidden items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-full transition-transform duration-700 ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <h6 className="font-bold text-gray-800">{testimonial.name}</h6>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-3 shadow-md"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-3 shadow-md"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
