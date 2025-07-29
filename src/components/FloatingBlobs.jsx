import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const FloatingBlobs = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])
  // Performance detection
  const isLowPerformance = navigator.deviceMemory < 4 || navigator.hardwareConcurrency < 4;
  
  // Reduce blobs based on device performance
  const blobs = [
    {
      id: 1,
      size: isMobile ? 200 : (isLowPerformance ? 300 : 400),
      x: '10%',
      y: '20%',
      delay: 0,
      duration: isMobile ? 10 : (isLowPerformance ? 12 : 8),
      color: 'primary',
    },
    {
      id: 2,
      size: isMobile ? 150 : (isLowPerformance ? 250 : 300),
      x: '80%',
      y: '60%',
      delay: 2,
      duration: isMobile ? 12 : (isLowPerformance ? 15 : 10),
      color: 'primary-light',
    },
    // Only show additional blobs on high performance devices
    ...(isMobile || isLowPerformance ? [] : [
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
    ]),
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

  // Don't render if reduced motion is preferred
  if (reducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Simple static gradient for reduced motion */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5" />
      </div>
    )
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
          animate={
            isMobile
              ? {
                  // Simpler animation for mobile
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0, 0.3, 0.2, 0.3],
                }
              : {
                  scale: [0.8, 1.2, 0.9, 1],
                  opacity: [0, 0.6, 0.4, 0.6],
                  rotate: [0, 180, 360],
                }
          }
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
            filter: `blur(${isMobile ? 40 : 60}px)`, // Less blur on mobile
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', // Force hardware acceleration
            backfaceVisibility: 'hidden',
          }}
        />
      ))}

      {/* Additional gradient overlays - simplified on mobile */}
      {!isMobile && (
        <>
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
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
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
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          />
        </>
      )}

      {/* Subtle grid enhancement - reduced opacity on mobile */}
      <div className={`absolute inset-0 bg-grid-pattern bg-grid ${isMobile ? 'opacity-10' : 'opacity-30'}`} />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
    </div>
  )
}

export default FloatingBlobs 