// script.js

// Função para formatar o número de telefone
function formatarTelefone(input) {
    // Remove caracteres não numéricos
    const apenasNumeros = input.value.replace(/\D/g, '');
  
    // Formatação do número de telefone
    if (apenasNumeros.length === 11) {
      input.value = apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      input.value = apenasNumeros;
    }
  }
  
  // Função para permitir apenas números no campo de telefone
  function permitirApenasNumeros(event) {
    const charCode = event.which || event.keyCode;
  
    if (!(charCode >= 48 && charCode <= 57) && charCode !== 8) {
      event.preventDefault();
    }
  }
  