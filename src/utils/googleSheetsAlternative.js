// Alternativa usando um serviço de webhook que integra com Google Sheets
// Esta é uma solução mais simples que não requer configuração do Google Apps Script

// Cole aqui a URL do webhook que você copiou do Make.com
const WEBHOOK_URL = 'https://hook.us1.make.com/YOUR_WEBHOOK_URL' // SUBSTITUA COM SUA URL!

// Função para mapear as respostas com as frases exatas solicitadas
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

export const sendToGoogleSheetsViaWebhook = async (data) => {
  try {
    const payload = {
      name: data.name,
      email: data.email,
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR'),
      recordingResponse: mapResponse(data.recordingResponse, 'recording'),
      codeResponse: mapResponse(data.codeResponse, 'code'),
      timestamp: new Date().toISOString()
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      console.log('Dados enviados com sucesso:', payload)
      return true
    } else {
      console.error('Erro ao enviar dados:', response.status)
      return false
    }
  } catch (error) {
    console.error('Erro ao enviar dados:', error)
    return false
  }
}

// Alternativa 2: Salvar localmente e exportar depois
export const saveDataLocally = (data) => {
  try {
    // Recuperar dados existentes
    const existingData = localStorage.getItem('checkin_data')
    const checkins = existingData ? JSON.parse(existingData) : []
    
    // Adicionar novo check-in
    checkins.push({
      name: data.name,
      email: data.email,
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR'),
      recordingResponse: mapResponse(data.recordingResponse, 'recording'),
      codeResponse: mapResponse(data.codeResponse, 'code'),
      timestamp: new Date().toISOString()
    })
    
    // Salvar no localStorage
    localStorage.setItem('checkin_data', JSON.stringify(checkins))
    
    console.log('Dados salvos localmente:', checkins)
    return true
  } catch (error) {
    console.error('Erro ao salvar dados localmente:', error)
    return false
  }
}

// Função para exportar dados salvos localmente como CSV
export const exportDataAsCSV = () => {
  try {
    const data = localStorage.getItem('checkin_data')
    if (!data) {
      alert('Nenhum dado de check-in encontrado')
      return
    }
    
    const checkins = JSON.parse(data)
    
    // Criar CSV
    let csv = 'Nome,Email,Data,Horário,Resposta Gravação,Resposta Código\n'
    checkins.forEach(item => {
      csv += `"${item.name}","${item.email}","${item.date}","${item.time}","${item.recordingResponse || 'Não respondido'}","${item.codeResponse || 'Não respondido'}"\n`
    })
    
    // Criar blob e download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `checkins_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    console.log('Dados exportados com sucesso')
  } catch (error) {
    console.error('Erro ao exportar dados:', error)
  }
}