import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CredentialGenerator from './CredentialGenerator'
import CredentialModal from './CredentialModal'

const CheckinSteps = ({ currentStep, completedSteps, userData, onStepComplete, onClose }) => {
  const [formData, setFormData] = useState({
    name: userData.name || ''
  })
  const [userPhoto, setUserPhoto] = useState(null)
  const [credentialImage, setCredentialImage] = useState(null)
  const [ticketId, setTicketId] = useState(null)
  const [isCredentialModalOpen, setIsCredentialModalOpen] = useState(false)
  const [shouldGenerateCredential, setShouldGenerateCredential] = useState(false)
  
  // Novos estados para os checkboxes
  const [zoomCheckbox, setZoomCheckbox] = useState(false)
  const [equipmentCheckboxes, setEquipmentCheckboxes] = useState({
    computer: false,
    paper: false,
    pen: false,
    quietPlace: false,
    internet: false
  })
  
  const audioRef = useRef(null)
  const fileInputRef = useRef(null)

  // Sound effect for completed steps
  const playSuccessSound = () => {
    try {
      // Create a simple success beep using Web Audio API
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1)
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.2)
    } catch (error) {
      console.log('Audio not supported')
    }
  }

  const steps = [
    {
      id: 0,
      icon: '👤',
      title: 'Confirmar Dados',
      description: 'Digite seu nome completo para o ingresso',
      buttonText: `Confirmo que sou ${formData.name || '[NOME]'}`,
      color: 'bg-blue-500',
      type: 'form'
    },
    {
      id: 1,
      icon: '📅',
      title: 'Adicionar na Agenda',
      description: 'Adicione o evento no seu Google Calendar com link do Zoom',
      buttonText: 'Adicionei no meu calendário',
      color: 'bg-purple-500',
      type: 'action'
    },
    {
      id: 2,
      icon: '💬',
      title: 'Entrar no WhatsApp',
      description: 'Junte-se ao grupo exclusivo do bootcamp',
      buttonText: 'Entrei no grupo exclusivo',
      color: 'bg-green-500',
      type: 'external'
    },
    {
      id: 3,
      icon: '📹',
      title: 'Configurar Zoom',
      description: 'Baixe o Zoom e teste áudio/vídeo',
      buttonText: 'Zoom configurado e testado',
      color: 'bg-indigo-500',
      type: 'zoom'
    },
    {
      id: 4,
      icon: '💻',
      title: 'Preparar Ambiente',
      description: 'Certifique-se de ter tudo pronto',
      buttonText: 'Tenho tudo preparado',
      color: 'bg-orange-500',
      type: 'equipment'
    },
    {
      id: 5,
      icon: '🎫',
      title: 'Gerar Ingresso Personalizado',
      description: 'Adicione sua foto e gere seu ingresso exclusivo',
      buttonText: 'Gerar Meu Ingresso',
      color: 'bg-primary',
      type: 'credential'
    }
  ]

  const handleStepAction = (stepIndex) => {
    console.log(`🔥 handleStepAction chamado para step ${stepIndex}`)
    
    if (stepIndex === 0) {
      // Handle form submission for step 1
      if (!formData.name.trim()) {
        alert('Por favor, digite seu nome completo')
        return
      }
             onStepComplete(stepIndex, { name: formData.name })
    } else if (stepIndex === 1) {
      // Open Google Calendar for step 2 - Bootcamp Programador em 7 dias
      // Data: 03/08/2024 das 20:00-21:00 (Brasília) | 23:00-00:00 (UTC)
      // Local: Zoom Meeting ID 87179390873
      const calendarUrl = "https://www.google.com/calendar/render?action=TEMPLATE&text=Bootcamp+Programador+em+7+dias&details=Link+da+call%3A+https%3A%2F%2Fus06web.zoom.us%2Fj%2F87179390873%3Fpwd%3DFBqdR8inouCNsKmFbmW4l4QIjWXe0I.1&location=https%3A%2F%2Fus06web.zoom.us%2Fj%2F87179390873%3Fpwd%3DFBqdR8inouCNsKmFbmW4l4QIjWXe0I.1&dates=20240803T230000Z%2F20240804T000000Z"
      
      try {
        const newWindow = window.open(calendarUrl, '_blank')
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
          // Popup foi bloqueado, mostrar fallback
          if (confirm('📅 Vamos abrir o Google Calendar para você adicionar o evento!\n\nSe o popup foi bloqueado, clique OK para tentar novamente.')) {
            window.location.href = calendarUrl
          }
        }
      } catch (error) {
        // Fallback caso haja erro
        window.location.href = calendarUrl
      }
      
      setTimeout(() => onStepComplete(stepIndex), 1000)
    } else if (stepIndex === 2) {
      // Open WhatsApp for step 3
      const whatsappUrl = "https://go.rodolfomori.com.br/suporte"
      window.open(whatsappUrl, '_blank')
      setTimeout(() => onStepComplete(stepIndex), 1000)
    } else if (stepIndex === 3) {
      // Zoom configuration step
      if (!zoomCheckbox) {
        alert('Por favor, confirme que você baixou o Zoom e testou áudio/vídeo')
        return
      }
      onStepComplete(stepIndex)
    } else if (stepIndex === 4) {
      // Equipment preparation step
      const allChecked = Object.values(equipmentCheckboxes).every(checked => checked)
      if (!allChecked) {
        alert('Por favor, confirme todos os itens necessários')
        return
      }
      onStepComplete(stepIndex)
    } else if (stepIndex === 5) {
      console.log('🎫 Step 5 (credencial) detectado!')
      // Gerar credencial
      generateCredential()
      return
    } else {
      onStepComplete(stepIndex)
    }
    
    playSuccessSound()
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Validar tipo de arquivo
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem (JPG, PNG, etc.)')
        return
      }
      
      // Validar tamanho (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 5MB')
        return
      }

      // Criar preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setUserPhoto(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateCredential = () => {
    console.log('🎯 generateCredential chamado!')
    console.log('📝 Nome:', formData.name)
    console.log('📸 Foto:', !!userPhoto)
    // Trigger credential generation
    setShouldGenerateCredential(true)
    console.log('✅ shouldGenerateCredential definido como true')
  }

  const onCredentialGenerated = (imageData, generatedTicketId) => {
    console.log('🎉 Credencial recebida!', { generatedTicketId, imageSize: imageData.length })
    setCredentialImage(imageData)
    setTicketId(generatedTicketId)
    setIsCredentialModalOpen(true)
    setShouldGenerateCredential(false) // Reset do trigger
    onStepComplete(5) // Completar o último passo
    playSuccessSound()
  }

  // Reset checkboxes when modal is closed
  useEffect(() => {
    if (currentStep === 0) {
      setZoomCheckbox(false)
      setEquipmentCheckboxes({
        computer: false,
        paper: false,
        pen: false,
        quietPlace: false,
        internet: false
      })
    }
  }, [currentStep])

  const isStepAccessible = (stepIndex) => {
    return stepIndex <= currentStep
  }

  const isStepCompleted = (stepIndex) => {
    return completedSteps.includes(stepIndex)
  }

  const StepButton = ({ step, isAccessible, isCompleted, isCurrent }) => (
    <motion.button
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: isAccessible && !isCompleted ? 1.05 : 1,
        y: isAccessible && !isCompleted ? -2 : 0
      }}
      whileTap={{ scale: 0.95 }}
      disabled={!isAccessible || isCompleted}
      onClick={() => handleStepAction(step.id)}
             className={`
         relative w-full p-3 md:p-4 rounded-xl border-2 transition-all duration-300
        ${isCompleted 
          ? 'bg-primary/20 border-primary text-primary' 
          : isAccessible 
            ? `${step.color}/20 border-${step.color.split('-')[1]}-500 hover:${step.color}/30 text-text-light`
            : 'bg-gray-500/10 border-gray-500/30 text-gray-500 cursor-not-allowed'
        }
        ${isCurrent ? 'ring-2 ring-primary/50 animate-pulse' : ''}
      `}
    >
      {/* Completion Check */}
      {isCompleted && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
      )}

      <div className="flex items-center gap-4">
        <div className="text-2xl">{step.icon}</div>
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-lg">{step.title}</h3>
          <p className="text-sm opacity-80 mb-2">{step.description}</p>
          <div className={`
            inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
            ${isCompleted ? 'bg-primary/20 text-primary' : 'bg-white/10 text-current'}
          `}>
            {isCompleted ? '✅ Concluído' : step.buttonText}
          </div>
        </div>
      </div>
    </motion.button>
  )

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Steps List */}
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {/* Step 1 - Form */}
          {step.id === 0 && currentStep === 0 && !isStepCompleted(0) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-4 p-4 glass-card"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    autoFocus
                  />
                  <p className="text-xs text-text-muted mt-2">
                    Este nome aparecerá no seu ingresso personalizado
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5 - Credential Generation */}
          {step.id === 5 && currentStep === 5 && !isStepCompleted(5) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-4 p-6 glass-card"
            >
              <div className="text-center space-y-6">
                {/* Upload Area */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-text-light">
                    📸 Adicione sua foto (opcional)
                  </h4>
                  
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-primary/30 hover:border-primary/50 rounded-xl p-8 cursor-pointer transition-all duration-300 group"
                  >
                    {userPhoto ? (
                      <div className="space-y-4">
                        <img
                          src={userPhoto}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-primary/30"
                        />
                        <p className="text-text-muted">Clique para trocar a foto</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          📷
                        </div>
                        <div>
                          <p className="text-text-light font-medium">
                            Clique para adicionar sua foto
                          </p>
                          <p className="text-sm text-text-muted mt-2">
                            JPG, PNG até 5MB • Opcional
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                {/* Preview Info */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <p className="text-text-light text-sm">
                    <strong>Seu ingresso terá:</strong><br />
                    • Seu nome: <span className="text-primary">{formData.name}</span><br />
                    • ID único personalizado<br />
                    • Design exclusivo DevClub<br />
                    • Ideal para compartilhar nas redes sociais
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3 - Zoom Configuration */}
          {step.id === 3 && currentStep === 3 && !isStepCompleted(3) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-4 p-6 glass-card"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-text-light mb-2">
                    📹 Configure o Zoom
                  </h4>
                  <p className="text-text-muted text-sm">
                    Para participar das aulas ao vivo, você precisa ter o Zoom instalado e testado
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                    <h5 className="font-medium text-text-light mb-3">Passos necessários:</h5>
                    <div className="space-y-3">
                      {[
                        'Baixar o Zoom (gratuito)',
                        'Criar uma conta no Zoom',
                        'Testar microfone e câmera',
                        'Verificar se o áudio está funcionando'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-text-light text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <input
                      type="checkbox"
                      id="zoom-checkbox"
                      checked={zoomCheckbox}
                      onChange={(e) => setZoomCheckbox(e.target.checked)}
                      className="w-5 h-5 text-primary bg-transparent border-2 border-primary/30 rounded focus:ring-primary/50 focus:ring-2"
                    />
                    <label htmlFor="zoom-checkbox" className="text-text-light text-sm cursor-pointer">
                      <strong>Confirmo que:</strong> Baixei o Zoom, criei uma conta e testei meu áudio e vídeo
                    </label>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://zoom.us/download"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors duration-200"
                    >
                      📥 Baixar Zoom
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4 - Equipment Checklist */}
          {step.id === 4 && currentStep === 4 && !isStepCompleted(4) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-4 p-6 glass-card"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-text-light mb-2">
                    💻 Prepare seu Ambiente
                  </h4>
                  <p className="text-text-muted text-sm">
                    Marque todos os itens que você tem disponível para o bootcamp
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { key: 'computer', label: 'Computador ou notebook funcionando', icon: '💻' },
                    { key: 'paper', label: 'Papel para anotações', icon: '📄' },
                    { key: 'pen', label: 'Caneta para escrever', icon: '✏️' },
                    { key: 'quietPlace', label: 'Local tranquilo para assistir', icon: '🏠' },
                    { key: 'internet', label: 'Conexão de internet estável', icon: '🌐' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <input
                        type="checkbox"
                        id={`equipment-${item.key}`}
                        checked={equipmentCheckboxes[item.key]}
                        onChange={(e) => setEquipmentCheckboxes(prev => ({
                          ...prev,
                          [item.key]: e.target.checked
                        }))}
                        className="w-5 h-5 text-primary bg-transparent border-2 border-primary/30 rounded focus:ring-primary/50 focus:ring-2"
                      />
                      <label htmlFor={`equipment-${item.key}`} className="flex items-center gap-3 text-text-light text-sm cursor-pointer flex-1">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <p className="text-text-light text-sm">
                    <strong>💡 Dica:</strong> Ter todos esses itens prontos vai garantir que você aproveite ao máximo o bootcamp!
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <StepButton 
            step={step}
            isAccessible={isStepAccessible(step.id)}
            isCompleted={isStepCompleted(step.id)}
            isCurrent={currentStep === step.id}
          />
        </motion.div>
      ))}

      {/* Final Success State */}
      {completedSteps.length === 6 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl border border-primary/30 text-center"
        >
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-primary mb-2">Parabéns!</h3>
          <p className="text-text-light mb-6">
            Seu check-in foi realizado com sucesso! Você receberá um e-mail de confirmação em breve.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="btn-primary px-8 py-3"
          >
            ✨ Gerar Ingresso Personalizado
          </motion.button>
        </motion.div>
      )}

      {/* Credential Generator (hidden) */}
      <CredentialGenerator
        name={formData.name}
        photo={userPhoto}
        onCredentialGenerated={onCredentialGenerated}
        shouldGenerate={shouldGenerateCredential}
      />
      
      {/* Credential Modal */}
      <CredentialModal
        isOpen={isCredentialModalOpen}
        onClose={() => setIsCredentialModalOpen(false)}
        credentialImage={credentialImage}
        ticketId={ticketId}
        userName={formData.name}
      />
    </div>
  )
}

export default CheckinSteps 