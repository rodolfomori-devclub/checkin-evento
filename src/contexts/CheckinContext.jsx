import React, { createContext, useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCheckinBySlug } from '../firebase/checkinService'

const CheckinContext = createContext()

export const useCheckin = () => {
  const context = useContext(CheckinContext)
  if (!context) {
    throw new Error('useCheckin must be used within a CheckinProvider')
  }
  return context
}

export const CheckinProvider = ({ children }) => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [checkinData, setCheckinData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCheckinData = async () => {
      // Se não há slug, usar dados padrão ou redirecionar
      if (!slug) {
        // Dados padrão para a página raiz
        setCheckinData({
          title: 'O Bootcamp Programador em 7 Dias está chegando',
          countdownDate: '2025-08-19T20:00:00',
          whatsappUrl: 'https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i',
          calendarUrl: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z',
          recordingUrl: 'https://pay.assiny.com.br/38ca3c/node/97708J',
          codeUrl: 'https://pay.assiny.com.br/de8237/node/242143',
          isPublished: true,
          lessons: [
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
        })
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        // Tentar buscar do cache primeiro
        const cacheKey = `checkin-${slug}`
        const cachedData = sessionStorage.getItem(cacheKey)
        
        if (cachedData) {
          const parsed = JSON.parse(cachedData)
          setCheckinData(parsed)
          setLoading(false)
          
          // Ainda assim, buscar dados atualizados em background
          const result = await getCheckinBySlug(slug)
          if (result.success && result.data.isPublished) {
            setCheckinData(result.data)
            sessionStorage.setItem(cacheKey, JSON.stringify(result.data))
          }
        } else {
          // Buscar do Firebase
          const result = await getCheckinBySlug(slug)
          
          if (!result.success) {
            setError('Check-in não encontrado')
            navigate('/404')
            return
          }

          if (!result.data.isPublished) {
            setError('Check-in não está publicado')
            navigate('/404')
            return
          }

          setCheckinData(result.data)
          // Salvar no cache
          sessionStorage.setItem(cacheKey, JSON.stringify(result.data))
        }
      } catch (err) {
        console.error('Erro ao buscar check-in:', err)
        setError('Erro ao carregar dados do check-in')
        navigate('/404')
      } finally {
        setLoading(false)
      }
    }

    fetchCheckinData()
  }, [slug, navigate])

  const value = {
    checkinData,
    loading,
    error,
    slug
  }

  return (
    <CheckinContext.Provider value={value}>
      {children}
    </CheckinContext.Provider>
  )
}