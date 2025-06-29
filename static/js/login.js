document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const loginData = {
      email: document.getElementById('email').value,
      senha: document.getElementById('senha').value
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login realizado com sucesso!");
        console.log(result);
        // Exemplo: salvando no localStorage
        localStorage.setItem('usuario', JSON.stringify(result));
        window.location.href = "../templates/index2.html"; // redireciona para página autenticada
      } else {
        alert(result.mensagem || "Falha no login. Verifique seus dados.");
      }

    } catch (error) {
      alert("Erro ao tentar fazer login.");
      console.error("Erro:", error);
    }
  });
});
