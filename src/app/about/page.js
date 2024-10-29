"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Phone, Mail, Menu, X, Facebook, Instagram } from 'lucide-react'


export default function AboutPage() {
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
            About Osteopraktik
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Discover our journey, our team, and our commitment to holistic healing and wellness.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center text-[#046381]"
            {...fadeInUp}
          >
            Our Story
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/img.png?height=400&width=600&text=Our+Story"
                alt="Osteopraktik Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg mb-4">
                Founded in 2005, Osteopraktik began as a small clinic with a big vision: to revolutionize holistic healthcare in our community. Our journey started with a team of passionate practitioners who believed in treating not just symptoms, but the whole person.
              </p>
              <p className="text-lg mb-4">
                Over the years, we've grown in size and expertise, but our core mission remains the same: to provide personalized, comprehensive care that empowers our patients to achieve optimal health and wellness.
              </p>
              <p className="text-lg">
                Today, Osteopraktik stands as a beacon of integrative healthcare, blending traditional wisdom with cutting-edge techniques to offer our patients the best of both worlds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-[#046381]"
            {...fadeInUp}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Emily Chen", role: "Lead Osteopath", image: "emily-chen" },
              { name: "Michael Johnson", role: "Physiotherapist", image: "michael-johnson" },
              { name: "Sarah Thompson", role: "Massage Therapist", image: "sarah-thompson" },
              { name: "Dr. David Lee", role: "Chiropractor", image: "david-lee" },
              { name: "Lisa Patel", role: "Acupuncturist", image: "lisa-patel" },
              { name: "Robert Wilson", role: "Nutritionist", image: "robert-wilson" }
            ].map((member, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src={`/img.png?height=300&width=300&text=${member.image}`}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-[#046381]"
            {...fadeInUp}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Holistic Approach", description: "We treat the whole person, not just symptoms." },
              { title: "Personalized Care", description: "Every treatment plan is tailored to individual needs." },
              { title: "Continuous Learning", description: "We stay updated with the latest in healthcare." },
              { title: "Empathy", description: "We prioritize understanding and compassion in our care." },
              { title: "Collaboration", description: "We work together for the best patient outcomes." },
              { title: "Integrity", description: "We maintain the highest ethical standards in all we do." }
            ].map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#046381]">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#046381] to-[#3a3f4b] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            {...fadeInUp}
          >
            Experience the Osteopraktik Difference
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Join us on a journey to better health and wellness. Book your appointment today and take the first step towards a healthier you.
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <Button className="bg-white text-[#046381] hover:bg-gray-200 transition-colors text-lg px-8 py-3">
                Contact Us
              </Button>
            </Link>
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