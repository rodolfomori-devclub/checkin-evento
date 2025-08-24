// VERSÃO SIMPLIFICADA - Cole este código no Google Apps Script
// https://script.google.com

function doPost(e) {
  try {
    // ID da sua planilha (extraído da URL)
    const PLANILHA_ID = '1h5yG0zs3fJNtdHPuRVRkS3EGztsoSHifxBEsblJSYs4';
    
    // Abre a planilha pelo ID
    const planilha = SpreadsheetApp.openById(PLANILHA_ID);
    const aba = planilha.getActiveSheet();
    
    // Pega os dados recebidos
    let dados;
    if (e.postData && e.postData.contents) {
      dados = JSON.parse(e.postData.contents);
    } else {
      dados = e.parameter || {};
    }
    
    // Mapear respostas com as frases exatas solicitadas
    function mapearResposta(resposta, tipo) {
      if (tipo === 'recording') {
        switch(resposta) {
          case 'yes': return 'SIM, quero a gravação vitalícia';
          case 'no': return 'NÃO, não quero';
          case 'no_thanks': return 'Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter a gravação vitalícia';
          case 'already_purchased': return 'SIM (Já garanti a gravação vitalícia)';
          default: return resposta || 'Não respondido';
        }
      } else if (tipo === 'code') {
        switch(resposta) {
          case 'yes': return 'SIM, quero o código completo';
          case 'no': return 'NÃO, não quero';
          case 'no_thanks': return 'Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter o código completo';
          case 'already_purchased': return 'SIM (Já garanti o código completo)';
          default: return resposta || 'Não respondido';
        }
      }
      return resposta || 'Não respondido';
    }
    
    // Se for a primeira vez, criar cabeçalhos
    if (aba.getLastRow() === 0) {
      aba.getRange(1, 1, 1, 6).setValues([[
        'Nome', 'Email', 'Data', 'Horário', 'Resposta Gravação', 'Resposta Código'
      ]]);
    }
    
    // Adicionar nova linha com os dados
    const novaLinha = [
      dados.name || '',
      dados.email || '',
      dados.date || new Date().toLocaleDateString('pt-BR'),
      dados.time || new Date().toLocaleTimeString('pt-BR'),
      mapearResposta(dados.recordingResponse, 'recording'),
      mapearResposta(dados.codeResponse, 'code')
    ];
    
    aba.appendRow(novaLinha);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Dados salvos com sucesso!',
        linha: aba.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (erro) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: erro.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('DevClub Check-in API funcionando!')
    .setMimeType(ContentService.MimeType.TEXT);
}