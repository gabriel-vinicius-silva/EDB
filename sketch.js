// Valida os campos de usuário e senha
function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Usuário ou senha inválidos.");
      return false;
    }
  
    return true;
  }
  
  // Envia o formulário quando o botão for clicado
  document.getElementById("submit").addEventListener("click", () => {
    if (validate()) {
      document.forms[0].submit();
    }
  });
  