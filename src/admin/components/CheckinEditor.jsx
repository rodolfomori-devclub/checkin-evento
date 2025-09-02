import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createCheckin, updateCheckin, checkSlugExists } from '../../firebase/checkinService'

const CheckinEditor = ({ isOpen, onClose, checkin, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    countdownDate: '',
    whatsappUrl: '',
    calendarUrl: '',
    recordingUrl: '',
    codeUrl: '',
    lessons: []
  })
  
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [slugChecking, setSlugChecking] = useState(false)

  const isEditing = !!checkin

  // Aulas padrão
  const defaultLessons = [
    {
      id: 0,
      day: 'TERÇA',
      date: '19 AGO',
      title: 'Fundamentos da Programação: Seu Mapa do Tesouro',
      time: 'Ao vivo às 20h no Zoom',
      type: 'live',
      color: 'primary',
      gradient: 'from-primary/20 to-primary-light/20',
      border: 'border-primary/30',
      icon: '🚀',
      topics: [
        'O que é programação e como funciona o mundo dos códigos',
        'Passo a passo completo para se tornar um programador profissional',
        'As tecnologias mais procuradas pelas empresas em 2025',
        'Como dominar as ferramentas que o mercado exige',
        'Início do nosso projeto prático + entrega do mapa completo da sua jornada'
      ]
    },
    {
      id: 1,
      day: 'QUARTA',
      date: '20 AGO',
      title: 'Segunda Tecnologia + O Que Empresas Procuram',
      time: 'Ao vivo às 20h no Zoom',
      type: 'live',
      color: 'emerald',
      gradient: 'from-emerald-500/20 to-green-500/20',
      border: 'border-emerald-500/30',
      icon: '💡',
      topics: [
        'Aprendendo nossa segunda tecnologia essencial',
        'Evolução significativa do nosso projeto prático',
        'Os requisitos reais que empresas buscam em candidatos',
        'Como se destacar em processos seletivos',
        'Habilidades técnicas e comportamentais valorizadas'
      ]
    },
    {
      id: 2,
      day: 'QUINTA',
      date: '21 AGO',
      title: '⭐ AULA MAIS IMPORTANTE: JavaScript + DevClub',
      time: 'Ao vivo às 20h no Zoom',
      type: 'live',
      color: 'red',
      gradient: 'from-red-500/20 to-orange-500/20',
      border: 'border-red-500/30',
      icon: '🔥',
      topics: [
        'JavaScript: a linguagem de programação mais usada do mundo',
        'Deixando nossa aplicação 90% pronta e funcional',
        'Técnicas avançadas que impressionam recrutadores',
        'Tudo sobre o DevClub: sua comunidade de transformação',
        'Como aproveitar ao máximo nossa metodologia exclusiva'
      ]
    },
    {
      id: 3,
      day: 'SÁBADO',
      date: '23 AGO',
      title: '🎁 AULA BÔNUS: Tira-Dúvidas Exclusivo com Rodolfo',
      time: 'Ao vivo às 14h no Zoom',
      type: 'live',
      color: 'yellow',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      border: 'border-yellow-500/30',
      icon: '💬',
      topics: [
        'Sessão exclusiva de perguntas e respostas ao vivo',
        'Resolução de dúvidas técnicas do projeto',
        'Mentoria personalizada para seus desafios',
        'Dicas avançadas que não cabem nas aulas regulares',
        'Networking e conexão direta com o instrutor'
      ]
    },
    {
      id: 4,
      day: 'DOMINGO',
      date: '24 AGO',
      title: 'Masterclass com Fernanda: A Melhor Recrutadora do Brasil',
      time: 'Ao vivo às 20h no Zoom',
      type: 'live',
      color: 'purple',
      gradient: 'from-purple-500/20 to-violet-500/20',
      border: 'border-purple-500/30',
      icon: '👩‍💼',
      topics: [
        'Como criar um LinkedIn que gera entrevistas automaticamente',
        'Currículo perfeito: template que aprovamos em grandes empresas',
        'Preparação completa para entrevistas técnicas e comportamentais',
        'As perguntas mais difíceis e como respondê-las com confiança',
        'Segredos de recrutadores que ninguém te conta'
      ]
    }
  ]

  // Preencher formulário quando editando
  useEffect(() => {
    if (checkin) {
      setFormData({
        title: checkin.title || '',
        slug: checkin.slug || '',
        countdownDate: checkin.countdownDate ? 
          (typeof checkin.countdownDate === 'string' ? checkin.countdownDate : checkin.countdownDate.toDate?.()?.toISOString().slice(0, 16)) || '' : '',
        whatsappUrl: checkin.whatsappUrl || '',
        calendarUrl: checkin.calendarUrl || '',
        recordingUrl: checkin.recordingUrl || '',
        codeUrl: checkin.codeUrl || '',
        lessons: checkin.lessons || defaultLessons
      })
    } else {
      // Limpar formulário para novo check-in
      setFormData({
        title: '',
        slug: '',
        countdownDate: '',
        whatsappUrl: '',
        calendarUrl: '',
        recordingUrl: '',
        codeUrl: '',
        lessons: [...defaultLessons]
      })
    }
    setErrors({})
  }, [checkin, isOpen])

  // Gerar slug automaticamente baseado no título
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífen
      .replace(/-+/g, '-') // Remove hífens duplicados
      .replace(/^-|-$/g, '') // Remove hífens do início e fim
  }

  // Verificar se slug já existe
  const validateSlug = async (slug) => {
    if (!slug) return true
    
    setSlugChecking(true)
    try {
      const exists = await checkSlugExists(slug, checkin?.id)
      return !exists
    } catch (error) {
      console.error('Erro ao verificar slug:', error)
      return false
    } finally {
      setSlugChecking(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Auto-gerar slug quando título mudar
    if (name === 'title' && !isEditing) {
      const newSlug = generateSlug(value)
      setFormData(prev => ({
        ...prev,
        slug: newSlug
      }))
    }

    // Limpar erro do campo
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSlugChange = async (e) => {
    const slug = generateSlug(e.target.value)
    setFormData(prev => ({ ...prev, slug }))
    
    // Validar slug em tempo real
    if (slug) {
      const isValid = await validateSlug(slug)
      if (!isValid) {
        setErrors(prev => ({ ...prev, slug: 'Este slug já está sendo usado' }))
      } else {
        setErrors(prev => ({ ...prev, slug: '' }))
      }
    }
  }

  // Funções para manipular aulas
  const handleLessonChange = (lessonIndex, field, value) => {
    setFormData(prev => ({
      ...prev,
      lessons: prev.lessons.map((lesson, index) => 
        index === lessonIndex 
          ? { ...lesson, [field]: value }
          : lesson
      )
    }))
  }

  const handleTopicChange = (lessonIndex, topicIndex, value) => {
    setFormData(prev => ({
      ...prev,
      lessons: prev.lessons.map((lesson, index) => 
        index === lessonIndex 
          ? {
              ...lesson,
              topics: lesson.topics.map((topic, tIndex) => 
                tIndex === topicIndex ? value : topic
              )
            }
          : lesson
      )
    }))
  }

  const addTopic = (lessonIndex) => {
    setFormData(prev => ({
      ...prev,
      lessons: prev.lessons.map((lesson, index) => 
        index === lessonIndex 
          ? { ...lesson, topics: [...lesson.topics, ''] }
          : lesson
      )
    }))
  }

  const removeTopic = (lessonIndex, topicIndex) => {
    setFormData(prev => ({
      ...prev,
      lessons: prev.lessons.map((lesson, index) => 
        index === lessonIndex 
          ? { 
              ...lesson, 
              topics: lesson.topics.filter((_, tIndex) => tIndex !== topicIndex) 
            }
          : lesson
      )
    }))
  }

  const validateForm = async () => {
    const newErrors = {}

    // Validações obrigatórias
    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório'
    }

    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug é obrigatório'
    } else {
      const isValidSlug = await validateSlug(formData.slug)
      if (!isValidSlug) {
        newErrors.slug = 'Este slug já está sendo usado'
      }
    }

    if (!formData.countdownDate) {
      newErrors.countdownDate = 'Data da contagem regressiva é obrigatória'
    } else {
      const selectedDate = new Date(formData.countdownDate)
      if (selectedDate <= new Date()) {
        newErrors.countdownDate = 'Data deve ser no futuro'
      }
    }

    // Validações de URL
    const urlFields = ['whatsappUrl', 'calendarUrl', 'recordingUrl', 'codeUrl']
    urlFields.forEach(field => {
      const url = formData[field]
      if (url && !isValidUrl(url)) {
        newErrors[field] = 'URL inválida'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isValidUrl = (string) => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const isValid = await validateForm()
    if (!isValid) return

    setLoading(true)

    try {
      const data = {
        ...formData,
        countdownDate: new Date(formData.countdownDate).toISOString()
      }

      let result
      if (isEditing) {
        result = await updateCheckin(checkin.id, data)
      } else {
        result = await createCheckin(data)
      }

      if (result.success) {
        onSave()
      } else {
        setErrors({ general: result.error })
      }
    } catch (error) {
      console.error('Erro ao salvar:', error)
      setErrors({ general: 'Erro inesperado ao salvar' })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="glass-card p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-text-light" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
                {isEditing ? 'Editar Check-in' : 'Novo Check-in'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Error geral */}
            {errors.general && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Título */}
              <div>
                <label className="block text-sm font-medium text-text-light mb-2">
                  Título Principal *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Ex: O Bootcamp Programador em 7 Dias está chegando"
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.title ? 'border-red-500/50' : 'border-white/20'
                  }`}
                />
                {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-medium text-text-light mb-2">
                  URL (Slug) *
                </label>
                <div className="flex items-center">
                  <span className="text-text-muted mr-2">/{' '}</span>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleSlugChange}
                    placeholder="bootcamp-2025"
                    className={`flex-1 px-4 py-3 bg-white/10 border rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.slug ? 'border-red-500/50' : 'border-white/20'
                    }`}
                  />
                  {slugChecking && (
                    <div className="ml-2">
                      <svg className="animate-spin h-5 w-5 text-primary" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.slug && <p className="text-red-400 text-sm mt-1">{errors.slug}</p>}
                <p className="text-text-muted text-sm mt-1">
                  Esta será a URL da página: /{formData.slug}
                </p>
              </div>

              {/* Data da contagem regressiva */}
              <div>
                <label className="block text-sm font-medium text-text-light mb-2">
                  Data e Hora da Contagem Regressiva *
                </label>
                <input
                  type="datetime-local"
                  name="countdownDate"
                  value={formData.countdownDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.countdownDate ? 'border-red-500/50' : 'border-white/20'
                  }`}
                />
                {errors.countdownDate && <p className="text-red-400 text-sm mt-1">{errors.countdownDate}</p>}
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-light">Links Configuráveis</h3>
                
                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">
                    Link do Grupo WhatsApp
                  </label>
                  <input
                    type="url"
                    name="whatsappUrl"
                    value={formData.whatsappUrl}
                    onChange={handleChange}
                    placeholder="https://sndflw.com/i/bootcamp-..."
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.whatsappUrl ? 'border-red-500/50' : 'border-white/20'
                    }`}
                  />
                  {errors.whatsappUrl && <p className="text-red-400 text-sm mt-1">{errors.whatsappUrl}</p>}
                </div>

                {/* Calendário */}
                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">
                    Link do Google Calendar
                  </label>
                  <input
                    type="url"
                    name="calendarUrl"
                    value={formData.calendarUrl}
                    onChange={handleChange}
                    placeholder="https://calendar.google.com/calendar/..."
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.calendarUrl ? 'border-red-500/50' : 'border-white/20'
                    }`}
                  />
                  {errors.calendarUrl && <p className="text-red-400 text-sm mt-1">{errors.calendarUrl}</p>}
                </div>

                {/* Gravação */}
                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">
                    Link da Gravação Vitalícia
                  </label>
                  <input
                    type="url"
                    name="recordingUrl"
                    value={formData.recordingUrl}
                    onChange={handleChange}
                    placeholder="https://pay.assiny.com.br/..."
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.recordingUrl ? 'border-red-500/50' : 'border-white/20'
                    }`}
                  />
                  {errors.recordingUrl && <p className="text-red-400 text-sm mt-1">{errors.recordingUrl}</p>}
                </div>

                {/* Código */}
                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">
                    Link do Código Completo
                  </label>
                  <input
                    type="url"
                    name="codeUrl"
                    value={formData.codeUrl}
                    onChange={handleChange}
                    placeholder="https://pay.assiny.com.br/..."
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.codeUrl ? 'border-red-500/50' : 'border-white/20'
                    }`}
                  />
                  {errors.codeUrl && <p className="text-red-400 text-sm mt-1">{errors.codeUrl}</p>}
                </div>
              </div>

              {/* Aulas */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-light">Cronograma das Aulas</h3>
                
                <div className="space-y-6">
                  {formData.lessons?.map((lesson, lessonIndex) => (
                    <div key={lesson.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      {/* Header da aula */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-text-light mb-2">
                            Dia da Semana
                          </label>
                          <input
                            type="text"
                            value={lesson.day}
                            onChange={(e) => handleLessonChange(lessonIndex, 'day', e.target.value)}
                            placeholder="TERÇA"
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-light mb-2">
                            Data (formato: DD MMM)
                          </label>
                          <input
                            type="text"
                            value={lesson.date}
                            onChange={(e) => handleLessonChange(lessonIndex, 'date', e.target.value)}
                            placeholder="19 AGO"
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>

                      {/* Título e horário */}
                      <div className="space-y-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-text-light mb-2">
                            Título da Aula
                          </label>
                          <input
                            type="text"
                            value={lesson.title}
                            onChange={(e) => handleLessonChange(lessonIndex, 'title', e.target.value)}
                            placeholder="Fundamentos da Programação: Seu Mapa do Tesouro"
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-light mb-2">
                            Horário
                          </label>
                          <input
                            type="text"
                            value={lesson.time}
                            onChange={(e) => handleLessonChange(lessonIndex, 'time', e.target.value)}
                            placeholder="Ao vivo às 20h no Zoom"
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>

                      {/* Tópicos */}
                      <div>
                        <label className="block text-sm font-medium text-text-light mb-2">
                          Tópicos da Aula
                        </label>
                        <div className="space-y-2">
                          {lesson.topics?.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex gap-2">
                              <input
                                type="text"
                                value={topic}
                                onChange={(e) => handleTopicChange(lessonIndex, topicIndex, e.target.value)}
                                placeholder="Digite o tópico da aula"
                                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                              <button
                                type="button"
                                onClick={() => removeTopic(lessonIndex, topicIndex)}
                                className="p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-all duration-200"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          ))}
                          
                          <button
                            type="button"
                            onClick={() => addTopic(lessonIndex)}
                            className="w-full py-2 px-3 bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary rounded-lg transition-all duration-200 text-sm"
                          >
                            + Adicionar Tópico
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-500/30 text-gray-400 rounded-lg transition-all duration-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading || slugChecking}
                  className="flex-1 py-3 px-4 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Salvando...' : (isEditing ? 'Atualizar' : 'Criar')}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default CheckinEditor