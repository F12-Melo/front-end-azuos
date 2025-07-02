document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const submitBtn = form.querySelector('button[type="submit"]'); // Seleciona o botão de submit
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        submitBtn.disabled = true; // Desabilita o botão ao enviar
        
        const respostas = [];

        for (let i = 1; i <= 15; i++) {
            const name = `questao${i}`;
            const selected = document.querySelector(`input[name="${name}"]:checked`);
            if (selected) {
                respostas.push(`Pergunta ${i}: ${selected.value}`);
            } else {
                alert(`Você não respondeu a Pergunta ${i}`);
                submitBtn.disabled = false; // Reabilita se faltar resposta
                return;
            }
        }

        const usuarioId = localStorage.getItem("usuario_id");

        if (!usuarioId) {
            alert("Usuário não autenticado.");
            submitBtn.disabled = false; //Reabilita se não autenticado
            return;
        }

        const payload = {
            usuario_id: usuarioId,
            respostas: respostas.join("\n")
        };

        try {
            const response = await fetch("https://azuos-api-render.onrender.com/kickoff", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            alert("Formulário enviado com sucesso!");
            console.log(result);
            submitBtn.disabled = false; //Permitir o novo envio após a notificação
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Erro ao enviar formulário.");
        }
    });
});
