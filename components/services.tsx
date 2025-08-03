"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Code, BarChart3, ArrowRight, CheckCircle, Globe, Zap, Users, TrendingUp } from "lucide-react"

const Services = () => {

  const services = [
    {
        id: 1,
        title: "Desarrollo Web",
        shortDescription: "Sitios web modernos y funcionales",
        description:
          "Creamos sitios web profesionales, responsivos y optimizados para SEO que no solo se ven increíbles, sino que también convierten visitantes en clientes y mejoran tu presencia digital.",
        image: "/service4.jpg",
        icon: <Code className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500",
        features: [
          "Diseño responsive y moderno",
          "Optimización SEO integrada",
          "Velocidad de carga optimizada",
          "Integración con Google Analytics",
          "Formularios de contacto avanzados",
        ],
        benefits: ["Mayor credibilidad", "Mejor experiencia de usuario", "Más conversiones"],
    },
    {
      id: 2,
      title: "Consultoría Digital",
      shortDescription: "Análisis completo de tu presencia digital",
      description:
        "Realizamos un estudio exhaustivo de todos los medios digitales de tu negocio y emitimos un diagnóstico detallado, donde proponemos soluciones estratégicas para maximizar tu presencia online.",
      image: "/servicio1.png",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Auditoría completa de presencia digital",
        "Análisis de competencia",
        "Estrategia de posicionamiento",
        "Plan de acción personalizado",
        "Métricas y KPIs definidos",
      ],
      benefits: ["Visión clara del mercado", "Estrategia optimizada", "ROI mejorado"],
    },
    {
      id: 3,
      title: "Google Ads",
      shortDescription: "Campañas publicitarias que convierten",
      description:
        "Nos encargamos de administrar y optimizar tus campañas de Búsqueda, Display y YouTube en Google Ads para que consigas muchos clientes potenciales y aumentes tus ventas de manera efectiva.",
      image: "/servicio2.png",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Campañas de búsqueda optimizadas",
        "Display y remarketing",
        "Publicidad en YouTube",
        "Seguimiento de conversiones",
        "Optimización continua",
      ],
      benefits: ["Más leads calificados", "Menor costo por conversión", "Mayor visibilidad"],
    },
  ]

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-blue-700 font-semibold tracking-wide text-sm">NUESTROS SERVICIOS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Soluciones digitales integrales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Desde consultoría estratégica hasta desarrollo web y campañas publicitarias, ofrecemos todo lo que necesitas
            para hacer crecer tu negocio en el mundo digital
          </motion.p>
        </div>

        {/* Grid de servicios - MODIFICADO A 3 COLUMNAS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8" // Cambiado de md:grid-cols-2 a md:grid-cols-3
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Imagen del servicio */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-gray-700">0{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Contenido del servicio */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>

                {/* Características principales */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Incluye:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500">+{service.features.length - 3} características más</div>
                    )}
                  </div>
                </div>

                {/* Beneficios */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Beneficios clave:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${service.color}`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de acción */}
                <button onClick={() => window.open("https://wa.me/525579627960?text=Hola%2C+encontr%C3%A9+tu+sitio+web+%27Delta+Digital%27+y+me+gustar%C3%ADa+llevar+mi+negocio+al+siguiente+nivel")}
                  className={`cursor-pointer w-full py-3 px-4 rounded-xl font-medium text-white bg-gradient-to-r ${service.color} hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center group`}
                >
                  <span>Más información</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Indicador de hover */}
              <div
                className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">¿Por qué elegir nuestros servicios?</h3>
            <p className="text-gray-600">Resultados que hablan por sí solos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">50+</div>
              <div className="text-sm text-gray-600">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">300%</div>
              <div className="text-sm text-gray-600">ROI promedio</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">100+</div>
              <div className="text-sm text-gray-600">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-sm text-gray-600">Soporte disponible</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Services