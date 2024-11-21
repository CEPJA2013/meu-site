// script.js
document.addEventListener("DOMContentLoaded", () => {
    const perguntas = document.querySelectorAll(".pergunta");

    perguntas.forEach((pergunta) => {
        const input = pergunta.querySelector(".resposta");
        const contador = pergunta.querySelector(".contador span");
        const maxInteracoes = parseInt(pergunta.dataset.maxInteracoes, 10);

        let interacoes = 0;

        input.addEventListener("input", () => {
            interacoes++;

            const restantes = maxInteracoes - interacoes;
            contador.textContent = restantes >= 0 ? restantes : 0;

            if (restantes <= 0) {
                input.disabled = true;
                contador.parentElement.textContent = "Limite de interações atingido!";
            }
        });
    });

    document.getElementById("formulario").addEventListener("submit", (event) => {
        event.preventDefault(); // Evita envio do formulário (para testes)
        alert("Formulário enviado com sucesso!");
    });
});

