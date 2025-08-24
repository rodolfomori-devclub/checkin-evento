// ATENÇÃO: Substitua esta URL pela URL do seu Google Apps Script após fazer o deploy
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxNu3p8f_O5ZxmRqNqXjPe8rF3O3iLvLVLRjO8x5vCqgKCEQJEOBQFoGzNxvVAZm8FJ/exec'

export const sendToGoogleSheets = async (data) => {
  try {
    // Preparar os dados completos
    const payload = {
      name: data.name,
      email: data.email,
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR'),
      recordingResponse: data.recordingResponse || '',
      codeResponse: data.codeResponse || ''
    }

    console.log('Enviando para Google Sheets:', payload)

    // Enviar usando fetch
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    // Tentar ler a resposta
    try {
      const result = await response.text()
      console.log('Resposta do Google Sheets:', result)
      return true
    } catch (parseError) {
      // Se não conseguir ler a resposta, ainda considera sucesso
      // pois o Apps Script pode ter processado os dados
      console.log('Dados enviados (resposta não legível)')
      return true
    }
    
  } catch (error) {
    console.error('Erro ao enviar dados para o Google Sheets:', error)
    
    // Tentar método alternativo com FormData
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('date', new Date().toLocaleDateString('pt-BR'))
      formData.append('time', new Date().toLocaleTimeString('pt-BR'))
      formData.append('recordingResponse', data.recordingResponse || '')
      formData.append('codeResponse', data.codeResponse || '')

      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })

      console.log('Dados enviados via FormData')
      return true
    } catch (fallbackError) {
      console.error('Erro no método alternativo:', fallbackError)
      return false
    }
  }
}