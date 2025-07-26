import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const ParticleSystem = () => {
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
    // Safe check for window object
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      initialX: Math.random() * screenWidth,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
      size: 0.7 + Math.random() * 0.6,
      opacity: 0.3 + Math.random() * 0.4,
    }))
  }, [])

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
            filter: `blur(${Math.random() * 2}px)`,
            willChange: 'transform',
          }}
        >
          {particle.code}
        </motion.div>
      ))}

      {/* Additional floating elements */}
      {Array.from({ length: 10 }, (_, i) => {
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
              opacity: [0, 0.1, 0.1, 0],
            }}
          transition={{
            duration: 12 + Math.random() * 8,
            delay: Math.random() * 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute text-primary/20 select-none pointer-events-none"
          style={{
            fontSize: `${1 + Math.random() * 2}rem`,
            willChange: 'transform',
          }}
        >
          {['</', '/>', '{}', '()', '[]', '=>', '&&', '||', '++', '--'][Math.floor(Math.random() * 10)]}
        </motion.div>
        )
      })}

      {/* Geometric shapes */}
      {Array.from({ length: 8 }, (_, i) => {
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
              opacity: [0, 0.1, 0.1, 0],
            }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: Math.random() * 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute border border-primary/20 select-none pointer-events-none"
          style={{
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '4px',
            willChange: 'transform',
          }}
        />
        )
      })}
    </div>
  )
}

export default ParticleSystem 