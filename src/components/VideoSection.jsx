import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative">
      {/* Main video container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="video-container relative group"
      >
        {/* Loading skeleton */}
        {isLoading && (
          <div className="absolute inset-0 bg-secondary/50 backdrop-blur-sm rounded-2xl animate-pulse flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-text-muted font-medium">Carregando vídeo...</p>
            </div>
          </div>
        )}

        {/* Video placeholder (replace with actual video) */}
        <div className="relative aspect-video bg-gradient-to-br from-secondary to-background rounded-2xl overflow-hidden">
          {/* Thumbnail placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-text-light">Mensagem do Rodolfo</h4>
                <p className="text-text-muted text-sm max-w-xs">
                  Clique para ver a mensagem exclusiva sobre o check-in
                </p>
              </div>
            </div>
          </div>

          {/* Play button overlay */}
          <motion.button
            onClick={handlePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-black/40 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary shadow-lg shadow-primary/50">
              <svg className="w-8 h-8 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </motion.button>

          {/* Video element - Replace with actual video when available */}
          {/* 
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/path-to-rodolfo-video.mp4" type="video/mp4" />
          </video>
          */}
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full backdrop-blur-sm border border-primary/50"
        />
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full backdrop-blur-sm border border-purple-500/50"
        />
      </motion.div>

      {/* Video info card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 glass-card p-4 space-y-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
            <span className="text-background font-bold text-xl">R</span>
          </div>
          <div>
            <h5 className="font-semibold text-text-light">Rodolfo Mori</h5>
            <p className="text-sm text-text-muted">Fundador DevClub</p>
          </div>
        </div>
        
        <p className="text-sm text-text-muted leading-relaxed">
          "Se você está aqui, é porque garantiu seu ingresso pro Bootcamp que vai mudar sua vida profissional. 
          Mas ter o ingresso não é suficiente..."
        </p>

        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Ao vivo
          </span>
          <span>2:34 min</span>
          <span className="flex items-center gap-1">
            ❤️ 2.4k
          </span>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute -inset-20 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl -z-10 opacity-50" />
    </div>
  )
}

export default VideoSection 