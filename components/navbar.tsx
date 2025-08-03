"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Navigation items
  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/#about" },
    { name: "Servicios", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Paquetes", href: "/#packages" },
    { name: "Contacto", href: "/#contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="relative h-16 w-auto">
              <Image
                src="/Logodel2.png"
                alt="Delta Consultora Digital"
                width={120}
                height={64}
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-1 lg:space-x-2 mr-6">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3 py-2 rounded-md text-sm font-medium tracking-wide uppercase transition-all duration-200 hover:bg-blue-50 ${
                        isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 mx-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
           
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors duration-200"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="/#contacto"
                className="ml-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-md hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contáctanos
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center px-4 py-3 rounded-md ${
                          isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                        {isActive && (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-auto">
                            <ChevronDown size={16} />
                          </motion.span>
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              {/* Mobile Social Media */}
              <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-100">
                   {/* 
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>*/}
                <Link
                  href="https://instagram.com/delta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="/#contacto"
                  className="ml-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md hover:shadow-md transition-all duration-200"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
