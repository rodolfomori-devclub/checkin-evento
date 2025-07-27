import React, { useState, useEffect, memo, useRef } from 'react'
import { motion } from 'framer-motion'

const Countdown = memo(({ targetDate }) => {
  const intervalRef = useRef(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }
    }

    calculateTimeLeft()
    intervalRef.current = setInterval(calculateTimeLeft, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [targetDate])

  const timeUnits = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds }
  ]

  return (
    <div className="space-y-6">
      {/* Countdown Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-primary text-glow mb-2">
          CONTAGEM REGRESSIVA
        </h3>
        <p className="text-text-muted">
          Até domingo, 3 de agosto, às 20h
        </p>
      </motion.div>

      {/* Countdown Digits */}
      <div className="flex justify-center gap-4 md:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.1, 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="countdown-digit group hover:scale-105 transition-transform duration-300"
          >
            <motion.div
              key={unit.value} // This will trigger re-animation when value changes
              initial={{ scale: 1.2, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="countdown-number text-red-500"
              style={{
                textShadow: '0 0 10px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.4)'
              }}
            >
              {String(unit.value).padStart(2, '0')}
            </motion.div>
            <div className="countdown-label">
              {unit.label}
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                 style={{
                   boxShadow: '0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3), 0 0 60px rgba(239, 68, 68, 0.1)'
                 }} />
          </motion.div>
        ))}
      </div>

      {/* Pulsing indicator */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex justify-center"
      >
        <div className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50" />
      </motion.div>

      {/* Warning text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center text-text-muted text-sm max-w-md mx-auto"
      >
        ⏰ Após esse prazo, não será possível participar do evento
      </motion.div>
    </div>
  )
})

export default Countdown