import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore'
import { db } from '../config/firebase'

const COLLECTION_NAME = 'checkins'

// Criar novo check-in
export const createCheckin = async (data) => {
  try {
    const checkinData = {
      ...data,
      isPublished: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), checkinData)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Erro ao criar check-in:', error)
    return { success: false, error: error.message }
  }
}

// Buscar todos os check-ins
export const getAllCheckins = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    
    const checkins = []
    querySnapshot.forEach((doc) => {
      checkins.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    return { success: true, data: checkins }
  } catch (error) {
    console.error('Erro ao buscar check-ins:', error)
    return { success: false, error: error.message }
  }
}

// Buscar check-in por ID
export const getCheckinById = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { 
        success: true, 
        data: {
          id: docSnap.id,
          ...docSnap.data()
        }
      }
    } else {
      return { success: false, error: 'Check-in não encontrado' }
    }
  } catch (error) {
    console.error('Erro ao buscar check-in:', error)
    return { success: false, error: error.message }
  }
}

// Buscar check-in por slug
export const getCheckinBySlug = async (slug) => {
  try {
    const q = query(collection(db, COLLECTION_NAME), where('slug', '==', slug))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return { 
        success: true, 
        data: {
          id: doc.id,
          ...doc.data()
        }
      }
    } else {
      return { success: false, error: 'Check-in não encontrado' }
    }
  } catch (error) {
    console.error('Erro ao buscar check-in por slug:', error)
    return { success: false, error: error.message }
  }
}

// Atualizar check-in
export const updateCheckin = async (id, data) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id)
    const updateData = {
      ...data,
      updatedAt: serverTimestamp()
    }
    
    await updateDoc(docRef, updateData)
    return { success: true }
  } catch (error) {
    console.error('Erro ao atualizar check-in:', error)
    return { success: false, error: error.message }
  }
}

// Deletar check-in
export const deleteCheckin = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id))
    return { success: true }
  } catch (error) {
    console.error('Erro ao deletar check-in:', error)
    return { success: false, error: error.message }
  }
}

// Verificar se slug já existe
export const checkSlugExists = async (slug, excludeId = null) => {
  try {
    const q = query(collection(db, COLLECTION_NAME), where('slug', '==', slug))
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      return false
    }
    
    // Se estamos editando, verificar se o slug pertence ao próprio documento
    if (excludeId && querySnapshot.docs[0].id === excludeId) {
      return false
    }
    
    return true
  } catch (error) {
    console.error('Erro ao verificar slug:', error)
    return false
  }
}

// Duplicar check-in
export const duplicateCheckin = async (id) => {
  try {
    const original = await getCheckinById(id)
    
    if (!original.success) {
      return { success: false, error: 'Check-in original não encontrado' }
    }
    
    // Gerar novo slug
    let newSlug = original.data.slug + '-copia'
    let counter = 1
    
    while (await checkSlugExists(newSlug)) {
      newSlug = original.data.slug + '-copia-' + counter
      counter++
    }
    
    const newData = {
      ...original.data,
      slug: newSlug,
      title: original.data.title + ' (Cópia)',
      isPublished: false
    }
    
    delete newData.id
    delete newData.createdAt
    delete newData.updatedAt
    
    return await createCheckin(newData)
  } catch (error) {
    console.error('Erro ao duplicar check-in:', error)
    return { success: false, error: error.message }
  }
}