import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CheckinSteps from './CheckinSteps'

const CheckinModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const [userData, setUserData] = useState({
    name: ''
  })

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Don't block body scroll, let modal handle its own scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleStepComplete = (stepIndex, data = {}) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps(prev => [...prev, stepIndex])
    }
    
    // Update user data if provided
    if (data) {
      setUserData(prev => ({ ...prev, ...data }))
    }
    
    // Move to next step if not the last one
    if (stepIndex === currentStep && stepIndex < 4) {
      setTimeout(() => {
        setCurrentStep(stepIndex + 1)
      }, 500)
    }
  }

  const resetModal = () => {
    setCurrentStep(0)
    setCompletedSteps([])
    setUserData({ name: '' })
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        />
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Content */}
          <div className="glass-card p-4 md:p-8 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 group z-10"
            >
              <svg className="w-5 h-5 text-text-light group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-2">
                🚀 <span className="text-gradient">Check-in Interativo</span>
              </h2>
              <p className="text-text-muted text-lg">
                Complete as 5 etapas para confirmar sua presença no bootcamp
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-text-muted">Progresso</span>
                <span className="text-sm text-primary font-semibold">
                  {completedSteps.length}/5 concluídas
                </span>
              </div>
              
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedSteps.length / 5) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-primary-light"
                />
              </div>
            </motion.div>

            {/* Steps Component */}
            <CheckinSteps
              currentStep={currentStep}
              completedSteps={completedSteps}
              userData={userData}
              onStepComplete={handleStepComplete}
              onClose={handleClose}
            />

            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default CheckinModal 