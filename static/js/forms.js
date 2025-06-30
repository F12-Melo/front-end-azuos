document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const respostas = [];

        for (let i = 1; i <= 15; i++) {
            const name = `questao${i}`;
            const selected = document.querySelector(`input[name="${name}"]:checked`);
            if (selected) {
                respostas.push(`Pergunta ${i}: ${selected.value}`);
            } else {
                alert(`Você não respondeu a Pergunta ${i}`);
                return;
            }
        }

        const usuarioId = localStorage.getItem("usuario_id");

        if (!usuarioId) {
            alert("Usuário não autenticado.");
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
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Erro ao enviar formulário.");
        }
    });
});
