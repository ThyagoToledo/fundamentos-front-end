const chaveDadosContato = "experiencia-pratica-iii-contato";

export function carregarDadosContato() {
  try {
    const dadosArmazenados = localStorage.getItem(chaveDadosContato);
    if (!dadosArmazenados) return null;

    const dados = JSON.parse(dadosArmazenados);
    if (!dados || typeof dados !== "object") return null;

    return {
      nome: typeof dados.nome === "string" ? dados.nome : "",
      email: typeof dados.email === "string" ? dados.email : "",
      mensagem: typeof dados.mensagem === "string" ? dados.mensagem : "",
    };
  } catch {
    return null;
  }
}

export function salvarDadosContato(dados) {
  try {
    localStorage.setItem(chaveDadosContato, JSON.stringify(dados));
    return true;
  } catch {
    return false;
  }
}

export function restaurarDadosContato(formulario, dados) {
  if (!formulario || !dados) return;

  formulario.elements.nome.value = dados.nome;
  formulario.elements.email.value = dados.email;
  formulario.elements.mensagem.value = dados.mensagem;

  if (dados.nome) {
    document.querySelector("#previa-nome").textContent =
      `Olá, ${dados.nome}! Sua mensagem está quase pronta.`;
  }
}
