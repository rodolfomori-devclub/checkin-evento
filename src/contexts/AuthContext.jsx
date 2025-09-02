import React, { createContext, useState, useEffect, useContext } from 'react'
import { onAuthChange, loginWithEmail, logout as authLogout, isAdmin } from '../firebase/authService'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAdminUser, setIsAdminUser] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthChange((authUser) => {
      if (authUser) {
        setUser(authUser)
        setIsAdminUser(isAdmin(authUser))
      } else {
        setUser(null)
        setIsAdminUser(false)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = async (email, password) => {
    const result = await loginWithEmail(email, password)
    if (result.success) {
      setUser(result.user)
      setIsAdminUser(isAdmin(result.user))
    }
    return result
  }

  const logout = async () => {
    const result = await authLogout()
    if (result.success) {
      setUser(null)
      setIsAdminUser(false)
    }
    return result
  }

  const value = {
    user,
    isAdminUser,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}