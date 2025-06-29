document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
      email: document.getElementById('email').value,
      senha: document.getElementById('senha').value
    };

    try {
      const response = await fetch('https://azuos.netlify.app/login_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.mensagem || "Login realizado com sucesso!");
        // (Opcional) armazenar o ID do usuário localmente
        localStorage.setItem("usuario_id", result.usuario_id);
        window.location.href = "../templates/index2.html";
      } else {
        alert(result.erro || "Email ou senha inválidos.");
      }

    } catch (error) {
      alert("Erro ao tentar fazer login.");
      console.error("Erro:", error);
    }
  });
});
