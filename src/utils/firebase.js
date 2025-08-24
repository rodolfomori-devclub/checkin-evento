import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../config/firebase'

// Função para salvar dados do check-in no Firestore
export const saveToFirestore = async (data) => {
  try {
    // Função para mapear respostas com as frases exatas solicitadas
    const mapResponse = (response, type) => {
      const mappings = {
        recording: {
          'yes': 'SIM, quero a gravação vitalícia',
          'no': 'NÃO, não quero',
          'no_thanks': 'Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter a gravação vitalícia',
          'already_purchased': 'SIM (Já garanti a gravação vitalícia)'
        },
        code: {
          'yes': 'SIM, quero o código completo',
          'no': 'NÃO, não quero',
          'no_thanks': 'Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter o código completo',
          'already_purchased': 'SIM (Já garanti o código completo)'
        }
      }
      
      return mappings[type][response] || response || 'Não respondido'
    }

    // Preparar dados completos
    const checkinData = {
      name: data.name,
      email: data.email,
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR'),
      recordingResponse: mapResponse(data.recordingResponse, 'recording'),
      codeResponse: mapResponse(data.codeResponse, 'code'),
      timestamp: new Date(),
      // Dados extras para análise
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer || 'Direct'
    }

    // Salvar no Firestore
    const docRef = await addDoc(collection(db, 'checkins'), checkinData)
    
    console.log('✅ Dados salvos no Firebase com ID:', docRef.id)
    
    return {
      success: true,
      id: docRef.id,
      data: checkinData
    }
  } catch (error) {
    console.error('❌ Erro ao salvar no Firebase:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Função para buscar todos os check-ins (para admin)
export const getAllCheckins = async () => {
  try {
    const q = query(collection(db, 'checkins'), orderBy('timestamp', 'desc'))
    const querySnapshot = await getDocs(q)
    
    const checkins = []
    querySnapshot.forEach((doc) => {
      checkins.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    return checkins
  } catch (error) {
    console.error('Erro ao buscar check-ins:', error)
    return []
  }
}

// Função para exportar dados como CSV
export const exportCheckinsToCSV = async () => {
  try {
    const checkins = await getAllCheckins()
    
    if (checkins.length === 0) {
      alert('Nenhum check-in encontrado')
      return
    }
    
    // Criar CSV
    let csv = 'Nome,Email,Data,Horário,Resposta Gravação,Resposta Código,Timestamp\n'
    
    checkins.forEach(item => {
      csv += `"${item.name}","${item.email}","${item.date}","${item.time}","${item.recordingResponse}","${item.codeResponse}","${item.timestamp?.toDate?.()?.toISOString() || item.timestamp}"\n`
    })
    
    // Criar blob e download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `checkins_firebase_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    console.log(`✅ ${checkins.length} check-ins exportados com sucesso`)
  } catch (error) {
    console.error('❌ Erro ao exportar:', error)
  }
}

// Função para contar total de check-ins
export const getCheckinsCount = async () => {
  try {
    const checkins = await getAllCheckins()
    return checkins.length
  } catch (error) {
    console.error('Erro ao contar check-ins:', error)
    return 0
  }
}