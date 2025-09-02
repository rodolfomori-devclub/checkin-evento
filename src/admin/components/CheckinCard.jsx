import React from 'react'
import { motion } from 'framer-motion'

const CheckinCard = ({ checkin, onEdit, onDuplicate, onDelete, onTogglePublish }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Sem data'
    
    let date
    if (timestamp.toDate) {
      // Firestore timestamp
      date = timestamp.toDate()
    } else if (typeof timestamp === 'string') {
      date = new Date(timestamp)
    } else {
      date = new Date(timestamp)
    }
    
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  const getStatusColor = (isPublished) => {
    return isPublished 
      ? 'bg-green-500/20 border-green-500/30 text-green-400'
      : 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400'
  }

  const getStatusText = (isPublished) => {
    return isPublished ? 'Publicado' : 'Rascunho'
  }

  const handleAction = async (action, actionName) => {
    try {
      await action()
    } catch (error) {
      console.error(`Erro ao ${actionName}:`, error)
      alert(`Erro ao ${actionName}. Tente novamente.`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 hover:bg-white/5 transition-all duration-200 border-l-4 border-l-primary/50"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-light mb-2 line-clamp-2">
            {checkin.title}
          </h3>
          <div className="flex items-center gap-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(checkin.isPublished)}`}>
              {getStatusText(checkin.isPublished)}
            </span>
            <span className="text-text-muted text-sm">
              /{checkin.slug}
            </span>
          </div>
        </div>
        
        {/* Quick actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onTogglePublish(checkin.id, !checkin.isPublished)}
            className={`p-2 rounded-lg transition-all duration-200 ${
              checkin.isPublished 
                ? 'bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/30 text-yellow-400' 
                : 'bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400'
            }`}
            title={checkin.isPublished ? 'Despublicar' : 'Publicar'}
          >
            {checkin.isPublished ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L21 21l-3.29-3.29m-7.532-7.532L21 21" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3 text-sm">
        <div>
          <span className="text-text-muted">Contagem regressiva:</span>
          <span className="text-text-light ml-2">
            {formatDate(checkin.countdownDate)}
          </span>
        </div>
        
        {checkin.isPublished && (
          <div>
            <span className="text-text-muted">URL:</span>
            <a 
              href={`/${checkin.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light ml-2 underline"
            >
              /{checkin.slug}
            </a>
          </div>
        )}

        <div>
          <span className="text-text-muted">Criado em:</span>
          <span className="text-text-light ml-2">
            {formatDate(checkin.createdAt)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(checkin)}
            className="px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 rounded-lg transition-all duration-200 text-sm font-medium"
          >
            Editar
          </button>
          
          <button
            onClick={() => handleAction(() => onDuplicate(checkin.id), 'duplicar')}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-400 rounded-lg transition-all duration-200 text-sm font-medium"
          >
            Duplicar
          </button>
        </div>

        <button
          onClick={() => {
            if (confirm(`Tem certeza que deseja excluir "${checkin.title}"?`)) {
              handleAction(() => onDelete(checkin.id), 'excluir')
            }
          }}
          className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-all duration-200 text-sm font-medium"
        >
          Excluir
        </button>
      </div>
    </motion.div>
  )
}

export default CheckinCard