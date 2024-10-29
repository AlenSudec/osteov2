"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Calendar, Clock, MapPin, Phone, Mail, Menu, X, Facebook, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const services = [
  {
    id: 1,
    name: 'Massage Therapy',
    shortDescription: 'Relieve tension and promote relaxation',
    price: 80,
    longDescription: 'Our expert massage therapists use a variety of techniques to address muscle tension, improve circulation, and promote overall relaxation. This service is perfect for those looking to reduce stress, alleviate pain, and improve their overall well-being.',
    benefits: ['Reduces muscle tension and pain', 'Improves circulation', 'Promotes relaxation and stress relief', 'Enhances flexibility and range of motion'],
    duration: '60 minutes',
    image: '/img.png?height=300&width=400&text=Massage+Therapy'
  },
  {
    id: 2,
    name: 'Osteopathy',
    shortDescription: 'Holistic approach to musculoskeletal issues',
    price: 120,
    longDescription: "Osteopathy is a form of manual therapy that focuses on the relationship between the body's structure and function. Our osteopaths use hands-on techniques to diagnose, treat, and prevent a wide range of health issues, with a particular emphasis on the musculoskeletal system.",
    benefits: ['Improves joint mobility', 'Relieves muscle tension', 'Enhances blood circulation', "Supports the body's natural healing processes"],
    duration: '45-60 minutes',
    image: '/img.png?height=300&width=400&text=Osteopathy'
  },
  {
    id: 3,
    name: 'Physiotherapy',
    shortDescription: 'Restore movement and function',
    price: 100,
    longDescription: 'Our physiotherapy services are designed to help patients recover from injuries, manage chronic conditions, and improve their overall physical function. We use a combination of exercises, manual therapy, and education to help you achieve your health and fitness goals.',
    benefits: ['Improves mobility and flexibility', 'Reduces pain and inflammation', 'Enhances strength and coordination', 'Prevents future injuries'],
    duration: '45-60 minutes',
    image: '/img.png?height=300&width=400&text=Physiotherapy'
  },
  {
    id: 4,
    name: 'Acupuncture',
    shortDescription: 'Traditional Chinese medicine for pain relief',
    price: 90,
    longDescription: "Acupuncture is an ancient Chinese healing practice that involves inserting thin needles into specific points on the body. This technique can help alleviate pain, reduce stress, and promote overall wellness by balancing the body's energy flow.",
    benefits: ['Relieves chronic pain', 'Reduces stress and anxiety', 'Improves sleep quality', 'Boosts immune system function'],
    duration: '30-45 minutes',
    image: '/img.png?height=300&width=400&text=Acupuncture'
  },
  {
    id: 5,
    name: 'Chiropractic Care',
    shortDescription: 'Spinal adjustments for better health',
    price: 110,
    longDescription: "Our chiropractic care focuses on diagnosing and treating mechanical disorders of the musculoskeletal system, especially the spine. Through manual adjustments and other techniques, our chiropractors aim to improve your body's physical function and alleviate pain.",
    benefits: ['Improves spinal alignment', 'Reduces back and neck pain', 'Enhances nervous system function', 'Increases range of motion'],
    duration: '30-45 minutes',
    image: '/img.png?height=300&width=400&text=Chiropractic+Care'
  }
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white text-gray-800">
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
            <Link href="/services" className="block py-2 text-white hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/about" className="block py-2 text-white hover:text-gray-300 transition-colors">About</Link>
            <Link href="/contact" className="block py-2 text-white hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        )}
      </nav>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#046381]">Our Services</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 bg-white shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#046381]">Select a Service</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ease-in-out ${
                      selectedService.id === service.id
                        ? 'bg-[#046381] text-white shadow-md'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm mt-1">{service.shortDescription}</p>
                      </div>
                      <ChevronRight size={20} className={selectedService.id === service.id ? 'text-white' : 'text-[#046381]'} />
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
              >
                <Image
                  src={selectedService.image}
                  alt={selectedService.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h2 className="text-3xl font-bold text-[#046381] mb-4">{selectedService.name}</h2>
                <p className="text-2xl font-bold text-[#046381] mb-4">${selectedService.price}</p>
                <p className="text-gray-600 mb-6">{selectedService.longDescription}</p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-2">Benefits:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600 mb-6"><strong>Duration:</strong> {selectedService.duration}</p>
                <Button className="bg-[#046381] hover:bg-[#3a3f4b] text-white transition-colors transform hover:scale-105 duration-300 ease-in-out">
                  Book Now
                </Button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046381]">Contact Us</h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-[#046381]">Name</Label>
                        <Input id="name" placeholder="Your Name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-[#046381]">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-[#046381]">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-[#046381]">Message</Label>
                      <Textarea id="message" placeholder="Your message here..." className="mt-1 h-32" />
                    </div>
                    <Button className="w-full bg-[#046381] hover:bg-[#3a3f4b] text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="lg:w-1/3 space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <Clock className="mr-2" size={24} />
                    Working Hours
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <MapPin className="mr-2" size={24} />
                    Location
                  </h3>
                  <p className="text-gray-600">123 Health Street, Wellness City, 12345</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <Phone className="mr-2" size={24} />
                    Contact
                  </h3>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-600">Email: info@osteopraktik.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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