import { paginas, tecnologias } from "./dados.js";
import { renderizarPagina } from "./templates.js";
import { iniciarNavegacao } from "./navegacao.js";
import { iniciarEventos } from "./eventos.js";
import { carregarDadosContato, restaurarDadosContato } from "./armazenamento.js";

const areaConteudo = document.querySelector("#conteudo-principal");
const linksNavegacao = document.querySelectorAll("nav [data-page]");
let dadosContatoSalvos = carregarDadosContato();

function mostrarPagina(nomePagina) {
  renderizarPagina(areaConteudo, nomePagina, paginas, tecnologias);

  if (nomePagina === "contato") {
    restaurarDadosContato(
      areaConteudo.querySelector("#formulario-contato"),
      dadosContatoSalvos,
    );
  }
}

iniciarEventos(areaConteudo, (dados) => {
  dadosContatoSalvos = dados;
});

iniciarNavegacao(linksNavegacao, mostrarPagina, paginas);
