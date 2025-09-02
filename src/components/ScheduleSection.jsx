import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCheckin } from '../contexts/CheckinContext'

const ScheduleSection = () => {
  const { checkinData } = useCheckin()
  const [activeDay, setActiveDay] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Usar dados dinâmicos ou fallback para dados padrão
  const scheduleData = checkinData?.lessons || [
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
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (isInView) {
        setActiveDay((prev) => (prev + 1) % scheduleData.length)
      }
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isInView, scheduleData.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
            📚 Cronograma Completo das{' '}
            <span className="text-gradient">Aulas ao Vivo</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            ⏰ São apenas <span className="text-primary font-semibold">5 aulas transformadoras</span> que podem mudar{' '}
            <span className="text-primary font-semibold">sua vida para sempre</span>
          </p>
        </motion.div>

                 {/* Timeline */}
         <motion.div
           variants={containerVariants}
           initial="hidden"
           animate={isInView ? "visible" : "hidden"}
           className="relative max-w-4xl mx-auto"
         >
           {scheduleData.map((day, index) => (
             <motion.div
               key={day.id}
               variants={cardVariants}
               onClick={() => setActiveDay(index)}
               className={`
                 group cursor-pointer relative mb-8 md:mb-12
                 ${activeDay === index ? 'scale-105' : 'hover:scale-[1.02]'}
                 transition-transform duration-300
               `}
             >
               {/* Timeline connector */}
               <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                 <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
               </div>

                             {/* Card */}
               <div className={`
                 glass-card p-6 md:p-8 ${day.border} border-2 md:ml-16
                 ${activeDay === index ? 'ring-2 ring-primary/50' : ''}
                 bg-gradient-to-br ${day.gradient}
                 hover:border-primary/50 transition-all duration-300
                 relative overflow-hidden
               `}>
                
                {/* Live indicator */}
                {day.type === 'live' && (
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-red-400 uppercase tracking-wide">AO VIVO</span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl md:text-5xl">{day.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary uppercase tracking-wide">
                        📌 {day.day}
                      </span>
                      <span className="text-sm text-text-muted">|</span>
                      <span className="text-sm font-semibold text-text-light">{day.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-light mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                      {day.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-muted font-medium">
                      {day.time}
                    </p>
                  </div>
                </div>

                {/* Topics */}
                <div className="space-y-3">
                  {day.topics.map((topic, topicIndex) => (
                    <motion.div
                      key={topicIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + (topicIndex * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm md:text-base text-text-light leading-relaxed">
                        {topic}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                  <div className={`w-full h-full bg-gradient-to-tl ${day.gradient} rounded-full blur-2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

                 {/* Left timeline line for desktop */}
         <div className="hidden md:block absolute left-6 top-32 bottom-20 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-text-light mb-4">
              🎯 Todas as aulas ao vivo no Zoom com interação em tempo real
            </h3>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Você não vai assistir vídeos gravados. Serão <span className="text-primary font-semibold">aulas ao vivo</span>, com chat aberto,
              onde você pode tirar dúvidas na hora e aprender junto com a comunidade.
            </p>
            <p className="text-primary font-semibold text-lg">
              Reserve esses horários na sua agenda. Sua transformação começa dia 19!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ScheduleSection 