function editarCartao() {
  alert("Clicou em Editar!");
}

function apagarCartao() {
  if (confirm("Tem certeza da exclusão do card?")) {
    alert("Confirmado.");
  } else {
    alert("Cancelou.");
  }
}

const cartoes = document.querySelectorAll(".card");
cartoes.forEach((cartao) => {
  cartao.style.backgroundColor = "#e16e0e";
});

const titulosCartao = document.querySelectorAll(".titulo-card");
titulosCartao.forEach((tituloCartao) => {
  tituloCartao.style.cssText = "margin: 20px 0px";
  tituloCartao.style.color = "#2b385b";
  tituloCartao.innerText = "Meu card";
});

const descricoesCartao = document.querySelectorAll(".descricao-card");
descricoesCartao.forEach((descricaoCartao) => {
  descricaoCartao.style.cssText = "margin: 40px 0px";
  descricaoCartao.style.fontSize = "13px";
  descricaoCartao.style.color = "white";
  descricaoCartao.innerText = "Descrição modificada pelo JavaScript.";
});

const botoesEditarCartao = document.querySelectorAll(".botao-editar");
botoesEditarCartao.forEach((botaoEditarCartao) => {
  botaoEditarCartao.style.backgroundColor = "#008000";
  botaoEditarCartao.style.padding = "10px";
  botaoEditarCartao.style.borderRadius = "10%";
  botaoEditarCartao.style.margin = "0px 10px";
  botaoEditarCartao.style.border = "none";
  botaoEditarCartao.style.color = "white";
  botaoEditarCartao.addEventListener("click", editarCartao);
});

const botoesApagarCartao = document.querySelectorAll(".botao-apagar");
botoesApagarCartao.forEach((botaoApagarCartao) => {
  botaoApagarCartao.style.backgroundColor = "#ff0000";
  botaoApagarCartao.style.padding = "10px";
  botaoApagarCartao.style.borderRadius = "10%";
  botaoApagarCartao.style.border = "none";
  botaoApagarCartao.style.color = "white";
  botaoApagarCartao.addEventListener("click", apagarCartao);
});
