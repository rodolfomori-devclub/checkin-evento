import React from 'react'
import { motion } from 'framer-motion'

const FloatingBlobs = () => {
  const blobs = [
    {
      id: 1,
      size: 400,
      x: '10%',
      y: '20%',
      delay: 0,
      duration: 8,
      color: 'primary',
    },
    {
      id: 2,
      size: 300,
      x: '80%',
      y: '60%',
      delay: 2,
      duration: 10,
      color: 'primary-light',
    },
    {
      id: 3,
      size: 250,
      x: '60%',
      y: '10%',
      delay: 4,
      duration: 12,
      color: 'primary-dark',
    },
    {
      id: 4,
      size: 350,
      x: '20%',
      y: '70%',
      delay: 1,
      duration: 9,
      color: 'primary',
    },
    {
      id: 5,
      size: 200,
      x: '90%',
      y: '30%',
      delay: 3,
      duration: 7,
      color: 'primary-light',
    },
  ]

  const getColorClass = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10'
      case 'primary-light':
        return 'bg-primary-light/8'
      case 'primary-dark':
        return 'bg-primary-dark/12'
      default:
        return 'bg-primary/10'
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          initial={{
            x: blob.x,
            y: blob.y,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0.8, 1.2, 0.9, 1],
            opacity: [0, 0.6, 0.4, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full blur-3xl ${getColorClass(blob.color)}`}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            filter: `blur(60px)`,
            willChange: 'transform',
          }}
        />
      ))}

      {/* Additional gradient overlays */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-primary-light/20 to-cyan-500/20 rounded-full blur-3xl"
      />

      {/* Subtle grid enhancement */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
    </div>
  )
}

export default FloatingBlobs 