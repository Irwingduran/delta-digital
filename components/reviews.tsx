"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote, Award, Filter, Grid, List } from 'lucide-react'

type Testimonial = {
  id: number;
  img: string;
  quote: string;
  name: string;
  role: string;
  category: string;
  rating: number;
  date: string;
  results: string;
  verified: boolean;
  avatar: string;
  location: string;
};

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewMode, setViewMode] = useState("carousel") // 'carousel' o 'grid'
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([])

  const testimonials: Testimonial[] = [
    {
      id: 1,
      img: "/images/clients/findoctor.png",
      quote:
        "Excelente servicio, nos han ayudado a publicitar a más de 50 doctores generándoles más consultas y tráfico hacia su tarjeta digital. Totalmente recomendable.",
      name: "Findoctor",
      role: "Directorio Médico",
      category: "Google Ads",
      rating: 5,
      date: "Hace 2 meses",
      results: "50+ doctores publicitados",
      verified: true,
      avatar: "/avatars/findoctor-avatar.jpg",
      location: "Ciudad de México",
    },
    {
      id: 2,
      img: "/images/clients/nextor-web.png",
      quote:
        "Muy buen servicio, nos han ayudado a posicionar la marca y obtener leads calificados a bajo costo. Además, están muy al pendiente de las campañas.",
      name: "Nextor Móvil",
      role: "Telefonía Móvil",
      category: "SEO",
      rating: 5,
      date: "Hace 1 mes",
      results: "300% aumento en leads",
      verified: true,
      avatar: "/avatars/nextor-avatar.jpg",
      location: "Guadalajara",
    },
    {
      id: 3,
      img: "/images/clients/ccbh-web.png",
      quote:
        "Muy buen servicio, explican todo muy bien y las veces que sean necesarias. Nos ayudaron a tener mayor presencia en Google.",
      name: "CCBH",
      role: "Consumibles de impresoras",
      category: "Google Ads",
      rating: 5,
      date: "Hace 3 semanas",
      results: "200% más visibilidad",
      verified: true,
      avatar: "/avatars/ccbh-avatar.jpg",
      location: "Monterrey",
    },
    {
      id: 4,
      img: "/images/clients/arte41-web.png",
      quote:
        "Muy buena atención y personalizada. Nos ayudaron a posicionarnos en Google Mi Negocio con un bajo presupuesto.",
      name: "Arte41",
      role: "Estudio de Arte",
      category: "SEO Local",
      rating: 5,
      date: "Hace 1 mes",
      results: "Top 3 en búsquedas locales",
      verified: true,
      avatar: "/avatars/arte41-avatar.jpg",
      location: "Puebla",
    },
    {
      id: 5,
      img: "/images/clients/sabai-web.png",
      quote:
        "Nos ayudaron a llegar a más público, generando mucho más movimiento en el SPA. Muy recomendables.",
      name: "Sabai Center",
      role: "Skin & Body Spa",
      category: "Google Ads",
      rating: 5,
      date: "Hace 2 semanas",
      results: "85% más reservas",
      verified: true,
      avatar: "/avatars/sabai-avatar.jpg",
      location: "Ciudad de México",
    },
    {
      id: 6,
      img: "/images/clients/golazo-web.png",
      quote:
        "Nos ayudan con presencia en Google y atracción de más clientes, fortaleciendo nuestro sitio web y dependiendo menos de plataformas como Uber Eats o Didi.",
      name: "El Golazo",
      role: "Taquería",
      category: "Desarrollo Web",
      rating: 5,
      date: "Hace 1 semana",
      results: "120% más pedidos directos",
      verified: true,
      avatar: "/avatars/golazo-avatar.jpg",
      location: "Ciudad de México",
    },
  ]

  const categories = ["Todos", "Google Ads", "SEO", "SEO Local", "Desarrollo Web"]


  // Filtrar testimonios por categoría
  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredTestimonials(testimonials)
    } else {
      setFilteredTestimonials(testimonials.filter((testimonial) => testimonial.category === selectedCategory))
    }
    setActiveIndex(0)
  }, [selectedCategory, testimonials])

  // Auto-play del carrusel
  useEffect(() => {
    if (viewMode === "carousel") {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [filteredTestimonials.length, viewMode])

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1))
  }

  const renderStars = (rating: number, size = "w-4 h-4") => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-100 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-yellow-700 font-semibold tracking-wide text-sm">TESTIMONIOS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Descubre por qué confían en nosotros para
            hacer crecer sus negocios
          </motion.p>
        </div>


        {/* Controles y filtros */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          {/* Filtros de categoría */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 max-w-full scrollbar-hide">
            <Filter className="h-4 w-4 text-gray-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cambio de vista */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("carousel")}
              className={`p-2 rounded-md ${
                viewMode === "carousel" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
              }`}
              aria-label="Ver como carrusel"
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
              }`}
              aria-label="Ver como cuadrícula"
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Vista de carrusel */}
        {viewMode === "carousel" && (
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  {filteredTestimonials[activeIndex] && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Logo de la empresa */}
                        <div className="flex-shrink-0">
                          <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gray-100 p-4">
                            <Image
                              src={filteredTestimonials[activeIndex].img || "/placeholder.svg"}
                              alt={filteredTestimonials[activeIndex].name}
                              fill
                              className="object-contain"
                              sizes="128px"
                            />
                          </div>
                        </div>

                        {/* Contenido del testimonio */}
                        <div className="flex-grow text-center lg:text-left">
                          <div className="flex justify-center lg:justify-start mb-4">
                            {renderStars(filteredTestimonials[activeIndex].rating, "w-6 h-6")}
                          </div>

                          <Quote className="w-8 h-8 text-blue-500 mb-4 mx-auto lg:mx-0" />

                          <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                            &quot;{filteredTestimonials[activeIndex].quote}&quot;
                          </p>

                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div>
                              <h4 className="font-bold text-gray-800 text-xl mb-1">
                                {filteredTestimonials[activeIndex].name}
                              </h4>
                              <p className="text-gray-500 mb-2">{filteredTestimonials[activeIndex].role}</p>
                              <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500">
                                <span className="mr-2">{filteredTestimonials[activeIndex].location}</span>
                                <span>•</span>
                                <span className="ml-2">{filteredTestimonials[activeIndex].date}</span>
                              </div>
                            </div>

                            <div className="mt-4 lg:mt-0 lg:text-right">
                              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-2">
                                <Award className="w-4 h-4 mr-1" />
                                Cliente verificado
                              </div>
                              <div className="text-sm text-gray-600">
                                <strong>Resultado:</strong> {filteredTestimonials[activeIndex].results}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles de navegación */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center">
                <span className="text-gray-500 text-sm">
                  {activeIndex + 1} / {filteredTestimonials.length}
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label="Testimonio siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center space-x-2 mt-6">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Vista de cuadrícula */}
        {viewMode === "grid" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* Header con logo y rating */}
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 mr-3">
                      <Image
                        src={testimonial.img || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-contain p-1"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {renderStars(testimonial.rating)}
                        <span className="ml-2 text-xs text-gray-500">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonio */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-4">&quot;{testimonial.quote}&quot;</p>

                  {/* Footer */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{testimonial.role}</span>
                      <div className="flex items-center">
                        <Award className="w-3 h-3 mr-1 text-green-500" />
                        <span>Verificado</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default Reviews
