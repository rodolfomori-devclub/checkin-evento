import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const FAQSection = ({ onOpenCheckin }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqData = [
    {
      id: 1,
      question: "Perdi o e-mail com as informações. O que faço?",
      answer: "Chama a equipe de suporte no nosso link oficial do WhatsApp. Nossa equipe está sempre disponível para te ajudar com qualquer problema técnico ou dúvida sobre o acesso.",
      icon: "📧",
      category: "Técnico"
    },
    {
      id: 2,
      question: "Posso fazer o check-in pelo celular?",
      answer: "Sim! O check-in funciona perfeitamente pelo celular. Mas lembre-se de assistir as aulas pelo computador para poder praticar e acompanhar os códigos que vamos escrever juntos.",
      icon: "📱",
      category: "Acesso"
    },
    {
      id: 3,
      question: "E se eu tiver problemas técnicos durante a aula?",
      answer: "Nossa equipe está pronta para te ajudar no WhatsApp durante todo o evento. Também teremos monitores técnicos disponíveis para resolver qualquer problema rapidamente.",
      icon: "🔧",
      category: "Suporte"
    },
    {
      id: 4,
      question: "Não puder assistir ao vivo. As aulas ficam gravadas?",
      answer: "Sim! As aulas ficam gravadas durante toda a semana do Bootcamp. Mas participar ao vivo tem vantagens: você pode fazer perguntas em tempo real, participa das dinâmicas exclusivas e tem mais chances no sorteio do notebook.",
      icon: "🎥",
      category: "Acesso"
    },
    {
      id: 5,
      question: "Preciso ter conhecimento prévio em programação?",
      answer: "Não! O Bootcamp foi criado especificamente para iniciantes. Vamos do absoluto zero até você estar pronto para conseguir seu primeiro emprego como programador. Tudo será explicado passo a passo.",
      icon: "🎯",
      category: "Conteúdo"
    },
    {
      id: 6,
      question: "Qual computador preciso ter para participar?",
      answer: "Qualquer computador funciona! Não precisa ser potente. O importante é ter um computador (Windows, Mac ou Linux), conexão com internet e um navegador atualizado. Vamos usar ferramentas gratuitas e leves.",
      icon: "💻",
      category: "Requisitos"
    },
    {
      id: 7,
      question: "Como funciona o sorteio do notebook?",
      answer: "O sorteio será ao vivo na última aula (sábado às 20h). Para participar, você precisa fazer o check-in e estar presente em pelo menos 4 das 7 aulas. Quanto mais participar, mais chances tem!",
      icon: "🎁",
      category: "Sorteio"
    },
    {
      id: 8,
      question: "Vou receber certificado de participação?",
      answer: "Sim! Todos que completarem o check-in e participarem de pelo menos 5 aulas recebem um certificado digital que pode ser usado no LinkedIn e currículo.",
      icon: "🏆",
      category: "Certificado"
    }
  ]

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        height: { duration: 0.3, delay: 0.1 },
        opacity: { duration: 0.2 }
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6"
          >
            <span className="text-2xl">❓</span>
            <span className="text-primary font-semibold text-lg">FAQ RÁPIDO</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
            Respondemos suas{' '}
            <span className="text-gradient">principais dúvidas</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Não encontrou sua pergunta? Nossa equipe está disponível no WhatsApp para te ajudar!
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card border border-white/10 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Question Header */}
                <motion.button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon */}
                    <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {faq.icon}
                    </div>
                    
                    {/* Question */}
                    <div className="flex-1">
                      <div className="text-xs text-primary font-semibold uppercase tracking-wide mb-2">
                        {faq.category}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-text-light leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Expand Icon */}
                  <motion.div
                    animate={{ rotate: openQuestion === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary text-2xl font-bold flex-shrink-0"
                  >
                    +
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openQuestion === faq.id && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-16 md:pl-20">
                          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-4" />
                          <p className="text-text-muted leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light" />
            
            <div className="relative">
              <div className="text-6xl mb-6">🤝</div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-text-light mb-4">
                Ainda tem dúvidas? Nossa equipe está aqui para ajudar!
              </h3>
              
              <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
                Não deixe uma dúvida simples te impedir de participar do evento que pode 
                <span className="text-primary font-semibold"> mudar sua vida profissional</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://go.rodolfomori.com.br/suporte"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📱</span>
                  <span>Falar com Suporte</span>
                </motion.a>

                <motion.button
                  onClick={onOpenCheckin}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-background font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">🚀</span>
                  <span>Fazer Check-in Agora</span>
                </motion.button>
              </div>

              {/* Stats */}
              <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Suporte disponível 24/7</span>
                </div>
                

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>97% de satisfação no atendimento</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default FAQSection 