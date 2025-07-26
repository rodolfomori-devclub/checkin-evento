import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scheduleData = [
    {
      id: 0,
      day: 'DOMINGO',
      date: 'DIA 1',
      title: 'Do Zero ao Primeiro "SIM"',
      time: 'Ao vivo às 20h',
      type: 'live',
      color: 'primary',
      gradient: 'from-primary/20 to-primary-light/20',
      border: 'border-primary/30',
      icon: '🚀',
      topics: [
        'O checklist exato pra sair do zero e virar programador profissional',
        'Minha trajetória completa: de eletricista a dev sênior em bancos',
        'Apresentação do projeto que vamos construir juntos',
        'Como funciona o mercado de programação em 2025',
        'Entrega dos materiais exclusivos do Bootcamp'
      ]
    },
    {
      id: 1,
      day: 'SEGUNDA',
      date: 'DIA 2',
      title: 'HTML Completo: A Base de Tudo',
      time: 'Liberado às 9h + Monitoria às 20h',
      type: 'recorded',
      color: 'emerald',
      gradient: 'from-emerald-500/20 to-green-500/20',
      border: 'border-emerald-500/30',
      icon: '🏗️',
      topics: [
        'Estrutura completa do HTML do zero ao avançado',
        'Criando a base do nosso App de Previsão do Tempo',
        'Tags essenciais que todo programador precisa dominar',
        'Boas práticas que vão fazer diferença no seu código',
        'Exercícios práticos pra fixar o aprendizado'
      ]
    },
    {
      id: 2,
      day: 'TERÇA',
      date: 'DIA 3',
      title: 'JavaScript: A Mágica Acontece',
      time: 'Liberado às 9h + Monitoria às 20h',
      type: 'recorded',
      color: 'cyan',
      gradient: 'from-cyan-500/20 to-teal-500/20',
      border: 'border-cyan-500/30',
      icon: '⚡',
      topics: [
        'Lógica de programação descomplicada',
        'JavaScript na prática: fazendo seu projeto funcionar',
        'Integração com APIs: buscando dados meteorológicos reais',
        'Manipulação do DOM: interatividade profissional',
        'Debugando código como um programador sênior'
      ]
    },
    {
      id: 3,
      day: 'QUARTA',
      date: 'DIA 4',
      title: 'CSS Completo: Deixando Tudo Bonito',
      time: 'Liberado às 9h + Monitoria às 20h',
      type: 'recorded',
      color: 'blue',
      gradient: 'from-blue-500/20 to-sky-500/20',
      border: 'border-blue-500/30',
      icon: '🎨',
      topics: [
        'CSS do básico ao profissional em um dia',
        'Estilizando nosso projeto pra impressionar recrutadores',
        'Flexbox e Grid: as técnicas mais pedidas do mercado',
        'Responsividade: seu site perfeito em qualquer tela',
        'Animações e efeitos que valorizam seu portfólio'
      ]
    },
    {
      id: 4,
      day: 'QUINTA',
      date: 'DIA 5',
      title: 'Aula com Recrutadora: Seja Contratado!',
      time: 'Liberado às 9h + Monitoria às 20h',
      type: 'recorded',
      color: 'indigo',
      gradient: 'from-indigo-500/20 to-purple-500/20',
      border: 'border-indigo-500/30',
      icon: '💼',
      topics: [
        'Currículo matador: o que recrutadores realmente procuram',
        'LinkedIn que chama atenção e gera entrevistas',
        'Como se preparar pras entrevistas técnicas',
        'O que responder nas perguntas mais difíceis',
        'Erros fatais que eliminam candidatos (e como evitar)'
      ]
    },
    {
      id: 5,
      day: 'SEXTA',
      date: 'DIA 6',
      title: 'R$1.000 em 7 Dias com Programação',
      time: 'Liberado às 9h + Monitoria às 20h',
      type: 'recorded',
      color: 'yellow',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      border: 'border-yellow-500/30',
      icon: '💰',
      topics: [
        'Como vender o projeto que criamos por R$1.000+',
        'Onde encontrar seus primeiros clientes rapidamente',
        'Precificação: quanto cobrar sendo iniciante',
        'Template de proposta comercial que converte',
        'Cases reais de alunos que faturaram na primeira semana'
      ]
    },
    {
      id: 6,
      day: 'SÁBADO',
      date: 'DIA 7',
      title: 'Próximos Passos + Sorteio do Notebook',
      time: 'Ao vivo às 20h',
      type: 'live',
      color: 'primary',
      gradient: 'from-primary/20 to-primary-light/20',
      border: 'border-primary/30',
      icon: '🎉',
      topics: [
        'Plano de ação: seus próximos 90 dias mapeados',
        'Como usar IA pra acelerar 10x seu aprendizado',
        'Tecnologias pra aprender depois do Bootcamp',
        'Comunidade: como continuar evoluindo com o grupo',
        'SORTEIO DO NOTEBOOK AO VIVO!'
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            📚 Cronograma Completo dos{' '}
            <span className="text-gradient">7 Dias</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            ⏰ São apenas <span className="text-primary font-semibold">7 dias que podem mudar</span> os próximos{' '}
            <span className="text-primary font-semibold">7 anos da sua vida</span>
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
                    <h3 className="text-xl md:text-2xl font-bold text-text-light mb-2">
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
              🎯 Enquanto a maioria vai continuar no mesmo lugar...
            </h3>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Você vai estar construindo um projeto real, aprendendo o que o mercado pede e saindo com um 
              <span className="text-primary font-semibold"> plano prático pra conquistar seu primeiro emprego.</span>
            </p>
            <p className="text-primary font-semibold text-lg">
              Mas isso só acontece se você confirmar sua presença AGORA.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ScheduleSection 