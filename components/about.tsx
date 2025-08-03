"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Lightbulb, Award, CheckCircle } from "lucide-react"

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Values list with icons
  const values = [
    { name: "Compromiso", description: "Nos dedicamos completamente a cada proyecto" },
    { name: "Calidad", description: "Ofrecemos soluciones de alto nivel" },
    { name: "Seriedad", description: "Trabajamos con profesionalismo y responsabilidad" },
    { name: "Honestidad", description: "Transparencia en cada aspecto de nuestro servicio" },
    { name: "Puntualidad", description: "Respetamos los tiempos acordados" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="about">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Sección de texto */}
          <motion.div className="lg:col-span-7" variants={itemVariants}>
            <div className="max-w-3xl">
              <div className="inline-block bg-blue-100 rounded-full px-4 py-1 mb-4">
                <span className="text-blue-700 font-semibold tracking-wide text-sm">CONÓCENOS</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Delta Consultora <span className="text-blue-600">Digital</span>
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Somos una consultora de marketing digital y desarrollo web, integrada por gente altamente capacitada y certificada
                en herramientas de vanguardia y comprometida con sus clientes para generar valor. Somos especialistas en
                Google Ads y herramientas complementarias, las cuales aunadas a nuestra experiencia harán que su negocio
                crezca exponencialmente a corto plazo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Misión</h3>
                  </div>
                  <p className="text-gray-600">
                    Ayudar a las pequeñas empresas a lograr un posicionamiento óptimo en internet e incrementar sus
                    ventas.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Lightbulb className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Visión</h3>
                  </div>
                  <p className="text-gray-600">
                    Ser una consultora líder en el ramo del marketing digital, comprometidos con nuestros clientes para
                    que obtengan el máximo beneficio y rendimiento de su publicidad en internet.
                  </p>
                </motion.div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Nuestros Valores</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-800">{value.name}</span>
                        <p className="text-sm text-gray-500">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sección de imagen */}
          <motion.div className="lg:col-span-5 relative" variants={itemVariants}>
            <div className="relative">
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-lg opacity-20 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg opacity-20 z-0"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-40"></div>
              <div className="absolute top-1/4 -right-4 w-12 h-12 bg-blue-300 rounded-full opacity-40"></div>

              {/* Marco de la imagen */}
              <div className="relative z-10 bg-white p-3 rounded-xl shadow-lg">
                <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                  <Image
                    src="/nosotros.png"
                    alt="Delta Consultora Digital"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Tarjeta de estadísticas */}
              <motion.div
                className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-xl z-20 max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500">Clientes satisfechos</span>
                  <span className="text-blue-600 text-lg font-bold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About