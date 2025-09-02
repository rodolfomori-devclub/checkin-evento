// Configuração do Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAfHlyEM4OuGrCsGBAttCkhh1_sO15K4CA",
  authDomain: "check-in-eb3a1.firebaseapp.com",
  projectId: "check-in-eb3a1",
  storageBucket: "check-in-eb3a1.firebasestorage.app",
  messagingSenderId: "868356690302",
  appId: "1:868356690302:web:f79f7e76ac72b40150e32f",
  measurementId: "G-V6G42662GT"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar Firestore
export const db = getFirestore(app)

// Inicializar Auth
export const auth = getAuth(app)

export default app