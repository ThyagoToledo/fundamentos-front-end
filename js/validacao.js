const camposFormulario = [
  { nome: "nome", id: "nome-contato", erro: "erro-nome", rotulo: "nome" },
  { nome: "email", id: "email-contato", erro: "erro-email", rotulo: "e-mail" },
  {
    nome: "mensagem",
    id: "mensagem-contato",
    erro: "erro-mensagem",
    rotulo: "mensagem",
  },
];

export function validarFormulario(formulario) {
  return camposFormulario.reduce((valido, item) => {
    const campo = formulario.elements[item.nome];
    const mensagem = obterMensagemErro(campo, item.rotulo);
    mostrarErro(campo, item.erro, mensagem);
    return valido && !mensagem;
  }, true);
}

export function atualizarErroCampo(campo) {
  const item = camposFormulario.find((campoFormulario) => campoFormulario.id === campo.id);
  if (!item) return;

  mostrarErro(campo, item.erro, obterMensagemErro(campo, item.rotulo));
}

function obterMensagemErro(campo, rotulo) {
  if (!campo.value.trim()) {
    return `Preencha o campo ${rotulo}.`;
  }

  if (campo.type === "email" && !campo.validity.valid) {
    return "Digite um endereço de e-mail válido.";
  }

  return "";
}

function mostrarErro(campo, idMensagem, mensagem) {
  document.querySelector(`#${idMensagem}`).textContent = mensagem;
  campo.classList.toggle("campo-invalido", Boolean(mensagem));
  campo.setAttribute("aria-invalid", String(Boolean(mensagem)));
}
