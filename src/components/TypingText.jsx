import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypingText = ({ text, className = '', delay = 0, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout

    const startTyping = () => {
      let index = 0
      const typeChar = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
          timeout = setTimeout(typeChar, speed)
        } else {
          setIsComplete(true)
          // Hide cursor after completion
          setTimeout(() => setShowCursor(false), 1000)
        }
      }
      typeChar()
    }

    // Start typing after delay
    const startTimeout = setTimeout(startTyping, delay * 1000)

    return () => {
      clearTimeout(timeout)
      clearTimeout(startTimeout)
    }
  }, [text, delay, speed])

  // Cursor blinking effect
  useEffect(() => {
    if (!isComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 500)

      return () => clearInterval(cursorInterval)
    }
  }, [isComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
      className={`relative ${className}`}
    >
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block w-1 bg-primary ml-1"
        style={{ height: '1em' }}
      >
        |
      </motion.span>
    </motion.div>
  )
}

export default TypingText 