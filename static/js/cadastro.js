document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('cadastroForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      nascimento: document.getElementById('nascimento').value,
      cargo: document.getElementById('cargo').value,
      setor: document.getElementById('setor').value,
      empresa: document.getElementById('empresa').value,
      ramo: document.getElementById('ramo').value,
      categoria: document.querySelector('select[name="categoria"]').value,
      senha: document.getElementById('senha').value
    };

    try {
      const response = await fetch('https://azuos.netlify.app/cadastrar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      alert("Usuário cadastrado com sucesso!");
      console.log(result);

      window.location.href = "../templates/login.html";

    } catch (error) {
      alert("Erro ao cadastrar usuário.");
      console.error("Erro:", error);
    }
  });
});
