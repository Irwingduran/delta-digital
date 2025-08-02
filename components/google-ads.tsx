"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Target, Users, Clock } from "lucide-react"

const features = [
  {
    id: "01",
    title: "Certificación Google Ads",
    description:
      "Nuestro personal está altamente capacitado y cuenta con las certificaciones de Google para hacer crecer tu negocio.",
    image: "/google_ads2.png",
    icon: <Award className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "02",
    title: "Expertos en Google Ads",
    description:
      "Configuramos correctamente tus campañas para que funcionen y atraemos clientes potenciales a un bajo costo.",
    image: "/google_ads.png",
    icon: <Target className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "03",
    title: "Experiencia",
    description:
      "Contamos con amplia experiencia en diferentes sectores. Adecuamos tus anuncios de acuerdo a tu sector y tus objetivos.",
    image: "/google_ads3.png",
    icon: <Users className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "04",
    title: "Acompañamiento",
    description:
      "No te dejamos solo, te acompañamos durante todo el proceso para maximizar el rendimiento de tus campañas.",
    image: "/acompanamiento.png",
    icon: <Clock className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
  },
]

const GoogleAds = () => {

  // Animation variants


  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" id="google-ads">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-blue-700 font-semibold tracking-wide text-sm">GOOGLE ADS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            ¿Cómo podemos ayudarte en tus campañas?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-r ${feature.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-10 translate-x-10" />
                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-10 h-10 bg-opacity-20 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-2xl font-bold opacity-80">{feature.id}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="relative h-24 w-24 mx-auto mb-4">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    sizes="96px"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>

                {/* Línea decorativa */}
                <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} mx-auto mt-4 rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GoogleAds
