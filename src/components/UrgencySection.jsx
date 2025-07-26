import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const UrgencySection = ({ onOpenCheckin }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Estados para contadores animados
  const [confirmedCount, setConfirmedCount] = useState(0)
  const [availableSpots, setAvailableSpots] = useState(0)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0 })

  // Valores finais
  const finalConfirmedCount = 10847
  const finalAvailableSpots = 153
  const totalSpots = 11000

  // Animação dos contadores
  useEffect(() => {
    if (isInView) {
      // Contador de confirmados
      const confirmedInterval = setInterval(() => {
        setConfirmedCount(prev => {
          if (prev < finalConfirmedCount) {
            return Math.min(prev + Math.ceil((finalConfirmedCount - prev) / 20), finalConfirmedCount)
          }
          clearInterval(confirmedInterval)
          return finalConfirmedCount
        })
      }, 50)

      // Contador de vagas disponíveis
      const spotsInterval = setInterval(() => {
        setAvailableSpots(prev => {
          if (prev < finalAvailableSpots) {
            return Math.min(prev + Math.ceil((finalAvailableSpots - prev) / 30), finalAvailableSpots)
          }
          clearInterval(spotsInterval)
          return finalAvailableSpots
        })
      }, 80)

      return () => {
        clearInterval(confirmedInterval)
        clearInterval(spotsInterval)
      }
    }
  }, [isInView])

  // Timer para deadline (domingo 18h)
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const deadline = new Date()
      deadline.setDate(deadline.getDate() + (7 - deadline.getDay()) % 7) // Próximo domingo
      deadline.setHours(18, 0, 0, 0) // 18h
      
      const diff = deadline - now
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        setTimeLeft({ hours, minutes })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 60000) // Atualiza a cada minuto
    return () => clearInterval(timer)
  }, [])

  const progressPercentage = ((finalConfirmedCount / totalSpots) * 100).toFixed(1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background urgente */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-background to-red-900/5" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      
      {/* Floating alerts */}
      <div className="absolute top-10 left-10 animate-bounce">
        <div className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30">
          <span className="text-red-400 font-semibold text-sm">⚠️ VAGAS LIMITADAS</span>
        </div>
      </div>
      
      <div className="absolute top-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-500/30">
          <span className="text-yellow-400 font-semibold text-sm">🔥 ENCERRANDO</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="inline-flex items-center gap-3 bg-red-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500/20 mb-6"
          >
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <span className="text-red-400 font-bold text-lg uppercase tracking-wide">ÚLTIMAS VAGAS</span>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            Mais de <span className="text-red-500">10.000 pessoas</span> já confirmaram presença!
          </h2>
          
          <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed">
            A sala virtual tem <span className="text-primary font-semibold">limite de {totalSpots.toLocaleString()} pessoas</span> e pode travar se muita gente tentar entrar de última hora
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Confirmados */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light animate-pulse" />
              
              <div className="text-5xl md:text-6xl font-mono font-bold text-primary mb-4">
                {confirmedCount.toLocaleString()}
              </div>
              
              <h3 className="text-xl font-bold text-text-light mb-2">Pessoas Confirmadas</h3>
              <p className="text-text-muted">E o número não para de subir!</p>
              
              {/* Progress bar */}
              <div className="mt-6 bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${progressPercentage}%` } : {}}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-primary-light"
                />
              </div>
              <p className="text-sm text-text-muted mt-2">{progressPercentage}% da capacidade</p>
            </div>
          </motion.div>

          {/* Vagas Restantes */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 animate-pulse" />
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl md:text-6xl font-mono font-bold text-red-500 mb-4"
              >
                {availableSpots}
              </motion.div>
              
              <h3 className="text-xl font-bold text-text-light mb-2">Vagas Restantes</h3>
              <p className="text-text-muted">Diminuindo a cada minuto</p>
              
              {/* Urgency indicator */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      backgroundColor: i < 2 ? "#ef4444" : "#64748b",
                      scale: i < 2 ? [1, 1.2, 1] : 1
                    }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: i < 2 ? Infinity : 0,
                      delay: i * 0.1 
                    }}
                    className="w-3 h-3 rounded-full"
                  />
                ))}
              </div>
              <p className="text-sm text-red-400 mt-2">⚠️ Nível de urgência: ALTO</p>
            </div>
          </motion.div>

          {/* Tempo Restante */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse" />
              
              <div className="text-3xl md:text-4xl font-mono font-bold text-yellow-500 mb-4">
                {timeLeft.hours}h {timeLeft.minutes}m
              </div>
              
              <h3 className="text-xl font-bold text-text-light mb-2">Para Encerrar</h3>
              <p className="text-text-muted">Check-in termina domingo às 18h</p>
              
              {/* Countdown visual */}
              <div className="mt-6">
                <div className="flex justify-center gap-1">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        opacity: [1, 0.3, 1],
                        height: [16, 8, 16]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: i * 0.1 
                      }}
                      className="w-1 bg-gradient-to-t from-yellow-500 to-orange-500 rounded-full"
                      style={{ height: '16px' }}
                    />
                  ))}
                </div>
                <p className="text-sm text-yellow-400 mt-2">⏰ Tempo se esgotando</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-r from-red-500/10 to-primary/10 border border-red-500/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-red-500 animate-bounce">⚠️</div>
            <div className="absolute top-4 right-4 text-yellow-500 animate-bounce" style={{ animationDelay: '0.5s' }}>🔥</div>
            <div className="absolute bottom-4 left-4 text-primary animate-bounce" style={{ animationDelay: '1s' }}>🚀</div>
            <div className="absolute bottom-4 right-4 text-red-500 animate-bounce" style={{ animationDelay: '1.5s' }}>⏰</div>

            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
                ⚡ Não perca sua vaga por <span className="text-red-500">procrastinação</span>!
              </h3>
              
              <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
                Enquanto você está lendo isso, outras pessoas estão fazendo check-in. 
                <br className="hidden md:block" />
                <span className="text-primary font-semibold">Garante sua vaga AGORA</span> antes que seja tarde!
              </p>

                             <motion.button
                 onClick={onOpenCheckin}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 animate={{ 
                   boxShadow: [
                     "0 0 20px rgba(239, 68, 68, 0.5)",
                     "0 0 40px rgba(239, 68, 68, 0.8)",
                     "0 0 20px rgba(239, 68, 68, 0.5)"
                   ]
                 }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 className="inline-flex items-center gap-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-2xl uppercase tracking-wide transition-all duration-300 relative overflow-hidden group"
               >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  🚨
                </motion.span>
                
                <span>FAZER CHECK-IN URGENTE</span>
                
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  🚀
                </motion.span>
              </motion.button>

              {/* Social proof */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>+50 pessoas confirmaram nas últimas 2 horas</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Servidor pode travar com +11mil pessoas</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default UrgencySection 