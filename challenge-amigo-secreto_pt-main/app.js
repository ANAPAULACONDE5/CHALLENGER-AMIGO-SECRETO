let participantes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (participantes.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    participantes.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    participantes.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes para sortear!");
        return;
    }

    let sorteio = [...participantes];
    let resultado = {};

    for (let pessoa of participantes) {
        let possiveis = sorteio.filter(nome => nome !== pessoa);

        if (possiveis.length === 0) {
            alert("Erro no sorteio. Tentando novamente...");
            return sortearAmigo();
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        resultado[pessoa] = sorteado;
        sorteio = sorteio.filter(nome => nome !== sorteado);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa o resultado anterior

    for (let pessoa in resultado) {
        let item = document.createElement("li");
        item.textContent = `${pessoa} → ${resultado[pessoa]}`;
        listaResultado.appendChild(item);
    }
}
