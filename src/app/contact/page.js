"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Menu, X, Clock, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-[#046381] p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white transition-colors hover:text-gray-300">OSTEOPRAKTIK</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/services" className="text-white hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link href="/" className="block py-2 text-white hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/services" className="block py-2 text-white hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/about" className="block py-2 text-white hover:text-gray-300 transition-colors">About</Link>
            <Link href="/contact" className="block py-2 text-white hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#046381] to-[#3a3f4b] text-white">
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            {...fadeInUp}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            We're here to answer your questions and provide the support you need. Reach out to us today.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-2/3"
              {...fadeInUp}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-[#046381]">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message here..." className="h-32" />
                    </div>
                    <Button className="w-full bg-[#046381] hover:bg-[#3a3f4b] text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              className="lg:w-1/3 space-y-6"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <Clock className="mr-2" size={24} />
                    Working Hours
                  </h3>
                  <ul className="space-y-2">
                    <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <MapPin className="mr-2" size={24} />
                    Location
                  </h3>
                  <p>123 Health Street, Wellness City, 12345</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <Phone className="mr-2" size={24} />
                    Contact
                  </h3>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Email: info@osteopraktik.com</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center text-[#046381]"
            {...fadeInUp}
          >
            Find Us
          </motion.h2>
          <motion.div 
            className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {/* Replace this with an actual map component or embed */}
            <div className="bg-white rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-[#046381] text-lg">Interactive Map Placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#046381] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Osteopraktik. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"   className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:info@osteopraktik.com" className="hover:text-gray-300 transition-colors">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
              <a href="tel:+15551234567" className="hover:text-gray-300 transition-colors">
                <Phone size={24} />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}