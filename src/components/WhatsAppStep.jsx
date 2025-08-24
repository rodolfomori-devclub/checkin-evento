import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WhatsAppStep = ({ onComplete, playSuccessSound, isActive }) => {
  const [countdown, setCountdown] = useState(3)
  const [showTimer, setShowTimer] = useState(true)
  const [isChecked, setIsChecked] = useState(false)

  // Iniciar contagem regressiva quando o componente ficar ativo
  useEffect(() => {
    if (!isActive) return

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          // Chegou a 0, abrir WhatsApp
          clearInterval(timer)
          window.open('https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i', '_blank')
          setShowTimer(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleContinue = () => {
    if (isChecked) {
      onComplete()
      playSuccessSound()
    } else {
      alert('Por favor, confirme que você entrou no grupo do WhatsApp')
    }
  }

  if (showTimer) {
    return (
      <div className="mb-4 p-6 glass-card">
        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="text-center space-y-3">
              <div className="text-4xl animate-pulse">💬</div>
              <p className="text-text-light font-medium">
                Entre no grupo do WhatsApp
              </p>
              <div className="text-3xl font-bold text-green-500">
                {countdown}
              </div>
              <p className="text-text-muted text-sm">
                Redirecionando automaticamente...
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-4 p-6 glass-card">
      <div className="space-y-6">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-text-light mb-2">
            💬 Entrar no Grupo do WhatsApp
          </h4>
          <p className="text-text-muted text-sm mb-7">
            O link do WhatsApp foi aberto em uma nova aba
          </p>

          <div className="space-y-4">
            <div 
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" 
              onClick={handleCheckboxChange}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-primary bg-transparent border-2 border-primary/30 rounded focus:ring-primary/50 focus:ring-2 cursor-pointer"
              />
              <label className="text-text-light text-sm cursor-pointer flex-1">
                Já entrei no grupo do WhatsApp
              </label>
            </div>
            
            <div className="text-center">
              <p className="text-text-muted text-sm mb-2">Link do Grupo:</p>
              <a
                href="https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 underline text-sm"
              >
                Abrir WhatsApp novamente
              </a>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleContinue}
                disabled={!isChecked}
                className={`px-8 py-3 font-semibold rounded-lg transition-colors duration-200 ${
                  isChecked 
                    ? 'bg-primary hover:bg-primary-light text-white' 
                    : 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppStep