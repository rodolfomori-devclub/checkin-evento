import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const ProtectedRoute = () => {
  const { user, isAdminUser, loading } = useAuth()

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-muted">Verificando autenticação...</p>
        </div>
      </div>
    )
  }

  // Redirecionar se não estiver autenticado ou não for admin
  if (!user || !isAdminUser) {
    return <Navigate to="/admin/login" replace />
  }

  // Renderizar as rotas filhas se estiver autenticado
  return <Outlet />
}

export default ProtectedRoute