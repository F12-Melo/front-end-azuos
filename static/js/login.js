const usuarioSimulado = {
  email: "teste123",
  senha: "1234"
};

function loginSimulado(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("password").value.trim();
  const mensagemDiv = document.getElementById("mensagem");

  if (email === usuarioSimulado.email && senha === usuarioSimulado.senha) {
    mensagemDiv.textContent = "Login bem-sucedido! Redirecionando...";
    mensagemDiv.className = "flash-mensagem sucesso";
    mensagemDiv.style.display = "block";

    // Redireciona para index2.html após 1.5 segundos
    setTimeout(() => {
      window.location.href = "../templates/index2.html";
    }, 1500);
  } else {
    mensagemDiv.textContent = "Usuário ou senha incorretos.";
    mensagemDiv.className = "flash-mensagem";
    mensagemDiv.style.display = "block";
  }
}
