"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Check, 
  Star, 
  ArrowRight, 
  Zap, 
  Globe, 
  Code, 
  Target, 
  Crown, 
  Sparkles,
  ShoppingCart,
  LayoutDashboard,
  BarChart2,
  CreditCard,
  Users,
  Shield,
  Mail,
  Image,
  Smartphone,
  Calendar,
  FileText,
  Settings,
  
} from "lucide-react"

const PricingPlans = () => {
  const [activeCategory, setActiveCategory] = useState("google-ads")
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  const categories = [
    { id: "google-ads", name: "Google Ads", icon: <Target className="w-5 h-5" /> },
    { id: "web-development", name: "Desarrollo Web", icon: <Code className="w-5 h-5" /> },
  ]

  const googleAdsPlans = [
    {
      id: "individual",
      title: "INDIVIDUAL",
      subtitle: "Perfecto para empezar",
      initialNote: "(Configuración inicial)",
      popular: false,
      color: "from-blue-500 to-blue-600",
      features: [
        { text: "1 Campaña (búsqueda, display y YouTube)", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Estudio de palabras clave", icon: <FileText className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Dos grupos de anuncios y un anuncio por grupo", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Configuración inicial de la campaña", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Seguimiento de acciones (llamadas, WhatsApp, conversiones)", icon: <Smartphone className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Dashboard online de informes", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Configuración de Google Analytics", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Administración y optimización periódica", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Revisión mensual con cliente", icon: <Calendar className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
      ],
      note: "*No incluye inversión publicitaria",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: "3-pack",
      title: "3-PACK",
      subtitle: "Más alcance y resultados",
      initialNote: "(Configuración inicial)",
      popular: true,
      color: "from-purple-500 to-indigo-600",
      features: [
        { text: "3 Campañas (búsqueda, display y YouTube)", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Estudio de palabras clave", icon: <FileText className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Seis grupos de anuncios y un anuncio por grupo", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Configuración inicial de las campañas", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Seguimiento de acciones (llamadas, WhatsApp, conversiones)", icon: <Smartphone className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Dashboard online de informes", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Configuración de Google Analytics", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Administración y optimización periódica", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Revisión mensual con cliente", icon: <Calendar className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
      ],
      note: "*No incluye inversión publicitaria",
      icon: <Star className="w-6 h-6" />,
    },
    {
      id: "empresarial",
      title: "EMPRESARIAL",
      subtitle: "Solución completa y personalizada",
      initialNote: "",
      popular: false,
      color: "from-blue-500 to-blue-600",
      features: [
        { text: "Campañas ilimitadas según necesidades", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Estudio de palabras clave avanzado", icon: <FileText className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Configuración inicial de las campañas", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Seguimiento de acciones completo", icon: <Smartphone className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Un ejecutivo dedicado", icon: <Users className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Dashboard Premium de informes", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Configuración de Google Analytics", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Administración y optimización periódica", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Revisión semanal con cliente", icon: <Calendar className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
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
      initialPrice: "Entrega en 7-10 días",
      initialNote: "",
      popular: false,
      color: "from-cyan-500 to-blue-600",
      features: [
        { text: "4 Secciones (Inicio, Nosotros, Galería, Contacto)", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Certificado SSL (Página Segura)", icon: <Shield className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Enlace a redes sociales", icon: <Users className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Botón de contacto de WhatsApp", icon: <Smartphone className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Formulario enlazado a correo electrónico", icon: <Mail className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Diseño Responsivo (móvil y desktop)", icon: <Smartphone className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Optimización de imágenes", icon: <Image className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Optimización SEO básica", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Actualización gratuita durante 1 año", icon: <Calendar className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
      ],
      note: "*Host y Dominio se cotizan por separado",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: "website-professional",
      title: "SITIO WEB PROFESIONAL",
      subtitle: "Presencia digital completa",
      initialPrice: "Entrega en 15-20 días",
      initialNote: "",
      popular: true,
      color: "from-purple-500 to-indigo-600",
      features: [
        { text: "Hasta 10 páginas personalizadas", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Diseño único y profesional", icon: <Image className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Sistema de gestión de contenidos (CMS)", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Optimización SEO avanzada", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Integración con Google Analytics", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Formularios de contacto avanzados", icon: <Mail className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Galería de imágenes interactiva", icon: <Image className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Blog integrado", icon: <FileText className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Certificado SSL incluido", icon: <Shield className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Capacitación para administrar el sitio", icon: <Users className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Soporte técnico por 3 meses", icon: <Calendar className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
      ],
      note: "*Incluye hosting por 1 año",
      icon: <Code className="w-6 h-6" />,
    },
    {
      id: "ecommerce",
      title: "TIENDA ONLINE",
      subtitle: "Vende en línea 24/7",
      initialPrice: "Entrega en 25-30 días",
      initialNote: "",
      popular: false,
      color: "from-cyan-500 to-blue-600",
      features: [
        { text: "Catálogo de productos ilimitado", icon: <ShoppingCart className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Carrito de compras avanzado", icon: <ShoppingCart className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Pasarela de pagos integrada", icon: <CreditCard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Panel de administración completo", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Gestión de inventario", icon: <ShoppingCart className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Sistema de cupones y descuentos", icon: <ShoppingCart className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Integración con redes sociales", icon: <Users className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Optimización SEO para e-commerce", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Diseño responsivo premium", icon: <Smartphone className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Certificado SSL incluido", icon: <Shield className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Capacitación completa", icon: <Users className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Soporte técnico por 6 meses", icon: <Calendar className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
      ],
      note: "*Incluye hosting por 1 año y configuración de pagos",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      id: "web-app",
      title: "APLICACIÓN WEB",
      subtitle: "Solución personalizada",
      initialPrice: "Desarrollo a medida",
      initialNote: "",
      popular: false,
      color: "from-cyan-500 to-blue-600 ",
      features: [
        { text: "Desarrollo completamente personalizado", icon: <Code className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Base de datos avanzada", icon: <LayoutDashboard className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Panel de administración", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "API REST integrada", icon: <Code className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Autenticación de usuarios", icon: <Users className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Dashboard con métricas", icon: <BarChart2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Integración con servicios externos", icon: <Settings className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Optimización de rendimiento", icon: <Zap className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Seguridad avanzada", icon: <Shield className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Documentación técnica", icon: <FileText className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Capacitación del equipo", icon: <Users className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
        { text: "Soporte técnico extendido", icon: <Calendar className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
      ],
      note: "*Incluye análisis de requerimientos y arquitectura",
      icon: <Crown className="w-6 h-6" />,
    },
  ]

  const currentPlans = activeCategory === "google-ads" ?  googleAdsPlans : webDevelopmentPlans

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
                    <div className="w-10 h-10   bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{plan.title}</h3>
                      <p className="text-sm opacity-90">{plan.subtitle}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Contenido del plan */}
              <div className="p-6">
                  <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    {feature.icon}
                    <span>{feature.text}</span>
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
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
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
