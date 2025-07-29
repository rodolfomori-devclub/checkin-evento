import React, { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ParticleSystem = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Detect mobile and reduced motion preferences
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const codeSnippets = [
    'const career = "dev";',
    'function transform() {',
    'if (checkin) {',
    'return success;',
    '}',
    'const bootcamp = new Experience();',
    'async function learn() {',
    'await bootcamp.start();',
    'console.log("Ready!");',
    'class Programmer {',
    'constructor() {',
    'this.skills = [];',
    'npm install future',
    'git commit -m "new life"',
    'import { success } from "./bootcamp"',
    'export default Career;',
    '<developer>',
    '</developer>',
    '// TODO: Change life',
    '/* Start here */',
    'boolean isReady = true;',
    'let dreams = reality;',
    '=> transform()',
  ]

  const particles = useMemo(() => {
    // Don't render particles if reduced motion is preferred
    if (reducedMotion) return []
    
    // Performance detection
    const isLowPerformance = navigator.deviceMemory < 4 || navigator.hardwareConcurrency < 4;
    
    // Safe check for window object
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    
    // Reduce particles based on device performance
    let particleCount;
    if (isLowPerformance) {
      particleCount = 6; // Very few particles for low performance devices
    } else if (isMobile) {
      particleCount = 8; // Reduced for mobile
    } else {
      particleCount = 20; // Reduced from 30 for better performance
    }
    
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      initialX: Math.random() * screenWidth,
      delay: Math.random() * (isMobile ? 10 : 15), // Reduced delays
      duration: (isMobile ? 8 : 12) + Math.random() * 8, // Faster animations
      size: 0.7 + Math.random() * 0.6,
      opacity: (isMobile ? 0.15 : 0.25) + Math.random() * 0.3, // Reduced opacity
    }))
  }, [isMobile, reducedMotion])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.initialX,
            y: '-10vh',
            opacity: 0,
            scale: particle.size,
          }}
          animate={{
            x: particle.initialX + Math.sin(Date.now() * 0.0003 + particle.id) * 30,
            y: '100vh',
            opacity: [0, particle.opacity, particle.opacity, 0],
            scale: [particle.size, particle.size * 1.1, particle.size],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute font-mono text-primary select-none"
          style={{
            fontSize: `${0.6 + Math.random() * 0.4}rem`,
            filter: isMobile ? 'none' : `blur(${Math.random() * 2}px)`, // Remove blur on mobile
            willChange: 'transform',
            transform: 'translateZ(0)', // Force hardware acceleration
            backfaceVisibility: 'hidden', // Optimize for animations
          }}
        >
          {particle.code}
        </motion.div>
      ))}

      {/* Additional floating elements - reduced on mobile */}
      {!reducedMotion && Array.from({ length: isMobile ? 4 : 10 }, (_, i) => {
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
        return (
          <motion.div
            key={`symbol-${i}`}
            initial={{
              x: Math.random() * screenWidth,
              y: '-10vh',
              opacity: 0,
            }}
            animate={{
              x: Math.random() * screenWidth + Math.sin(Date.now() * 0.0002 + i) * 20,
              y: '100vh',
              opacity: [0, isMobile ? 0.08 : 0.1, isMobile ? 0.08 : 0.1, 0],
            }}
            transition={{
              duration: (isMobile ? 10 : 12) + Math.random() * 8,
              delay: Math.random() * (isMobile ? 12 : 15),
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute text-primary/20 select-none pointer-events-none"
            style={{
              fontSize: `${isMobile ? 0.8 : 1 + Math.random() * 2}rem`,
              willChange: 'transform',
              transform: 'translateZ(0)', // Force hardware acceleration
            }}
          >
            {['</', '/>', '{}', '()', '[]', '=>', '&&', '||', '++', '--'][Math.floor(Math.random() * 10)]}
          </motion.div>
        )
      })}

      {/* Geometric shapes - reduced on mobile */}
      {!reducedMotion && Array.from({ length: isMobile ? 3 : 8 }, (_, i) => {
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800
        return (
          <motion.div
            key={`shape-${i}`}
            initial={{
              x: Math.random() * screenWidth,
              y: -50,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * screenWidth + Math.sin(Date.now() * 0.0001 + i) * 15,
              y: screenHeight + 50,
              opacity: [0, isMobile ? 0.08 : 0.1, isMobile ? 0.08 : 0.1, 0],
            }}
            transition={{
              duration: (isMobile ? 15 : 20) + Math.random() * 10,
              delay: Math.random() * (isMobile ? 15 : 20),
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute border border-primary/20 select-none pointer-events-none"
            style={{
              width: `${15 + Math.random() * (isMobile ? 20 : 30)}px`,
              height: `${15 + Math.random() * (isMobile ? 20 : 30)}px`,
              borderRadius: Math.random() > 0.5 ? '50%' : '4px',
              willChange: 'transform',
              transform: 'translateZ(0)', // Force hardware acceleration
            }}
          />
        )
      })}
    </div>
  )
}

export default ParticleSystem 