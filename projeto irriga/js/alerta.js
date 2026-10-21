const listaAlertas = document.querySelector(".lista-alertas");
const botaoFecharAlerta = document.querySelector(".fechar-alerta");
const mensagemSemAlertas = document.querySelector(".sem-alertas");

botaoFecharAlerta?.addEventListener("click", () => {
    const cartaoAlerta = botaoFecharAlerta.closest(".cartao-alerta");
    cartaoAlerta?.remove();

    if (listaAlertas && mensagemSemAlertas) {
        mensagemSemAlertas.hidden = false;
    }
});
