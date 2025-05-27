"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Filter, ArrowUpRight, X } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Centro de Próstata",
        category: "Desarrollo Web y Posicionamiento",
        description:
          "Desarrollamos un sitio web en inglés y español para Centro de Próstata, una clínica que busca expandir su alcance hacia más clientes potenciales e internacionales.",
        image: "/cdp.png",
        logo: "/cdp-logo.png",
        results: {
          leads: 350,
          roi: "280%",
          ctr: "3.9%",
          conversionRate: "7.5%",
        },
        url: "https://www.centrodeprostata.com",
        tags: ["Desarrollo Web", "Google Ads", "Analítica Web"],
        color: "from-purple-500 to-indigo-500",
      },
  {
    id: 2,
    title: "DeCreditScore",
    category: "Landing Page",
    description:
      "Desarrollamos una landing page para DeCreditScore, una start-up que busca ser el primer filtro para brindarle a sus clientes créditos personalizado basado en su score dentro de la plataforma.",
    image: "/dcs.png",
    logo: "/dsc-logo.png",
    results: {
      leads: 500,
      roi: "320%",
      ctr: "4.8%",
      conversionRate: "8.2%",
    },
    url: "https://www.decreditscore.xyz",
    tags: ["Landing Page"],
    color: "from-blue-500 to-cyan-400",
  },

]

// Todas las categorías únicas
const allCategories = ["Todos", ...new Set(projects.map((project) => project.category))]

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [viewMode, setViewMode] = useState("carousel") // 'carousel' o 'grid'
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Filtrar proyectos por categoría
  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
    setActiveIndex(0)
  }, [selectedCategory])

  // Navegación del carrusel
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1))
  }

  // Abrir modal con detalles del proyecto
  const openProjectDetails = (id: number) => {
    setSelectedProject(id)
    setIsModalOpen(true)
  }

  // Manejar teclas de navegación
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, filteredProjects.length, nextSlide, prevSlide])

  // Obtener el proyecto actual
  const currentProject = filteredProjects[activeIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="portfolio">
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
            <span className="text-blue-700 font-semibold tracking-wide text-sm">NUESTRO PORTAFOLIO</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Proyectos que nos enorgullecen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos de marketing digital
          </motion.p>
        </div>

        {/* Controles y filtros */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          {/* Filtros de categoría */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 max-w-full scrollbar-hide">
            <Filter className="h-4 w-4 text-gray-500" />
            {allCategories.map((category) => (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="10" rx="2" ry="2" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M16 21v-4" />
                <path d="M8 21v-4" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
              }`}
              aria-label="Ver como cuadrícula"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Vista de carrusel */}
        {viewMode === "carousel" && (
          <div className="relative" ref={carouselRef}>
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
                  {currentProject && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg p-6 md:p-8">
                      {/* Imagen del proyecto */}
                      <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={currentProject.image || "/placeholder.svg"}
                            alt={currentProject.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div
                          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${currentProject.color}`}
                        >
                          {currentProject.category}
                        </div>
                      </div>

                      {/* Información del proyecto */}
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 mr-4">
                              <Image
                                src={currentProject.logo || "/placeholder.svg"}
                                alt={`${currentProject.title} logo`}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800">{currentProject.title}</h3>
                              <p className="text-gray-500">{currentProject.category}</p>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6">{currentProject.description}</p>

                          {/* Etiquetas */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {currentProject.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Resultados */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 mb-3">RESULTADOS DESTACADOS</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-xs text-gray-500">Leads generados</p>
                              <p className="text-xl font-bold text-blue-600">{currentProject.results.leads}+</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-xs text-gray-500">ROI</p>
                              <p className="text-xl font-bold text-blue-600">{currentProject.results.roi}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-xs text-gray-500">CTR</p>
                              <p className="text-xl font-bold text-blue-600">{currentProject.results.ctr}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-xs text-gray-500">Conversión</p>
                              <p className="text-xl font-bold text-blue-600">{currentProject.results.conversionRate}</p>
                            </div>
                          </div>

                          <button
                            onClick={() => window.open(currentProject.url)}
                            className="mt-6 inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer"
                          >
                            Ir al sitio web
                            <ArrowUpRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles de navegación */}
            <div className="flex justify-between mt-8">
              <div className="flex items-center">
                <span className="text-gray-500 text-sm">
                  {activeIndex + 1} / {filteredProjects.length}
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label="Proyecto anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label="Proyecto siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center space-x-2 mt-6">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Vista de cuadrícula */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => openProjectDetails(project.id)}
              >
                {/* Imagen del proyecto */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color}`}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Información del proyecto */}
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 mr-3">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Etiquetas */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Resultados destacados */}
                <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">Leads generados</p>
                      <p className="text-lg font-bold text-blue-600">{project.results.leads}+</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">ROI</p>
                      <p className="text-lg font-bold text-blue-600">{project.results.roi}</p>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <span className="text-xs font-medium">Ver más</span>
                      <ArrowUpRight className="ml-1 h-3 w-3" />
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

export default ProjectShowcase
