import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Countdown from './Countdown'
import VideoSection from './VideoSection'
import TypingText from './TypingText'
import CheckinModal from './CheckinModal'
import { useCheckin } from '../contexts/CheckinContext'

const HeroSection = ({ isCheckinModalOpen, setIsCheckinModalOpen }) => {
  const { checkinData, loading } = useCheckin()
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    // Show CTA button much faster
    const timer = setTimeout(() => {
      setShowCTA(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleStartCheckin = () => {
    setIsCheckinModalOpen(true)
  }

  const handleCloseCheckin = () => {
    setIsCheckinModalOpen(false)
  }

  // Show loading while fetching data
  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-muted">Carregando...</p>
        </div>
      </section>
    )
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
        <span className="text-glow" style={{ fontFamily: 'var(--font-sans)' }}>✨ 90% confirmados</span>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          {/* Alert Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30"
          >
            <span className="text-2xl animate-pulse">🚨</span>
            <span className="text-red-400 font-medium" style={{ fontFamily: 'var(--font-sans)' }}>FALTA POUCO!</span>
          </motion.div>

          {/* Main Title with Typing Effect */}
          <div className="space-y-3 lg:space-y-4">
            <div style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
              <TypingText
                text={checkinData?.title || "O Bootcamp Programador em 7 Dias está chegando"}
                className="text-3xl md:text-4xl lg:text-6xl font-bold text-text-light leading-tight"
                delay={0.8}
              />
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-text-muted"
              style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}
            >
              Você precisa confirmar sua presença{' '}
              <span className="text-primary font-semibold text-glow">AGORA</span>
            </motion.h2>
          </div>

          {/* CTA Button - Mobile: Above fold, Desktop: Hidden (shown in right column) */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              className="flex justify-center lg:hidden"
            >
              <button
                onClick={handleStartCheckin}
                className="btn-primary btn-pulse text-xl md:text-2xl px-12 py-6 font-bold uppercase tracking-wide w-full max-w-md"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="flex items-center justify-center gap-3">
                  <span>🚀</span>
                  <span>INICIAR CHECK-IN</span>
                </span>
              </button>
            </motion.div>
          )}

          {/* Countdown - Compact on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="lg:scale-100 scale-90"
          >
            <Countdown targetDate={checkinData?.countdownDate || "2025-08-19T20:00:00"} />
          </motion.div>

          {/* Subtitle - Shorter on mobile */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl"
            style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}
          >
            <span className="hidden lg:inline">🎯 Confirme sua presença e garanta sua vaga no Bootcamp que já transformou a vida de{' '}
            <span className="text-primary font-semibold">milhares de pessoas</span></span>
            <span className="lg:hidden">🎯 Garante sua vaga no Bootcamp que já transformou <span className="text-primary font-semibold">milhares de vidas</span></span>
          </motion.p>

          {/* Warning - Compact on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-3 lg:p-4"
          >
            <p className="text-yellow-400 font-medium flex items-start lg:items-center gap-2 text-sm lg:text-base" style={{ fontFamily: 'var(--font-sans)' }}>
              <span className="text-lg lg:text-xl flex-shrink-0">⚠️</span>
              <span>
                <strong>ATENÇÃO:</strong> <span className="hidden lg:inline">O check-in é OBRIGATÓRIO e deve ser feito até</span><span className="lg:hidden">Check-in até</span> segunda-feira, dia 19 de agosto, às 18h.
              </span>
            </p>
          </motion.div>

        </motion.div>

        {/* Right Column - Video + CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="relative space-y-6 lg:-mt-16 mt-8 lg:mt-0"
        >
          <VideoSection />
          
          {/* CTA Button - Desktop: Right side, Mobile: Hidden (shown in left column) */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              className="hidden lg:flex lg:justify-end"
            >
              <button
                onClick={handleStartCheckin}
                className="btn-primary btn-pulse text-xl md:text-2xl px-12 py-6 font-bold uppercase tracking-wide w-auto"
                style={{ fontFamily: 'var(--font-sans)' }}
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