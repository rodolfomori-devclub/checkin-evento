import React, { useEffect, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ParticleSystem from './components/ParticleSystem'
import FloatingBlobs from './components/FloatingBlobs'

// Lazy load non-critical components
const ScheduleSection = lazy(() => import('./components/ScheduleSection'))
const FirstClassSection = lazy(() => import('./components/FirstClassSection'))
const UrgencySection = lazy(() => import('./components/UrgencySection'))
const FAQSection = lazy(() => import('./components/FAQSection'))
const Footer = lazy(() => import('./components/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))

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
    // Debounced parallax effect on scroll for better performance
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const rate = scrolled * -0.5
          
          const parallaxElements = document.querySelectorAll('.parallax')
          parallaxElements.forEach(element => {
            element.style.transform = `translate3d(0, ${rate}px, 0)`
          })
          
          ticking = false
        })
        ticking = true
      }
    }

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Loading fallback component
  const LoadingFallback = ({ height = "200px" }) => (
    <div className="flex items-center justify-center" style={{ height }}>
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  )

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
        
        <Suspense fallback={<LoadingFallback height="400px" />}>
          <ScheduleSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback height="300px" />}>
          <FirstClassSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback height="350px" />}>
          <UrgencySection 
            onOpenCheckin={() => setIsCheckinModalOpen(true)}
          />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback height="500px" />}>
          <FAQSection 
            onOpenCheckin={() => setIsCheckinModalOpen(true)}
          />
        </Suspense>
      </motion.main>
      
      {/* Footer */}
      <Suspense fallback={<LoadingFallback height="400px" />}>
        <Footer 
          onOpenCheckin={() => setIsCheckinModalOpen(true)}
        />
      </Suspense>
      
      {/* Floating WhatsApp button */}
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  )
}

export default App 