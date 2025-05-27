"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star, ArrowRight, Zap, Globe, Code, Target, Crown, Sparkles } from "lucide-react"

const PricingPlans = () => {
  const [activeCategory, setActiveCategory] = useState("google-ads")
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  const categories = [
    { id: "web-development", name: "Desarrollo Web", icon: <Code className="w-5 h-5" /> },
    { id: "google-ads", name: "Google Ads", icon: <Target className="w-5 h-5" /> },
  ]

  const googleAdsPlans = [
    {
      id: "individual",
      title: "INDIVIDUAL",
      subtitle: "Perfecto para empezar",
      price: "$899",
      currency: "+ IVA",
      initialPrice: "Primer mes $999 + IVA",
      initialNote: "(Configuración inicial)",
      popular: false,
      color: "from-blue-500 to-blue-600",
      features: [
        "1 Campaña (búsqueda, display y YouTube)",
        "Estudio de palabras clave",
        "Dos grupos de anuncios y un anuncio por grupo",
        "Configuración inicial de la campaña",
        "Seguimiento de acciones (llamadas, WhatsApp, conversiones)",
        "Dashboard online de informes",
        "Configuración de Google Analytics",
        "Administración y optimización periódica",
        "Revisión mensual con cliente",
      ],
      note: "*No incluye inversión publicitaria",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: "3-pack",
      title: "3-PACK",
      subtitle: "Más alcance y resultados",
      price: "$1,899",
      currency: "+ IVA",
      initialPrice: "Primer mes $2,699 + IVA",
      initialNote: "(Configuración inicial)",
      popular: true,
      color: "from-green-500 to-emerald-600",
      features: [
        "3 Campañas (búsqueda, display y YouTube)",
        "Estudio de palabras clave",
        "Seis grupos de anuncios y un anuncio por grupo",
        "Configuración inicial de las campañas",
        "Seguimiento de acciones (llamadas, WhatsApp, conversiones)",
        "Dashboard online de informes",
        "Configuración de Google Analytics",
        "Administración y optimización periódica",
        "Revisión mensual con cliente",
      ],
      note: "*No incluye inversión publicitaria",
      icon: <Star className="w-6 h-6" />,
    },
    {
      id: "empresarial",
      title: "EMPRESARIAL",
      subtitle: "Solución completa y personalizada",
      price: "Cotización",
      currency: "personalizada",
      initialPrice: "Incluye configuración inicial",
      initialNote: "",
      popular: false,
      color: "from-purple-500 to-indigo-600",
      features: [
        "Campañas ilimitadas según necesidades",
        "Estudio de palabras clave avanzado",
        "Configuración inicial de las campañas",
        "Seguimiento de acciones completo",
        "Un ejecutivo dedicado",
        "Dashboard Premium de informes",
        "Configuración de Google Analytics",
        "Administración y optimización periódica",
        "Revisión semanal con cliente",
      ],
      note: "*No incluye inversión publicitaria",
      icon: <Crown className="w-6 h-6" />,
    },
  ]

  const webDevelopmentPlans = [
    {
      id: "landing-page",
      title: "LANDING PAGE",
      subtitle: "Página de aterrizaje efectiva",
      price: "$2,999",
      currency: "+ IVA",
      initialPrice: "Entrega en 7-10 días",
      initialNote: "",
      popular: false,
      color: "from-cyan-500 to-blue-600",
      features: [
        "4 Secciones (Inicio, Nosotros, Galería, Contacto)",
        "Certificado SSL (Página Segura)",
        "Enlace a redes sociales",
        "Botón de contacto de WhatsApp",
        "Formulario enlazado a correo electrónico",
        "Diseño Responsivo (móvil y desktop)",
        "Optimización de imágenes",
        "Optimización SEO básica",
        "Actualización gratuita durante 1 año",
      ],
      note: "*Host y Dominio se cotizan por separado",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: "website-professional",
      title: "SITIO WEB PROFESIONAL",
      subtitle: "Presencia digital completa",
      price: "$7,999",
      currency: "+ IVA",
      initialPrice: "Entrega en 15-20 días",
      initialNote: "",
      popular: true,
      color: "from-emerald-500 to-green-600",
      features: [
        "Hasta 10 páginas personalizadas",
        "Diseño único y profesional",
        "Sistema de gestión de contenidos (CMS)",
        "Optimización SEO avanzada",
        "Integración con Google Analytics",
        "Formularios de contacto avanzados",
        "Galería de imágenes interactiva",
        "Blog integrado",
        "Certificado SSL incluido",
        "Capacitación para administrar el sitio",
        "Soporte técnico por 3 meses",
      ],
      note: "*Incluye hosting por 1 año",
      icon: <Code className="w-6 h-6" />,
    },
    {
      id: "ecommerce",
      title: "TIENDA ONLINE",
      subtitle: "Vende en línea 24/7",
      price: "$15,999",
      currency: "+ IVA",
      initialPrice: "Entrega en 25-30 días",
      initialNote: "",
      popular: false,
      color: "from-orange-500 to-red-600",
      features: [
        "Catálogo de productos ilimitado",
        "Carrito de compras avanzado",
        "Pasarela de pagos integrada",
        "Panel de administración completo",
        "Gestión de inventario",
        "Sistema de cupones y descuentos",
        "Integración con redes sociales",
        "Optimización SEO para e-commerce",
        "Diseño responsivo premium",
        "Certificado SSL incluido",
        "Capacitación completa",
        "Soporte técnico por 6 meses",
      ],
      note: "*Incluye hosting por 1 año y configuración de pagos",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      id: "web-app",
      title: "APLICACIÓN WEB",
      subtitle: "Solución personalizada",
      price: "Cotización",
      currency: "personalizada",
      initialPrice: "Desarrollo a medida",
      initialNote: "",
      popular: false,
      color: "from-purple-500 to-pink-600",
      features: [
        "Desarrollo completamente personalizado",
        "Base de datos avanzada",
        "Panel de administración",
        "API REST integrada",
        "Autenticación de usuarios",
        "Dashboard con métricas",
        "Integración con servicios externos",
        "Optimización de rendimiento",
        "Seguridad avanzada",
        "Documentación técnica",
        "Capacitación del equipo",
        "Soporte técnico extendido",
      ],
      note: "*Incluye análisis de requerimientos y arquitectura",
      icon: <Crown className="w-6 h-6" />,
    },
  ]

  const currentPlans = activeCategory === "google-ads" ? googleAdsPlans : webDevelopmentPlans

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="packages">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-blue-700 font-semibold tracking-wide text-sm">NUESTROS PAQUETES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Planes diseñados para tu éxito
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Elige el paquete perfecto para hacer crecer tu negocio. Desde campañas publicitarias hasta desarrollo web
            completo
          </motion.p>
        </div>

        {/* Selector de categorías */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-1 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de planes */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {currentPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-blue-500 ring-opacity-50" : ""
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Badge de popular */}
              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Más popular
                  </div>
                </div>
              )}

              {/* Header del plan */}
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16" />
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{plan.title}</h3>
                      <p className="text-sm opacity-90">{plan.subtitle}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-sm ml-2 opacity-90">{plan.currency}</span>
                    </div>
                    {plan.initialPrice && (
                      <p className="text-sm opacity-90 mt-1">
                        {plan.initialPrice} {plan.initialNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenido del plan */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.note && (
                  <p className="text-xs text-gray-500 mb-6 italic border-t border-gray-100 pt-4">{plan.note}</p>
                )}

                {/* Botón de acción */}
                <button
                  className={`w-full py-3 px-4 rounded-xl font-medium text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center group`}
                >
                  <span>
                    {plan.price === "Cotización" || plan.price === "Cotizamos en base a tus necesidades"
                      ? "SOLICITAR COTIZACIÓN"
                      : "CONTRATAR AHORA"}
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Indicador de hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.color} transform scale-x-0 ${
                  hoveredPlan === plan.id ? "scale-x-100" : ""
                } transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>

      {/* Call to Action */}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para hacer crecer tu negocio?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contáctanos hoy mismo y descubre cómo nuestros servicios pueden transformar tu presencia digital y
              aumentar tus ventas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Solicitar consulta gratuita
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Ver nuestros casos de éxito
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPlans
