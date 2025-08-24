// GOOGLE APPS SCRIPT - DevClub Check-in
// Cole este código no Google Apps Script da sua planilha

function doPost(e) {
  try {
    // Log para debug
    console.log('Dados recebidos:', e.postData ? e.postData.contents : e.parameter);
    
    // Dados podem vir como JSON ou FormData
    let data;
    
    if (e.postData && e.postData.type === 'application/json') {
      // Se for JSON
      data = JSON.parse(e.postData.contents);
    } else {
      // Se for FormData ou parâmetros URL
      data = e.parameter;
    }
    
    // Função para mapear respostas em português
    function mapResponse(response, type) {
      const mappings = {
        recording: {
          'yes': 'Quero a gravação',
          'no': 'Não quero',
          'no_thanks': 'Não quero a gravação',
          'already_purchased': 'Já comprei a gravação'
        },
        code: {
          'yes': 'Quero o código',
          'no': 'Não quero',
          'no_thanks': 'Não quero o código', 
          'already_purchased': 'Já comprei o código'
        }
      };
      
      return mappings[type] && mappings[type][response] ? mappings[type][response] : (response || 'Não respondido');
    }
    
    // Abre a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Verifica se é a primeira execução e cria cabeçalhos
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Nome',
        'Email', 
        'Data',
        'Horário',
        'Resposta Gravação',
        'Resposta Código'
      ]);
    }
    
    // Adiciona os dados na próxima linha disponível
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.date || new Date().toLocaleDateString('pt-BR'),
      data.time || new Date().toLocaleTimeString('pt-BR'),
      mapResponse(data.recordingResponse, 'recording'),
      mapResponse(data.codeResponse, 'code')
    ]);
    
    // Log de sucesso
    console.log('Dados salvos com sucesso na linha:', sheet.getLastRow());
    
    // Retorna sucesso
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Check-in realizado com sucesso!',
      'row': sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Log do erro
    console.error('Erro no Apps Script:', error.toString());
    
    // Retorna erro
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': 'Erro ao salvar dados: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Função para GET (teste da API)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'online',
    'message': 'DevClub Check-in API está funcionando!',
    'timestamp': new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

// Função para testar manualmente (execute no editor)
function testScript() {
  const testData = {
    name: 'João Teste',
    email: 'joao@teste.com',
    recordingResponse: 'yes',
    codeResponse: 'no_thanks'
  };
  
  // Simula um POST
  const e = {
    postData: {
      type: 'application/json',
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  console.log('Resultado do teste:', result.getContent());
}