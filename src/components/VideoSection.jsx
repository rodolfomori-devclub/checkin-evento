import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const VideoSection = () => {

  return (
    <div className="relative">
      {/* Main video container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="video-container relative group"
      >


        {/* Video iframe */}
        <div className="relative aspect-video bg-gradient-to-br from-secondary to-background rounded-2xl overflow-hidden">
          <iframe 
            id="panda-1a9c72f3-b5f7-4062-b44e-f43628f61fb8" 
            src="https://player-vz-857eb61a-4f3.tv.pandavideo.com.br/embed/?v=1a9c72f3-b5f7-4062-b44e-f43628f61fb8" 
            style={{ border: 'none' }} 
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen={true} 
            width="100%" 
            height="100%"
            fetchPriority="high"
            className="w-full h-full object-cover rounded-2xl"
          />
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
          "Confira esta mensagem exclusiva sobre o check-in do Bootcamp Programador em 7 Dias. 
          É fundamental que você confirme sua presença para garantir sua vaga!"
        </p>

        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Disponível
          </span>
          <span>Mensagem importante</span>
          <span className="flex items-center gap-1">
            🎯 Check-in obrigatório
          </span>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute -inset-20 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl -z-10 opacity-50" />
    </div>
  )
}

export default VideoSection 