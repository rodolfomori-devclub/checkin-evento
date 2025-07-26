import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Countdown from './Countdown'
import VideoSection from './VideoSection'
import TypingText from './TypingText'
import CheckinModal from './CheckinModal'

const HeroSection = ({ isCheckinModalOpen, setIsCheckinModalOpen }) => {
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    // Show CTA button after typing animation completes
    const timer = setTimeout(() => {
      setShowCTA(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const handleStartCheckin = () => {
    setIsCheckinModalOpen(true)
  }

  const handleCloseCheckin = () => {
    setIsCheckinModalOpen(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Badge flutuante */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="badge-float"
      >
        <span className="text-glow">✨ 10.000+ confirmados</span>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          {/* Alert Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30"
          >
            <span className="text-2xl animate-pulse">🚨</span>
            <span className="text-red-400 font-medium">FALTA POUCO!</span>
          </motion.div>

          {/* Main Title with Typing Effect */}
          <div className="space-y-4">
            <TypingText
              text="O Bootcamp Programador em 7 Dias está chegando"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light leading-tight"
              delay={0.8}
            />
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-text-muted"
            >
              Você precisa confirmar sua presença{' '}
              <span className="text-primary font-semibold text-glow">AGORA</span>
            </motion.h2>
          </div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <Countdown targetDate="2025-08-03T20:00:00" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl"
          >
            🎯 Confirme sua presença e garanta sua vaga no Bootcamp que já transformou a vida de{' '}
            <span className="text-primary font-semibold">milhares de pessoas</span>
          </motion.p>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4"
          >
            <p className="text-yellow-400 font-medium flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              <span>
                <strong>ATENÇÃO:</strong> O check-in é OBRIGATÓRIO e deve ser feito até domingo, dia 3 de agosto, às 18h.
              </span>
            </p>
          </motion.div>

        </motion.div>

        {/* Right Column - Video + CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="relative space-y-6 lg:-mt-16"
        >
          <VideoSection />
          
          {/* CTA Button - Desktop: Right side, Mobile: Below content */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <button
                onClick={handleStartCheckin}
                className="btn-primary btn-pulse text-xl md:text-2xl px-12 py-6 font-bold uppercase tracking-wide w-full lg:w-auto"
              >
                <span className="flex items-center justify-center gap-3">
                  <span>🚀</span>
                  <span>INICIAR CHECK-IN</span>
                </span>
              </button>
            </motion.div>
          )}

          {/* Terminal decoration - Desktop: Right side below button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="hidden lg:block lg:max-w-sm lg:ml-auto"
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-sm text-gray-400 ml-4">bootcamp-checkin.js</span>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-green-400 font-mono text-sm">
                  $ npm run start-journey
                </div>
                <div className="text-primary font-mono text-sm">
                  {">"} Iniciando transformação...
                </div>
                <div className="text-text-muted font-mono text-sm">
                  {">"} Carregando oportunidades...
                </div>
                <div className="text-primary font-mono text-sm animate-pulse">
                  {">"} Aguardando check-in_
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>



      {/* Code snippets decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute top-20 right-20 hidden xl:block"
      >
        <div className="font-mono text-sm text-primary space-y-1">
          <div>{"<programmer>"}</div>
          <div className="ml-4">const future = "dev";</div>
          <div className="ml-4">if (checkin) {"{"}</div>
          <div className="ml-8">career.transform();</div>
          <div className="ml-4">{"}"}</div>
          <div>{"</programmer>"}</div>
        </div>
      </motion.div>

      {/* Check-in Modal */}
      <CheckinModal 
        isOpen={isCheckinModalOpen} 
        onClose={handleCloseCheckin} 
      />
    </section>
  )
}

export default HeroSection 