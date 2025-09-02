// Script para criar o usuário admin no Firebase Auth
// Execute: node create-admin-user.js

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './src/config/firebase.js'

const createAdminUser = async () => {
  try {
    console.log('🔥 Criando usuário admin no Firebase...')
    
    const email = 'admindev@checkin.com'
    const password = 'seije@#2312'
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    console.log('✅ Usuário admin criado com sucesso!')
    console.log('📧 Email:', userCredential.user.email)
    console.log('🆔 UID:', userCredential.user.uid)
    console.log('')
    console.log('🎯 Agora você pode fazer login no admin:')
    console.log('👉 http://localhost:3000/admin/login')
    console.log('')
    console.log('📋 Credenciais:')
    console.log('   Email:', email)
    console.log('   Senha:', password)
    
    process.exit(0)
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('✅ Usuário admin já existe!')
      console.log('👉 http://localhost:3000/admin/login')
      console.log('')
      console.log('📋 Credenciais:')
      console.log('   Email: admindev@checkin.com')
      console.log('   Senha: seije@#2312')
    } else {
      console.error('❌ Erro ao criar usuário admin:', error)
    }
    process.exit(1)
  }
}

createAdminUser()