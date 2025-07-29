import React, { useEffect, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ParticleSystem from './components/ParticleSystem'
import FloatingBlobs from './components/FloatingBlobs'
import CheckinModal from './components/CheckinModal'

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

  const handleOpenCheckin = () => {
    // Facebook Pixel - Track check-in modal open
    if (typeof fbq !== 'undefined') {
      fbq('track', 'CustomEvent', {
        event_name: 'CheckinModalOpen',
        content_name: 'Check-in Bootcamp Programador em 7 Dias'
      });
    }
    setIsCheckinModalOpen(true)
  }

  useEffect(() => {
    // Optimized loading time based on device performance
    const isMobile = window.innerWidth <= 768;
    const isLowPerformance = navigator.deviceMemory < 4 || navigator.hardwareConcurrency < 4;
    
    const loadingTime = isMobile || isLowPerformance ? 1000 : 1500; // Faster on mobile/low-end devices
    
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, loadingTime)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Optimized parallax effect on scroll for better performance
    let ticking = false
    const isMobile = window.innerWidth <= 768;
    const isLowPerformance = navigator.deviceMemory < 4 || navigator.hardwareConcurrency < 4;
    
    // Disable parallax on mobile/low performance devices
    if (isMobile || isLowPerformance) {
      return;
    }
    
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
          setIsCheckinModalOpen={handleOpenCheckin}
        />
        
        <Suspense fallback={<LoadingFallback height="400px" />}>
          <ScheduleSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback height="300px" />}>
          <FirstClassSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback height="350px" />}>
          <UrgencySection 
            onOpenCheckin={handleOpenCheckin}
          />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback height="500px" />}>
          <FAQSection 
            onOpenCheckin={handleOpenCheckin}
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
      
      {/* Check-in Modal */}
      <CheckinModal 
        isOpen={isCheckinModalOpen}
        onClose={() => setIsCheckinModalOpen(false)}
      />
    </div>
  )
}

export default App 