import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'

// Login com email e senha
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { success: true, user: userCredential.user }
  } catch (error) {
    console.error('Erro no login:', error)
    
    // Mensagens de erro em português
    let errorMessage = 'Erro ao fazer login'
    
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Email inválido'
        break
      case 'auth/user-disabled':
        errorMessage = 'Usuário desativado'
        break
      case 'auth/user-not-found':
        errorMessage = 'Usuário não encontrado'
        break
      case 'auth/wrong-password':
        errorMessage = 'Senha incorreta'
        break
      case 'auth/invalid-credential':
        errorMessage = 'Credenciais inválidas'
        break
      case 'auth/too-many-requests':
        errorMessage = 'Muitas tentativas. Tente novamente mais tarde'
        break
      default:
        errorMessage = error.message
    }
    
    return { success: false, error: errorMessage }
  }
}

// Logout
export const logout = async () => {
  try {
    await signOut(auth)
    return { success: true }
  } catch (error) {
    console.error('Erro no logout:', error)
    return { success: false, error: error.message }
  }
}

// Verificar estado de autenticação
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback)
}

// Verificar se é admin
export const isAdmin = (user) => {
  // Por enquanto, apenas verifica se o email é o admin configurado
  return user?.email === 'admindev@checkin.com'
}