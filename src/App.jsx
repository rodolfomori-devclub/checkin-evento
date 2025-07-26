import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ScheduleSection from './components/ScheduleSection'
import FirstClassSection from './components/FirstClassSection'
import UrgencySection from './components/UrgencySection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import ParticleSystem from './components/ParticleSystem'
import FloatingBlobs from './components/FloatingBlobs'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isCheckinModalOpen, setIsCheckinModalOpen] = useState(false)

  useEffect(() => {
    // Simulate loading time and then set loaded
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach(element => {
        element.style.transform = `translateY(${rate}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Background with grid pattern */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      
      {/* Floating background elements */}
      <FloatingBlobs />
      <ParticleSystem />
      
      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <HeroSection 
          isCheckinModalOpen={isCheckinModalOpen}
          setIsCheckinModalOpen={setIsCheckinModalOpen}
        />
        <ScheduleSection />
        <FirstClassSection />
        <UrgencySection 
          onOpenCheckin={() => setIsCheckinModalOpen(true)}
        />
        <FAQSection 
          onOpenCheckin={() => setIsCheckinModalOpen(true)}
        />
      </motion.main>
      
      {/* Footer */}
      <Footer 
        onOpenCheckin={() => setIsCheckinModalOpen(true)}
      />
      
      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  )
}

export default App 