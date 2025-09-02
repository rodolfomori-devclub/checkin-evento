import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const AdminHeader = () => {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    if (confirm('Tem certeza que deseja sair?')) {
      await logout()
    }
  }

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-text-light" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
              <span className="text-gradient">Admin Check-in</span>
            </h1>
          </div>

          {/* User menu */}
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <p className="text-text-light font-medium">
                {user?.email}
              </p>
              <p className="text-text-muted text-xs">Administrador</p>
            </div>
            
            <button
              onClick={handleLogout}
              className="p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 rounded-lg transition-all duration-200"
              title="Sair"
            >
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader