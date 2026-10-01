import { atualizarErroCampo, validarFormulario } from "./validacao.js";
import { salvarDadosContato } from "./armazenamento.js";

export function iniciarEventos(areaConteudo, aoSalvarDados) {
  areaConteudo.addEventListener("click", (evento) => {
    const botaoTecnologia = evento.target.closest("[data-tecnologia]");
    if (!botaoTecnologia) return;

    const tecnologia = botaoTecnologia.dataset.tecnologia;
    const cartao = botaoTecnologia.closest(".cartao-tecnologia");
    const aviso = document.createElement("p");
    aviso.className = "aviso-tecnologia";
    aviso.setAttribute("role", "status");
    aviso.textContent = `${tecnologia} selecionado para estudo.`;
    cartao.querySelector(".aviso-tecnologia")?.remove();
    cartao.append(aviso);
  });

  areaConteudo.addEventListener("input", (evento) => {
    const campo = evento.target;
    if (!campo.matches("#nome-contato, #email-contato, #mensagem-contato")) return;

    if (campo.getAttribute("aria-invalid") === "true") {
      atualizarErroCampo(campo);
    }

    if (campo.id === "nome-contato") {
      atualizarPreviaNome(campo.value);
    }
  });

  areaConteudo.addEventListener("submit", (evento) => {
    if (evento.target.id !== "formulario-contato") return;

    evento.preventDefault();
    const formulario = evento.target;
    if (!validarFormulario(formulario)) return;

    const dados = Object.fromEntries(new FormData(formulario));
    const retorno = document.querySelector("#retorno-formulario");

    if (!salvarDadosContato(dados)) {
      retorno.textContent = "Não foi possível salvar os dados neste navegador.";
      return;
    }

    aoSalvarDados(dados);
    retorno.textContent = `Obrigado, ${dados.nome}! Seus dados foram salvos neste navegador.`;
    formulario.reset();
    atualizarPreviaNome("");

    if (window.Swal) {
      window.Swal.fire({
        icon: "success",
        title: "Dados salvos!",
        text: "Suas informações foram guardadas neste navegador.",
      });
    }
  });
}

function atualizarPreviaNome(nome) {
  const previa = document.querySelector("#previa-nome");
  previa.textContent = nome
    ? `Olá, ${nome}! Sua mensagem está quase pronta.`
    : "Digite seu nome para ver a prévia.";
}
