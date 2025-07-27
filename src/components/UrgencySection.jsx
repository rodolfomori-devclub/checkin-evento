import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const UrgencySection = ({ onOpenCheckin }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-background to-primary/5" />
      
      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
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
              <h3 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
                ⚡ Não perca sua vaga por <span className="text-red-500">procrastinação</span>!
              </h3>
              
              <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
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
                  <span>+15% confirmaram nas últimas 2 horas</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Servidor pode travar com 95% das vagas</span>
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