import React, { useState, useRef, useEffect, useMemo, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CredentialGenerator from './CredentialGenerator'
import CredentialModal from './CredentialModal'
import WhatsAppStep from './WhatsAppStep'
import { sendToGoogleSheets } from '../utils/googleSheets'
import { saveDataLocally, sendToGoogleSheetsViaWebhook } from '../utils/googleSheetsAlternative'
import { saveToFirestore } from '../utils/firebase'
import { useCheckin } from '../contexts/CheckinContext'


// Componente memoizado para o input do nome
const NameInput = memo(({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
    autoFocus
  />
))

// Componente memoizado para checkbox
const Checkbox = memo(({ id, checked, onChange, label, className = "" }) => (
  <div className={`flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors ${className}`}>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 text-primary bg-transparent border-2 border-primary/30 rounded focus:ring-primary/50 focus:ring-2 cursor-pointer"
    />
    <label htmlFor={id} className="text-text-light text-sm cursor-pointer flex-1">
      {label}
    </label>
  </div>
))

// Componente memoizado para botão
const ActionButton = memo(({ onClick, disabled, children, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-8 py-3 font-semibold rounded-lg transition-colors duration-200 ${className}`}
  >
    {children}
  </button>
))

const CheckinSteps = memo(({ currentStep, completedSteps, userData, onStepComplete, onClose }) => {
  const { checkinData } = useCheckin()
  const [formData, setFormData] = useState({
    name: userData.name || '',
    email: userData.email || '',
    recordingResponse: '', // Resposta sobre a gravação
    codeResponse: '' // Resposta sobre o código
  })
  const [userPhoto, setUserPhoto] = useState(null)
  const [credentialImage, setCredentialImage] = useState(null)
  const [ticketId, setTicketId] = useState(null)
  const [isCredentialModalOpen, setIsCredentialModalOpen] = useState(false)
  const [shouldGenerateCredential, setShouldGenerateCredential] = useState(false)
  
  // Estados para os checkboxes
  const [zoomCheckbox, setZoomCheckbox] = useState(false)
  const [calendarCheckbox, setCalendarCheckbox] = useState(false)
  const [equipmentCheckboxes, setEquipmentCheckboxes] = useState({
    computer: false,
    paper: false,
    pen: false,
    quietPlace: false,
    internet: false
  })
  
  const fileInputRef = useRef(null)

  // Sound effect for completed steps
  const playSuccessSound = useCallback(() => {
    try {
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
      // Audio not supported
    }
  }, [])

  // Estados para os passos de venda
  const [recordingOffer, setRecordingOffer] = useState(null)

  const [recordingCheckboxes, setRecordingCheckboxes] = useState({
    noThanks: false,
    alreadyHave: false
  })

  // Estados para o código completo
  const [codeOffer, setCodeOffer] = useState(null)

  const [codeCheckboxes, setCodeCheckboxes] = useState({
    noThanks: false,
    alreadyHave: false
  })



  const [showTimer, setShowTimer] = useState(false)
  const [timerCount, setTimerCount] = useState(3)
  

  // Timer effect para redirecionamento automático
  useEffect(() => {
    if (showTimer && timerCount > 0) {
      const timer = setTimeout(() => {
        setTimerCount(prev => prev - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (showTimer && timerCount === 0) {
      // Redirecionar para o Google Calendar
      const calendarUrl = checkinData?.calendarUrl || "https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z"
      window.open(calendarUrl, '_blank')
      setShowTimer(false)
      setTimerCount(3)
    }
  }, [showTimer, timerCount])




  const steps = useMemo(() => [
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
      icon: '🎥',
      title: 'Gravação Vitalícia',
      description: 'Garanta acesso vitalício às gravações do evento',
      buttonText: 'Quero a gravação vitalícia',
      color: 'bg-red-500',
      type: 'recording'
    },
    {
      id: 6,
      icon: '💻',
      title: 'Código Completo do Projeto',
      description: 'Tenha acesso ao código completo da aplicação',
      buttonText: 'Quero o código completo',
      color: 'bg-emerald-500',
      type: 'code'
    },
    {
      id: 7,
      icon: '🎫',
      title: 'Gerar Ingresso Personalizado',
      description: 'Adicione sua foto e gere seu ingresso exclusivo',
      buttonText: 'Gerar Meu Ingresso',
      color: 'bg-primary',
      type: 'credential'
    }
  ], [formData.name])

  const handleNameChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, name: e.target.value }))
  }, [])

  const handleEmailChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, email: e.target.value }))
  }, [])

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem (JPG, PNG, etc.)')
        return
      }
      
      if (file.size > 5 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 5MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        setUserPhoto(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const generateCredential = useCallback(() => {
    setShouldGenerateCredential(true)
  }, [])

  const handleRecordingOffer = useCallback((response) => {
    setRecordingOffer(response)
    // Atualizar formData com a resposta
    setFormData(prev => ({ ...prev, recordingResponse: response }))
    
    if (response === 'yes') {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'CustomEvent', {
          event_name: 'RecordingOfferAccepted',
          content_name: 'Gravação Vitalícia Bootcamp',
          value: 0.00,
          currency: 'BRL'
        });
      }
      window.open(checkinData?.recordingUrl || 'https://pay.assiny.com.br/38ca3c/node/97708J', '_blank')
    }
  }, [])

  const handleCodeOffer = useCallback((response) => {
    setCodeOffer(response)
    // Atualizar formData com a resposta
    setFormData(prev => ({ ...prev, codeResponse: response }))
    
    if (response === 'yes') {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'CustomEvent', {
          event_name: 'CodeOfferAccepted',
          content_name: 'Código Completo Bootcamp',
          value: 0.00,
          currency: 'BRL'
        });
      }
      window.open(checkinData?.codeUrl || 'https://pay.assiny.com.br/de8237/node/242143', '_blank')
    }
  }, [])



  const onCredentialGenerated = useCallback(async (imageData, generatedTicketId) => {
    setCredentialImage(imageData)
    setTicketId(generatedTicketId)
    setIsCredentialModalOpen(true)
    setShouldGenerateCredential(false)
    onStepComplete(7)
    playSuccessSound()
    
    // Preparar dados completos
    const completeData = {
      name: formData.name,
      email: formData.email,
      recordingResponse: formData.recordingResponse,
      codeResponse: formData.codeResponse
    }
    
    // Salvar dados localmente primeiro (backup)
    saveDataLocally(completeData)
    
    // Tentar salvar no Firebase (método principal)
    try {
      const result = await saveToFirestore(completeData)
      if (result.success) {
        console.log('🔥 Dados salvos no Firebase com sucesso!', result.id)
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.log('❌ Erro ao salvar no Firebase, tentando Google Sheets...')
      
      // Se falhar, tentar Google Apps Script como fallback
      try {
        const success = await sendToGoogleSheets(completeData)
        if (success) {
          console.log('✅ Dados enviados para Google Sheets como fallback')
        } else {
          throw new Error('Falha no Google Sheets')
        }
      } catch (error2) {
        console.log('❌ Tentando webhook como último recurso...')
        
        // Último recurso: webhook
        try {
          await sendToGoogleSheetsViaWebhook(completeData)
          console.log('✅ Dados enviados via webhook')
        } catch (error3) {
          console.log('⚠️ Dados salvos apenas localmente')
        }
      }
    }
    
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: 'Check-in Bootcamp Programador em 7 Dias',
        content_category: 'Check-in',
        value: 0.00,
        currency: 'BRL',
        ticket_id: generatedTicketId
      });
      
      fbq('track', 'CustomEvent', {
        event_name: 'CheckinCompleted',
        ticket_id: generatedTicketId,
        content_name: 'Check-in Bootcamp Programador em 7 Dias'
      });
    }
  }, [onStepComplete, playSuccessSound, formData.name, formData.email])

  const isStepAccessible = useCallback((stepIndex) => {
    if (stepIndex === 0) return true
    if (stepIndex <= 6) {
      return completedSteps.includes(stepIndex - 1)
    }
    if (stepIndex === 7) {
      return completedSteps.includes(6)
    }
    return false
  }, [completedSteps])

  const isStepCompleted = useCallback((stepIndex) => {
    return completedSteps.includes(stepIndex)
  }, [completedSteps])

  const StepButton = useCallback(({ step, isAccessible, isCompleted, isCurrent }) => {
    const handleStepClick = () => {
      if (!isAccessible || isCompleted) return
      
      if (step.id === 0) {
        if (!formData.name.trim()) {
          alert('Por favor, digite seu nome completo')
          return
        }
        if (!formData.email.trim()) {
          alert('Por favor, digite seu e-mail')
          return
        }
        // Validação básica de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
          alert('Por favor, digite um e-mail válido')
          return
        }
        onStepComplete(step.id, { name: formData.name, email: formData.email })
      } else if (step.id === 1) {
        const calendarUrl = checkinData?.calendarUrl || "https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z"
        window.open(calendarUrl, '_blank')
      } else if (step.id === 2) {
        const whatsappUrl = checkinData?.whatsappUrl || "https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i"
        window.open(whatsappUrl, '_blank')
      } else if (step.id === 3) {
        if (!zoomCheckbox) {
          alert('Por favor, confirme que você baixou o Zoom e testou áudio/vídeo')
          return
        }
        onStepComplete(step.id)
      } else if (step.id === 4) {
        const allChecked = Object.values(equipmentCheckboxes).every(checked => checked)
        if (!allChecked) {
          alert('Por favor, confirme todos os itens necessários')
          return
        }
        onStepComplete(step.id)
      } else if (step.id === 5) {
        if (recordingOffer === null) {
          return // Aguarda resposta do usuário
        }
        onStepComplete(step.id)
      } else if (step.id === 6) {
        if (codeOffer === null) {
          return // Aguarda resposta do usuário
        }
        onStepComplete(step.id)
      } else if (step.id === 7) {
        generateCredential()
        return
      }
      
      playSuccessSound()
    }

    return (
      <button
        onClick={handleStepClick}
        disabled={!isAccessible || isCompleted}
        className={`relative w-full p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${
          isCompleted 
            ? 'bg-primary/20 border-primary text-primary cursor-default' 
            : isAccessible 
              ? `${step.color}/20 border-${step.color.split('-')[1]}-500 hover:${step.color}/30 text-text-light cursor-pointer`
              : 'bg-gray-500/10 border-gray-500/30 text-gray-500 cursor-not-allowed'
        } ${isCurrent ? 'ring-2 ring-primary/50' : ''}`}
      >
        {isCompleted && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="text-2xl">{step.icon}</div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-lg" style={{ fontFamily: 'var(--font-sans)' }}>{step.title}</h3>
            <p className="text-sm opacity-80 mb-2">{step.description}</p>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              isCompleted ? 'bg-primary/20 text-primary' : 'bg-white/10 text-current'
            }`}>
              {isCompleted ? '✅ Concluído' : step.buttonText}
            </div>
          </div>
        </div>
      </button>
    )
  }, [formData.name, formData.email, zoomCheckbox, equipmentCheckboxes, recordingOffer, codeOffer, onStepComplete, playSuccessSound, generateCredential])

  // Renderizar apenas o step atual
  const currentStepContent = useMemo(() => {
    const step = steps[currentStep];
    
    // Sempre mostrar o campo de nome primeiro
    const nameField = (
      <div className="mb-4 p-4 glass-card">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-light mb-2">
              Nome Completo *
            </label>
            <NameInput
              value={formData.name}
              onChange={handleNameChange}
              placeholder="Digite seu nome completo"
            />
            <p className="text-xs text-text-muted mt-2">
              Este nome aparecerá no seu ingresso personalizado
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-light mb-2">
              E-mail *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleEmailChange}
              placeholder="E-mail que você realizou a compra do ingresso"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              required
            />
            <p className="text-xs text-text-muted mt-2">
              Digite o mesmo e-mail usado na compra do ingresso
            </p>
          </div>
          
          {!isStepCompleted(0) && (
            <div className="text-center">
              <ActionButton
                onClick={() => {
                  if (formData.name.trim() && formData.email.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if (!emailRegex.test(formData.email)) {
                      alert('Por favor, digite um e-mail válido')
                      return
                    }
                    onStepComplete(0, { name: formData.name, email: formData.email })
                    playSuccessSound()
                    setShowTimer(true) // Ativar timer
                  } else {
                    alert('Por favor, preencha todos os campos')
                  }
                }}
                disabled={!formData.name.trim() || !formData.email.trim()}
                className={formData.name.trim() && formData.email.trim() 
                  ? 'bg-primary hover:bg-primary-light text-white' 
                  : 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                }
              >
                Confirmo que sou {formData.name || '[NOME]'}
              </ActionButton>
            </div>
          )}
        </div>
      </div>
    );

    // Se o step 0 estiver completo, mostrar também o conteúdo da agenda
    if (isStepCompleted(0) && !isStepCompleted(1)) {
      const calendarUrl = checkinData?.calendarUrl || "https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z"
      
      const agendaContent = (
        <div className="mb-4 p-6 glass-card">
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-text-light mb-2">
                📅 Adicionar na Agenda
              </h4>
              
              {/* Timer Section */}
              {showTimer && timerCount > 0 ? (
                <div className="space-y-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                    <div className="text-center space-y-3">
                      <div className="text-4xl animate-pulse">⏰</div>
                      <p className="text-text-light font-medium">
                        Adicione o evento a sua agenda
                      </p>
                      <div className="text-3xl font-bold text-primary">
                        {timerCount}
                      </div>
                      <p className="text-text-muted text-sm">
                        Redirecionando automaticamente...
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-text-muted text-sm mb-7">
                    O link do Google Calendar foi aberto em uma nova aba
                  </p>

                  <div className="space-y-4">
                    <Checkbox
                      id="calendar-checkbox"
                      checked={calendarCheckbox}
                      onChange={(e) => setCalendarCheckbox(e.target.checked)}
                      label="Já adicionei a Aula 1 na minha agenda"
                    />
                    
                    <div className="text-center">
                      <p className="text-text-muted text-sm mb-2">Link do Convite:</p>
                      <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light underline text-sm"
                      >
                        Abrir Google Calendar novamente
                      </a>
                    </div>
                    
                    <div className="text-center">
                      <ActionButton
                        onClick={() => {
                          if (calendarCheckbox) {
                            onStepComplete(1)
                            playSuccessSound()
                          } else {
                            alert('Por favor, confirme que você adicionou o evento na sua agenda')
                          }
                        }}
                        disabled={!calendarCheckbox}
                        className={calendarCheckbox 
                          ? 'bg-primary hover:bg-primary-light text-white' 
                          : 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                        }
                      >
                        Continuar
                      </ActionButton>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      );

      return (
        <div className="space-y-4">
          {nameField}
          {agendaContent}
        </div>
      );
    }

    // Se apenas o step 0 não estiver completo, mostrar apenas o campo de nome
    if (!isStepCompleted(0)) {
      return nameField;
    }

    // Para outros steps, mostrar o conteúdo específico
    if (step.id === 2 && !isStepCompleted(2)) {
      return (
        <WhatsAppStep 
          onComplete={() => onStepComplete(2)}
          playSuccessSound={playSuccessSound}
          isActive={true}
        />
      )
    }

    if (step.id === 3 && !isStepCompleted(3)) {
      return (
        <div className="mb-4 p-6 glass-card">
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
                        <span className="text-xs text-primary">{i + 1}</span>
                      </div>
                      <span className="text-text-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Checkbox
                id="zoom-checkbox"
                checked={zoomCheckbox}
                onChange={(e) => setZoomCheckbox(e.target.checked)}
                label="Zoom configurado e testado"
              />

              <div className="text-center">
                <ActionButton
                  onClick={() => {
                    if (zoomCheckbox) {
                      onStepComplete(3)
                      playSuccessSound()
                    } else {
                      alert('Por favor, confirme que você baixou o Zoom e testou áudio/vídeo')
                    }
                  }}
                  disabled={!zoomCheckbox}
                  className={zoomCheckbox 
                    ? 'bg-primary hover:bg-primary-light text-white' 
                    : 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                  }
                >
                  Continuar
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (step.id === 4 && !isStepCompleted(4)) {
      return (
        <div className="mb-4 p-6 glass-card">
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
                <Checkbox
                  key={item.key}
                  id={`equipment-${item.key}`}
                  checked={equipmentCheckboxes[item.key]}
                  onChange={(e) => setEquipmentCheckboxes(prev => ({
                    ...prev,
                    [item.key]: e.target.checked
                  }))}
                  label={`${item.icon} ${item.label}`}
                />
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p className="text-text-light text-sm">
                <strong>💡 Dica:</strong> Ter todos esses itens prontos vai garantir que você aproveite ao máximo o bootcamp!
              </p>
            </div>

            <div className="text-center">
              <ActionButton
                onClick={() => {
                  const allChecked = Object.values(equipmentCheckboxes).every(checked => checked)
                  if (allChecked) {
                    onStepComplete(4)
                    playSuccessSound()
                  } else {
                    alert('Por favor, confirme todos os itens necessários')
                  }
                }}
                disabled={!Object.values(equipmentCheckboxes).every(checked => checked)}
                className={Object.values(equipmentCheckboxes).every(checked => checked)
                  ? 'bg-primary hover:bg-primary-light text-white' 
                  : 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                }
              >
                Continuar
              </ActionButton>
            </div>
          </div>
        </div>
      )
    }

    if (step.id === 5 && !isStepCompleted(5)) {
      if (recordingOffer === null) {
        return (
          <div className="mb-4 p-6 glass-card">
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-text-light mb-2">
                  🎥 Gravação Vitalícia do Evento
                </h4>
                <p className="text-text-muted text-sm">
                  Garanta acesso vitalício às gravações completas do bootcamp
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl">🎥</div>
                  <h5 className="text-xl font-bold text-text-light">O que você vai receber:</h5>
                  <ul className="text-text-light text-sm space-y-2">
                    <li>✅ Gravações completas de todas as aulas</li>
                    <li>✅ Acesso vitalício (para sempre)</li>
                    <li>✅ Qualidade HD</li>
                    <li>✅ Possibilidade de assistir quantas vezes quiser</li>
                    <li>✅ Ideal para revisar o conteúdo</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <ActionButton
                  onClick={() => handleRecordingOffer('yes')}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  ✅ SIM, quero a gravação
                </ActionButton>
                <ActionButton
                  onClick={() => handleRecordingOffer('no')}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  ❌ NÃO, obrigado
                </ActionButton>
              </div>
            </div>
          </div>
        )
      } else if (recordingOffer === 'no' || recordingOffer === 'yes') {
        return (
          <div className="mb-4 p-6 glass-card">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-text-muted text-sm mb-4">
                  Confirme sua decisão:
                </p>
                {recordingOffer === 'yes' && (
                  <div className="mb-4">
                    <a
                      href={checkinData?.recordingUrl || "https://pay.assiny.com.br/38ca3c/node/97708J"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      💳 Quero a gravação (ir para checkout)
                    </a>
                  </div>
                )}
              </div>
              <div className="space-y-3" style={{ position: 'relative', zIndex: 100 }}>
                <div 
                  className={`p-4 rounded-lg transition-all duration-200 cursor-pointer border-2 ${
                    recordingCheckboxes.noThanks 
                      ? 'bg-blue-500/20 border-blue-500/50' 
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                  style={{ 
                    minHeight: '60px', 
                    userSelect: 'none',
                    position: 'relative',
                    zIndex: 101
                  }}
                  onClick={() => {
                    setRecordingCheckboxes({
                      noThanks: true,
                      alreadyHave: false
                    })
                  }}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="recording-option"
                      checked={recordingCheckboxes.noThanks}
                      onChange={() => {
                        setRecordingCheckboxes({
                          noThanks: true,
                          alreadyHave: false
                        })
                      }}
                      style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                        accentColor: '#3B82F6',
                        pointerEvents: 'auto'
                      }}
                      className="cursor-pointer"
                    />
                    <span className="text-text-light text-sm flex-1 leading-relaxed">
                      Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter a gravação vitalícia
                    </span>
                  </div>
                </div>
                
                <div 
                  className={`p-4 rounded-lg transition-all duration-200 cursor-pointer border-2 ${
                    recordingCheckboxes.alreadyHave 
                      ? 'bg-blue-500/20 border-blue-500/50' 
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                  style={{ 
                    minHeight: '60px', 
                    userSelect: 'none',
                    position: 'relative',
                    zIndex: 101
                  }}
                  onClick={() => {
                    setRecordingCheckboxes({
                      noThanks: false,
                      alreadyHave: true
                    })
                  }}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="recording-option"
                      checked={recordingCheckboxes.alreadyHave}
                      onChange={() => {
                        setRecordingCheckboxes({
                          noThanks: false,
                          alreadyHave: true
                        })
                      }}
                      style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                        accentColor: '#3B82F6',
                        pointerEvents: 'auto'
                      }}
                      className="cursor-pointer"
                    />
                    <span className="text-text-light text-sm flex-1 leading-relaxed">
                      SIM (Já garanti a gravação vitalícia)
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-3">
                
                <ActionButton
                  onClick={() => {
                    if (recordingCheckboxes.noThanks || recordingCheckboxes.alreadyHave) {
                      // Atualizar resposta final baseada no checkbox
                      let finalResponse = recordingOffer
                      if (recordingCheckboxes.noThanks) {
                        finalResponse = 'no_thanks'
                      } else if (recordingCheckboxes.alreadyHave) {
                        finalResponse = 'already_purchased'
                      }
                      setFormData(prev => ({ ...prev, recordingResponse: finalResponse }))
                      
                      onStepComplete(5)
                      playSuccessSound()
                    } else {
                      alert('Por favor, selecione uma das opções')
                    }
                  }}
                  disabled={!recordingCheckboxes.noThanks && !recordingCheckboxes.alreadyHave}
                  className={`font-semibold rounded-lg transition-colors duration-200 ${
                    recordingCheckboxes.noThanks || recordingCheckboxes.alreadyHave
                      ? 'bg-primary hover:bg-primary-light text-white cursor-pointer'
                      : 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continuar
                </ActionButton>
              </div>
            </div>
          </div>
        )
      }
    }

    if (step.id === 6 && !isStepCompleted(6)) {
      if (codeOffer === null) {
        return (
          <div className="mb-4 p-6 glass-card">
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-text-light mb-2">
                  💻 Código Completo do Projeto
                </h4>
                <p className="text-text-muted text-sm">
                  Tenha acesso ao código completo da aplicação desenvolvida
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-xl p-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl">💻</div>
                  <h5 className="text-xl font-bold text-text-light">O que você vai receber:</h5>
                  <ul className="text-text-light text-sm space-y-2">
                    <li>✅ Código completo da aplicação</li>
                    <li>✅ Todos os arquivos do projeto</li>
                    <li>✅ Documentação detalhada</li>
                    <li>✅ Instruções de instalação</li>
                    <li>✅ Acesso vitalício ao código</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <ActionButton
                  onClick={() => handleCodeOffer('yes')}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  ✅ SIM, quero o código
                </ActionButton>
                <ActionButton
                  onClick={() => handleCodeOffer('no')}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  ❌ NÃO, obrigado
                </ActionButton>
              </div>
            </div>
          </div>
        )
      } else if (codeOffer === 'no' || codeOffer === 'yes') {
        return (
          <div className="mb-4 p-6 glass-card">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-text-muted text-sm mb-4">
                  Confirme sua decisão:
                </p>
                {codeOffer === 'yes' && (
                  <div className="mb-4">
                    <a
                      href={checkinData?.codeUrl || "https://pay.assiny.com.br/de8237/node/242143"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      💳 Quero o código (ir para checkout)
                    </a>
                  </div>
                )}
              </div>
              <div className="space-y-3" style={{ position: 'relative', zIndex: 100 }}>
                <div 
                  className={`p-4 rounded-lg transition-all duration-200 cursor-pointer border-2 ${
                    codeCheckboxes.noThanks 
                      ? 'bg-blue-500/20 border-blue-500/50' 
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                  style={{ 
                    minHeight: '60px', 
                    userSelect: 'none',
                    position: 'relative',
                    zIndex: 101
                  }}
                  onClick={() => {
                    setCodeCheckboxes({
                      noThanks: true,
                      alreadyHave: false
                    })
                  }}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="code-option"
                      checked={codeCheckboxes.noThanks}
                      onChange={() => {
                        setCodeCheckboxes({
                          noThanks: true,
                          alreadyHave: false
                        })
                      }}
                      style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                        accentColor: '#3B82F6',
                        pointerEvents: 'auto'
                      }}
                      className="cursor-pointer"
                    />
                    <span className="text-text-light text-sm flex-1 leading-relaxed">
                      Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter o código completo
                    </span>
                  </div>
                </div>
                
                <div 
                  className={`p-4 rounded-lg transition-all duration-200 cursor-pointer border-2 ${
                    codeCheckboxes.alreadyHave 
                      ? 'bg-blue-500/20 border-blue-500/50' 
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                  style={{ 
                    minHeight: '60px', 
                    userSelect: 'none',
                    position: 'relative',
                    zIndex: 101
                  }}
                  onClick={() => {
                    setCodeCheckboxes({
                      noThanks: false,
                      alreadyHave: true
                    })
                  }}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="code-option"
                      checked={codeCheckboxes.alreadyHave}
                      onChange={() => {
                        setCodeCheckboxes({
                          noThanks: false,
                          alreadyHave: true
                        })
                      }}
                      style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                        accentColor: '#3B82F6',
                        pointerEvents: 'auto'
                      }}
                      className="cursor-pointer"
                    />
                    <span className="text-text-light text-sm flex-1 leading-relaxed">
                      SIM (Já garanti o código completo)
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-3">
                
                <ActionButton
                  onClick={() => {
                    if (codeCheckboxes.noThanks || codeCheckboxes.alreadyHave) {
                      // Atualizar resposta final baseada no checkbox
                      let finalResponse = codeOffer
                      if (codeCheckboxes.noThanks) {
                        finalResponse = 'no_thanks'
                      } else if (codeCheckboxes.alreadyHave) {
                        finalResponse = 'already_purchased'
                      }
                      setFormData(prev => ({ ...prev, codeResponse: finalResponse }))
                      
                      onStepComplete(6)
                      playSuccessSound()
                    } else {
                      alert('Por favor, selecione uma das opções')
                    }
                  }}
                  disabled={!codeCheckboxes.noThanks && !codeCheckboxes.alreadyHave}
                  className={`font-semibold rounded-lg transition-colors duration-200 ${
                    codeCheckboxes.noThanks || codeCheckboxes.alreadyHave
                      ? 'bg-primary hover:bg-primary-light text-white cursor-pointer'
                      : 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continuar
                </ActionButton>
              </div>
            </div>
          </div>
        )
      }
    }

    if (step.id === 7 && !isStepCompleted(7)) {
      return (
        <div className="mb-4 p-6 glass-card">
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

            <div className="text-center">
              <ActionButton
                onClick={generateCredential}
                className="bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Gerar Meu Ingresso
              </ActionButton>
            </div>
          </div>
        </div>
      )
    }

    // Final Success State
    if (completedSteps.length === 9) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl border border-primary/30 text-center"
        >
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>Parabéns!</h3>
          <p className="text-text-light mb-6">
            Seu check-in foi realizado com sucesso! Você receberá um e-mail de confirmação em breve.
          </p>
          <ActionButton
            onClick={onClose}
            className="btn-primary px-8 py-3"
          >
            ✨ Gerar Ingresso Personalizado
          </ActionButton>
        </motion.div>
      )
    }
    return null;
  }, [currentStep, steps, formData.name, formData.email, calendarCheckbox, isStepCompleted, handleNameChange, handleEmailChange, onStepComplete, playSuccessSound, zoomCheckbox, equipmentCheckboxes, recordingOffer, codeOffer, userPhoto, handleFileUpload, generateCredential, handleRecordingOffer, handleCodeOffer, setRecordingOffer, setCodeOffer, recordingCheckboxes, setRecordingCheckboxes, codeCheckboxes, setCodeCheckboxes, onClose, showTimer, timerCount])

  return (
    <div className="space-y-4 md:space-y-6">
      {currentStepContent}
      
      {/* Steps Buttons */}
      {steps.map((step) => (
        <div key={step.id}>
          <StepButton 
            step={step}
            isAccessible={isStepAccessible(step.id)}
            isCompleted={isStepCompleted(step.id)}
            isCurrent={currentStep === step.id}
          />
        </div>
      ))}
      
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
})

export default CheckinSteps 