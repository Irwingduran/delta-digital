"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Calendar, Star, Users, TrendingUp, Target } from "lucide-react"

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const teamMembers = [
    {
      id: 1,
      name: "Arturo",
      role: "CEO & Founder",
      fullRole: "Chief Executive Officer & Founder",
      image: "/team/img1.png",
      bio: "Visionario líder con más de 10 años de experiencia en marketing digital. Especialista en estrategias de crecimiento y transformación digital para empresas.",
      skills: ["Estrategia Digital", "Liderazgo", "Google Ads", "Análisis de Datos"],
      achievements: ["Google Ads Certified", "50+ Proyectos Exitosos", "Mentor Startup"],
      color: "from-blue-500 to-indigo-600",

    },
    {
      id: 2,
      name: "Gerardo",
      role: "Co-Founder",
      fullRole: "Co Founder",
      image: "/team/arturo.jpg",
      bio: "Experto en tecnología con amplia experiencia en desarrollo de soluciones web escalables y arquitectura de sistemas modernos.",
      skills: ["Desarrollo Web", "Arquitectura", "DevOps", "Bases de Datos"],
      achievements: ["AWS Certified", "100+ Aplicaciones", "Tech Lead"],
      color: "from-emerald-500 to-teal-600",

    },
    {
      id: 3,
      name: "Irwing",
      role: "Lead Developer",
      fullRole: "Full-Stack Developer",
      image: "/team/img2.png",
      bio: "Desarrollador full-stack especializado en tecnologías modernas. Apasionado por crear experiencias web excepcionales y código limpio.",
      skills: ["Python", "React", "TypeScript", "Next.js"],
      achievements: ["Hackathon Winner","React Expert", "Open Source", "Code Mentor"],
      color: "from-purple-500 to-violet-600",
    },
    {
      id: 4,
      name: "Ilse",
      role: "UI/UX Designer",
      fullRole: "Senior UI/UX Designer",
      image: "/team/ilse.jpg",
      bio: "Diseñadora creativa enfocada en crear experiencias de usuario intuitivas y visualmente impactantes que convierten visitantes en clientes.",
      skills: ["UI Design", "UX Research", "Figma", "Prototyping"],
      achievements: ["Design Awards", "User Experience", "Brand Identity"],
      color: "from-pink-500 to-rose-600",
    },
  ]

  const teamStats = [
    { icon: <Users className="w-6 h-6" />, value: "4+", label: "Expertos" },
    { icon: <Calendar className="w-6 h-6" />, value: "30+", label: "Años de experiencia combinada" },
    { icon: <Target className="w-6 h-6" />, value: "200+", label: "Proyectos completados" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "98%", label: "Satisfacción del cliente" },
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="team">
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
            <span className="text-blue-700 font-semibold tracking-wide text-sm">NUESTRO EQUIPO</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Los expertos detrás de tu éxito
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Conoce al talentoso equipo de profesionales que trabaja día a día para hacer realidad tus objetivos
            digitales y llevar tu negocio al siguiente nivel
          </motion.p>
        </div>

        {/* Estadísticas del equipo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="text-blue-600">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Grid de miembros del equipo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setSelectedMember(member.id)}
            >
              {/* Imagen y overlay */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div
                  className={`absolute inset-0  ${member.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />

                {/* Overlay con información adicional */}
                <AnimatePresence>
                  {hoveredMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                      <div className="text-center text-white p-4">
                        <p className="text-sm mb-2">{member.bio}</p>
                        <div className="flex justify-center space-x-2">
                          {member.skills.slice(0, 2).map((skill, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-500 bg-opacity-20 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              
              </div>

              {/* Información del miembro */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                </div>

                {/* Skills principales */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Logros */}
                <div className="mb-4">
                  <div className="flex items-center justify-center">
                    <Award className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-xs text-gray-600">{member.achievements[0]}</span>
                  </div>
                </div>

           
              </div>

              {/* Indicador de hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Modal de detalles del miembro */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const member = teamMembers.find((m) => m.id === selectedMember)
                if (!member) return null

                return (
                  <div className="p-6">
                    <div className="flex items-start mb-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mr-6">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h2>
                        <p className="text-gray-600 mb-2">{member.fullRole}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Especialidades</h3>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${member.color}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Logros</h3>
                        <ul className="space-y-2">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                      
                        <button
                          onClick={() => setSelectedMember(null)}
                          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Team
