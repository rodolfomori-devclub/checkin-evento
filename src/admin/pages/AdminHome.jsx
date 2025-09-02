import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CheckinCard from '../components/CheckinCard'
import CheckinEditor from '../components/CheckinEditor'
import { 
  getAllCheckins, 
  deleteCheckin, 
  updateCheckin, 
  duplicateCheckin 
} from '../../firebase/checkinService'

const AdminHome = () => {
  const [checkins, setCheckins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [editingCheckin, setEditingCheckin] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all') // all, published, draft

  // Carregar check-ins
  const loadCheckins = async () => {
    try {
      setLoading(true)
      const result = await getAllCheckins()
      
      if (result.success) {
        setCheckins(result.data)
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('Erro ao carregar check-ins')
      console.error('Erro:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCheckins()
  }, [])

  // Filtrar check-ins
  const filteredCheckins = checkins.filter((checkin) => {
    const matchesSearch = checkin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         checkin.slug.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'published' && checkin.isPublished) ||
                         (filterStatus === 'draft' && !checkin.isPublished)
    
    return matchesSearch && matchesFilter
  })

  // Handlers
  const handleNewCheckin = () => {
    setEditingCheckin(null)
    setIsEditorOpen(true)
  }

  const handleEditCheckin = (checkin) => {
    setEditingCheckin(checkin)
    setIsEditorOpen(true)
  }

  const handleDeleteCheckin = async (id) => {
    try {
      const result = await deleteCheckin(id)
      if (result.success) {
        setCheckins(checkins.filter(c => c.id !== id))
      } else {
        alert('Erro ao excluir: ' + result.error)
      }
    } catch (err) {
      alert('Erro ao excluir check-in')
    }
  }

  const handleDuplicateCheckin = async (id) => {
    try {
      const result = await duplicateCheckin(id)
      if (result.success) {
        loadCheckins() // Recarregar lista
      } else {
        alert('Erro ao duplicar: ' + result.error)
      }
    } catch (err) {
      alert('Erro ao duplicar check-in')
    }
  }

  const handleTogglePublish = async (id, isPublished) => {
    try {
      const result = await updateCheckin(id, { isPublished })
      if (result.success) {
        setCheckins(checkins.map(c => 
          c.id === id ? { ...c, isPublished } : c
        ))
      } else {
        alert('Erro ao alterar status: ' + result.error)
      }
    } catch (err) {
      alert('Erro ao alterar status de publicação')
    }
  }

  const handleSaveCheckin = () => {
    loadCheckins() // Recarregar lista
    setIsEditorOpen(false)
    setEditingCheckin(null)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-light mb-2" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
            Check-ins
          </h1>
          <p className="text-text-muted">
            Gerencie suas páginas de check-in
          </p>
        </div>
        
        <button
          onClick={handleNewCheckin}
          className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Novo Check-in
        </button>
      </div>

      {/* Filters */}
      <div className="glass-card p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar por título ou slug..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
            />
          </div>
          
          {/* Status filter */}
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
            >
              <option value="all">Todos</option>
              <option value="published">Publicados</option>
              <option value="draft">Rascunhos</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 pt-4 border-t border-white/10 flex gap-6 text-sm">
          <span className="text-text-muted">
            Total: <span className="text-text-light font-medium">{checkins.length}</span>
          </span>
          <span className="text-text-muted">
            Publicados: <span className="text-green-400 font-medium">{checkins.filter(c => c.isPublished).length}</span>
          </span>
          <span className="text-text-muted">
            Rascunhos: <span className="text-yellow-400 font-medium">{checkins.filter(c => !c.isPublished).length}</span>
          </span>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Check-ins Grid */}
      {filteredCheckins.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4 opacity-50">📋</div>
          <h3 className="text-xl font-semibold text-text-light mb-2">
            {searchTerm || filterStatus !== 'all' ? 'Nenhum resultado encontrado' : 'Nenhum check-in criado'}
          </h3>
          <p className="text-text-muted mb-6">
            {searchTerm || filterStatus !== 'all' ? 
              'Tente alterar os filtros de busca' : 
              'Clique em "Novo Check-in" para começar'}
          </p>
          {!searchTerm && filterStatus === 'all' && (
            <button
              onClick={handleNewCheckin}
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-all duration-200"
            >
              Criar Primeiro Check-in
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCheckins.map((checkin) => (
            <CheckinCard
              key={checkin.id}
              checkin={checkin}
              onEdit={handleEditCheckin}
              onDelete={handleDeleteCheckin}
              onDuplicate={handleDuplicateCheckin}
              onTogglePublish={handleTogglePublish}
            />
          ))}
        </div>
      )}

      {/* Editor Modal */}
      {isEditorOpen && (
        <CheckinEditor
          isOpen={isEditorOpen}
          onClose={() => {
            setIsEditorOpen(false)
            setEditingCheckin(null)
          }}
          checkin={editingCheckin}
          onSave={handleSaveCheckin}
        />
      )}
    </div>
  )
}

export default AdminHome