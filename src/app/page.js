"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Calendar, Clock, MapPin, Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CounterItem = ({ end, label }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start === end) clearInterval(timer)
          }, 20)
          observer.unobserve(counterRef.current)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [end])

  return (
    <motion.div
      ref={counterRef}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-4xl font-bold text-[#046381]">{count}{label.includes('%') ? '%' : ''}</p>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-[#046381] p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link  href="/" className="text-2xl font-bold text-white transition-colors hover:text-gray-300">OSTEOPRAKTIK</Link>
          <div className="hidden md:flex space-x-4">
            <Link  href="#services" className="text-white hover:text-gray-300 transition-colors">Services</Link>
            <Link  href="#about" className="text-white hover:text-gray-300 transition-colors">About</Link>
            <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link onClick={toggleMenu} href="#services" className="block py-2 text-white hover:text-gray-300 transition-colors">Services</Link>
            <Link onClick={toggleMenu} href="#about" className="block py-2 text-white hover:text-gray-300 transition-colors">About</Link>
            <Link onClick={toggleMenu} href="#contact" className="block py-2 text-white hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{background: 'linear-gradient(135deg, #046381 0%, #3a3f4b 100%)'}}>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#fff" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:gap-10 items-center relative z-10">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Discover Holistic Healing at Osteopraktik</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Experience personalized care and expert treatments for your body and mind.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white text-[#046381] hover:bg-gray-200 transition-colors text-lg px-8 py-3">
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/img.png?height=400&width=600"
              priority
              alt="Osteopraktik Clinic"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="why-choose-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 0L30 30M30 0L0 30" stroke="#046381" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#why-choose-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#046381] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/img.png?height=400&width=600&text=Why Choose Us"
                alt="Why Choose Osteopraktik"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            <div className="md:w-1/2 md:pl-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <CounterItem end={50} label="Happy Customers" />
                <CounterItem end={15} label="Years of Experience" />
                <CounterItem end={98} label="Customer Satisfaction" />
              </div>
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                At Osteopraktik, we pride ourselves on our commitment to excellence, years of experience, and high customer satisfaction. Our team of expert practitioners is dedicated to providing personalized care and achieving the best possible outcomes for our patients.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="about-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#046381" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#about-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#046381] mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Osteopraktik
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-center mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Osteopraktik is a leading holistic health center dedicated to improving the well-being of our patients through innovative and personalized care. Founded on the principles of osteopathy, we combine traditional wisdom with modern medical advancements to offer a comprehensive approach to health and wellness.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-2">Our Philosophy</h3>
                  <p className="text-gray-600">We believe in treating the whole person, not just the symptoms. Our approach focuses on identifying the root causes of health issues and addressing them through natural, non-invasive methods.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-2">Our Team</h3>
                  <p className="text-gray-600">Our diverse team of experienced practitioners includes osteopaths, chiropractors, physiotherapists, and massage therapists. Each brings unique skills and perspectives to provide comprehensive care.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-2">Our Commitment</h3>
                  <p className="text-gray-600">We are committed to ongoing education and staying at the forefront of holistic health practices. This ensures that our patients receive the most effective and up-to-date treatments available.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="services-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 0L100 100M100 0L0 100" stroke="#046381" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#services-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#046381] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Massage Therapy',
                description: 'Our skilled massage therapists use various techniques to relieve muscle tension, improve circulation, and promote relaxation. Perfect for stress  relief and pain management.'
              },
              {
                title: 'Chiropractic Care',
                description: 'Our chiropractors specialize in diagnosing and treating musculoskeletal disorders, with a focus on spinal adjustments to improve overall health and well-being.'
              },
              {
                title: 'Rehabilitation',
                description: 'We offer comprehensive rehabilitation programs designed to help you recover from injuries, surgeries, or chronic conditions, restoring your strength and mobility.'
              },
              {
                title: 'Physiotherapy',
                description: 'Our physiotherapists use evidence-based techniques to assess, diagnose, and treat a wide range of physical conditions, helping you regain function and prevent future injuries.'
              },
              {
                title: 'Osteopathy',
                description: "Osteopathic treatment focuses on the relationship between the body's structure and function, using hands-on techniques to improve overall health and well-being."
              },
              {
                title: 'Acupuncture',
                description: 'Our licensed acupuncturists use this traditional Chinese medicine technique to stimulate specific points on the body, promoting natural healing and pain relief.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-6">
                    <Image
                      src={`/img.png?height=200&width=300&text=${service.title}`}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="rounded-lg mb-4 w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                    <h3 className="text-xl font-semibold text-[#046381] mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="gallery-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#046381" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#gallery-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#046381] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Facility
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-center mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take a virtual tour of our modern, welcoming clinic. Our state-of-the-art facilities are designed to provide a comfortable and healing environment for all our patients.
          </motion.p>
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`/img.png?height=300&width=400&text=Facility Image ${index + 1}`}
                    alt={`Facility Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="contact-pattern" width="140" height="140" patternUnits="userSpaceOnUse">
              <rect width="140" height="140" fill="none" stroke="#046381" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#contact-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#046381] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <Clock className="mr-2 text-[#046381]" size={24} />
                    Working Hours
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-24 font-medium">Mon - Fri:</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-medium">Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-medium">Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <MapPin className="mr-2 text-[#046381]" size={24} />
                    Location & Contact
                  </h3>
                  <address className="not-italic">
                    <p className="mb-2">123 Health Street,</p>
                    <p className="mb-4">Wellness City, 12345</p>
                    <p className="flex items-center mb-2">
                      <Phone className="mr-2 text-[#046381]" size={20} />
                      <a href="tel:+15551234567" className="hover:text-[#046381] transition-colors">+1 (555) 123-4567</a>
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-2 text-[#046381]" size={20} />
                      <a href="mailto:info@osteopraktik.com" className="hover:text-[#046381] transition-colors">info@osteopraktik.com</a>
                    </p>
                  </address>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#046381] mb-4 flex items-center">
                    <Calendar className="mr-2 text-[#046381]" size={24} />
                    Book an Appointment
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" />
                    </div>
                    <Button className="w-full bg-[#046381] hover:bg-[#3a3f4b] text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                      Schedule Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-[#046381] mb-4">Find Us on the Map</h3>
            <div className="aspect-w-16 aspect-h-9 max-w-2xl mx-auto">
              {/* Replace this with an actual map component or embed */}
              <div className="bg-white rounded-lg flex items-center justify-center border border-gray-300">
                <p className="text-[#046381]">Map Placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#046381] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Osteopraktik. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="mt-4">
            <p className="text-gray-300">Follow us on social media for health tips and updates</p>
            <div className="flex justify-center space-x-4 mt-2">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}