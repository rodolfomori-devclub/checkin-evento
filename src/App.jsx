import React, { useEffect, useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AuthProvider } from './contexts/AuthContext'
import { CheckinProvider } from './contexts/CheckinContext'

// Public components
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

// Admin components - lazy loaded
const AdminLayout = lazy(() => import('./admin/components/AdminLayout'))
const AdminHome = lazy(() => import('./admin/pages/AdminHome'))
const Login = lazy(() => import('./admin/pages/Login'))
const ProtectedRoute = lazy(() => import('./admin/components/ProtectedRoute'))

// Main check-in page component
const CheckinPage = () => {
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
    
    const loadingTime = isMobile || isLowPerformance ? 300 : 500; // Much faster loading
    
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
    <CheckinProvider>
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
    </CheckinProvider>
  )
}

// 404 Page component
const NotFoundPage = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4">404</div>
      <h1 className="text-2xl font-bold text-text-light mb-4">Página não encontrada</h1>
      <p className="text-text-muted mb-8">A página que você está procurando não existe.</p>
      <a
        href="/"
        className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-all duration-200"
      >
        Voltar ao início
      </a>
    </div>
  </div>
)

function App() {
  // Main app loading fallback
  const AppLoadingFallback = () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-text-muted">Carregando...</p>
      </div>
    </div>
  )

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Admin Login Route */}
          <Route path="/admin/login" element={
            <Suspense fallback={<AppLoadingFallback />}>
              <Login />
            </Suspense>
          } />

          {/* Protected Admin Routes */}
          <Route element={
            <Suspense fallback={<AppLoadingFallback />}>
              <ProtectedRoute />
            </Suspense>
          }>
            <Route path="/admin/dev" element={
              <Suspense fallback={<AppLoadingFallback />}>
                <AdminLayout />
              </Suspense>
            }>
              <Route index element={
                <Suspense fallback={<AppLoadingFallback />}>
                  <AdminHome />
                </Suspense>
              } />
            </Route>
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<CheckinPage />} />
          <Route path="/:slug" element={<CheckinPage />} />
          
          {/* 404 Route */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App