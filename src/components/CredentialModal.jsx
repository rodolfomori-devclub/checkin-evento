import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CredentialModal = ({ isOpen, onClose, credentialImage, ticketId, userName }) => {
  const socialNetworks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'bg-[#0077B5] hover:bg-[#005885] border border-[#0077B5]/20',
      action: () => shareOnLinkedIn()
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#FCAF45] hover:from-[#C13584] hover:via-[#E1306C] hover:to-[#F56040] border border-pink-500/20',
      action: () => downloadImage()
    },
    {
      name: 'Twitter/X',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'bg-black hover:bg-gray-800 border border-gray-600/20',
      action: () => shareOnTwitter()
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"/>
        </svg>
      ),
      color: 'bg-[#25D366] hover:bg-[#1DA851] border border-green-400/20',
      action: () => shareOnWhatsApp()
    }
  ]

  const shareOnLinkedIn = () => {
    const text = `🚀 Acabei de confirmar minha presença no Bootcamp Programador em 7 Dias da DevClub! 

7 dias intensivos que podem mudar minha carreira na programação. Do zero ao primeiro emprego como desenvolvedor!

#DevClub #Programação #Bootcamp #CarreiraTech`

    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}&text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'width=600,height=400')
  }

  const shareOnTwitter = () => {
    const text = `🚀 Confirmado no Bootcamp Programador em 7 Dias da @DevClub! 

7 dias que podem mudar minha vida profissional 💻✨

#DevClub #Programação #Bootcamp #Tech`

    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin)}`
    window.open(url, '_blank', 'width=600,height=400')
  }

  const shareOnWhatsApp = () => {
    const text = `🚀 *Bootcamp Programador em 7 Dias - DevClub*

Acabei de confirmar minha presença no bootcamp que pode mudar minha vida profissional!

✅ *Meu ingresso:* #DC2025-${String(ticketId).padStart(4, '0')}
📅 *Data:* 3-9 de Agosto, 2025
💻 *Modalidade:* 100% Online

Vem comigo nessa jornada! ${window.location.origin}`

          const url = `https://go.rodolfomori.com.br/suporte`
    window.open(url, '_blank')
  }

  const downloadImage = () => {
    if (credentialImage) {
      const link = document.createElement('a')
      link.download = `devclub-ingresso-${userName?.replace(/\s+/g, '-')?.toLowerCase() || 'participante'}.png`
      link.href = credentialImage
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const copyImageToClipboard = async () => {
    try {
      if (credentialImage) {
        // Converter data URL para blob
        const response = await fetch(credentialImage)
        const blob = await response.blob()
        
        // Copiar para clipboard
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ])
        
        // Mostrar feedback visual
        alert('✅ Imagem copiada para a área de transferência!')
      }
    } catch (error) {
      console.error('Erro ao copiar imagem:', error)
      // Fallback para download
      downloadImage()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="glass-card p-6 md:p-8 relative bg-gradient-to-br from-background via-secondary/20 to-background border border-primary/20 shadow-2xl">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-t-2xl" />
            
            {/* Background decoration */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-all duration-300"
            >
              ✕
            </motion.button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8 relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full border border-primary/30 mb-6">
                  <div className="text-4xl animate-bounce">🎉</div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, y: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [-20, -60, -100]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut"
                      }}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        left: `${-30 + (i * 12)}px`,
                        top: '10px'
                      }}
                    />
                  ))}
                </div>
              </div>

              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-text-light mb-4 bg-gradient-to-r from-text-light via-primary to-text-light bg-clip-text text-transparent bg-300% animate-gradient-x"
              >
                🎫 Seu Ingresso foi Gerado!
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed"
              >
                Agora é só compartilhar e se preparar para os{' '}
                <span className="text-primary font-semibold">7 dias que vão transformar sua vida!</span>
                <br />
                <span className="text-sm text-text-muted/80">
                  Sua jornada para se tornar um programador profissional começa aqui 🚀
                </span>
              </motion.p>
            </motion.div>

            {/* Credential Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 flex justify-center"
            >
              {credentialImage && (
                <div className="relative group">
                  <img
                    src={credentialImage}
                    alt="Credencial do Bootcamp"
                    className="max-w-full h-auto rounded-lg shadow-2xl border border-primary/20 group-hover:scale-105 transition-transform duration-300"
                    style={{ maxHeight: '400px' }}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-text-light font-semibold">Clique para ampliar</span>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {/* Download & Copy */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={downloadImage}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(55, 227, 89, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-background font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse" />
                  </div>
                  
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <span className="relative z-10">Baixar Imagem</span>
                </motion.button>

                <motion.button
                  onClick={copyImageToClipboard}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(255, 255, 255, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary/30 text-text-light font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                  </div>
                  
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
                    </svg>
                  </div>
                  <span className="relative z-10">Copiar Imagem</span>
                </motion.button>
              </div>

              {/* Social Sharing */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-text-light mb-4" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
                  Compartilhe nas Redes Sociais
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {socialNetworks.map((social, index) => (
                    <motion.button
                      key={social.name}
                      onClick={social.action}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        ${social.color} text-white font-semibold
                        p-6 rounded-2xl transition-all duration-300
                        flex flex-col items-center gap-3 group
                        shadow-lg hover:shadow-xl backdrop-blur-sm
                        relative overflow-hidden
                      `}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                      </div>
                      
                      {/* Icon container */}
                      <div className="relative z-10 p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                        {social.icon}
                      </div>
                      
                      {/* Name */}
                      <span className="text-sm font-bold relative z-10 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-text-light" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
                      Dicas de Compartilhamento
                    </h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Instagram Tips */}
                    <div className="glass-card p-4 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-pink-400" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <h5 className="font-bold text-text-light">Instagram</h5>
                      </div>
                      <ul className="text-sm text-text-muted space-y-1">
                        <li>• Baixe a imagem e poste no feed</li>
                        <li>• Use nos stories com #DevClub</li>
                        <li>• Marque @devclub.oficial</li>
                      </ul>
                    </div>

                    {/* LinkedIn Tips */}
                    <div className="glass-card p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                        <h5 className="font-bold text-text-light">LinkedIn</h5>
                      </div>
                      <ul className="text-sm text-text-muted space-y-1">
                        <li>• Compartilhe no seu perfil</li>
                        <li>• Use hashtags #DevClub #Tech</li>
                        <li>• Conecte com outros dev</li>
                      </ul>
                    </div>

                    {/* WhatsApp Tips */}
                    <div className="glass-card p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"/>
                          </svg>
                        </div>
                        <h5 className="font-bold text-text-light">WhatsApp</h5>
                      </div>
                      <ul className="text-sm text-text-muted space-y-1">
                        <li>• Envie para amigos interessados</li>
                        <li>• Compartilhe em grupos de tech</li>
                        <li>• Convide para estudar junto</li>
                      </ul>
                    </div>

                    {/* Twitter/X Tips */}
                    <div className="glass-card p-4 bg-gradient-to-br from-gray-600/10 to-gray-800/10 border border-gray-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gray-600/20 rounded-lg">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </div>
                        <h5 className="font-bold text-text-light">Twitter/X</h5>
                      </div>
                      <ul className="text-sm text-text-muted space-y-1">
                        <li>• Thread com sua jornada</li>
                        <li>• Retweet com comentário</li>
                        <li>• Use #DevClub #100DaysOfCode</li>
                      </ul>
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="mt-6 text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <p className="text-text-light font-semibold mb-2">
                      🎯 Quanto mais você compartilhar, mais pessoas você pode inspirar!
                    </p>
                    <p className="text-sm text-text-muted">
                      Sua credencial pode ser o empurrão que alguém precisa para mudar de vida através da programação.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default CredentialModal 