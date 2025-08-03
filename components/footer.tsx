"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Aquí iría la lógica para enviar el email a tu sistema
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative h-10 w-32">
                <Image
                  src="/Logodel2.png"
                  alt="Delta Consultora Digital"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 128px"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 max-w-xs">
              Consultora de marketing digital especializada en Google Ads y herramientas complementarias para hacer
              crecer tu negocio.
            </p>
            <div className="flex space-x-3 mt-6">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm text-gray-600 hover:text-blue-600 hover:shadow-md transition-all duration-200"
                aria-label="Facebook"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm text-gray-600 hover:text-pink-600 hover:shadow-md transition-all duration-200"
                aria-label="Instagram"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
<div className="space-y-4">
  <h3 className="text-gray-800 font-semibold text-lg mb-4">Enlaces rápidos</h3>
  <ul className="space-y-3">
    {[
      { text: "Inicio", href: "" },
      { text: "Nosotros", href: "about" },
      { text: "Servicios", href: "services" },
      { text: "Portafolio", href: "portfolio" },
      { text: "Paquetes", href: "packages" },
      { text: "Contacto", href: "contacto" }
    ].map((item) => (
      <li key={item.href || 'inicio'}>
        <Link
          href={`#${item.href}`}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
        >
          <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <span>{item.text}</span>
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Ciudad de México, México</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <a href="tel:5579627960"><span className="text-gray-600 text-sm">+52 (55) 7962 7960</span></a>  
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
               <a href="mailto:contacto@delta-digital.com.mx"><span className="text-gray-600 text-sm">contacto@delta-digital.com.mx</span></a> 
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Boletín informativo</h3>
            <p className="text-gray-600 text-sm">
              Suscríbete para recibir noticias y actualizaciones sobre marketing digital.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-10 text-sm"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                aria-label="Suscribirse"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm mt-2"
              >
                ¡Gracias por suscribirte!
              </motion.p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
            <p>{currentYear} © Delta Consultora Digital. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/privacidad" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
