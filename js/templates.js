export function renderizarPagina(areaConteudo, nomePagina, paginas, tecnologias) {
  const pagina = paginas[nomePagina] ?? paginas.inicio;
  const listaTecnologias = pagina.mostrarTecnologias
    ? `
      <section aria-labelledby="titulo-tecnologias">
        <h3 id="titulo-tecnologias">Tecnologias em estudo</h3>
        <div class="lista-tecnologias">
          ${tecnologias.map((tecnologia) => `
            <article class="cartao-tecnologia">
              <h4>${tecnologia.nome}</h4>
              <p>${tecnologia.descricao}</p>
              <button type="button" data-tecnologia="${tecnologia.nome}">
                Conhecer tecnologia
              </button>
            </article>
          `).join("")}
        </div>
      </section>
    `
    : "";

  areaConteudo.innerHTML = `
    <h2>${pagina.titulo}</h2>
    <p>${pagina.conteudo}</p>
    ${listaTecnologias}
    ${nomePagina === "contato" ? criarFormularioContato() : ""}
  `;
}

function criarFormularioContato() {
  return `
    <form id="formulario-contato" novalidate>
      <label for="nome-contato">Seu nome</label>
      <input id="nome-contato" name="nome" type="text" required>
      <p class="mensagem-erro" id="erro-nome" aria-live="polite"></p>
      <p id="previa-nome" aria-live="polite">Digite seu nome para ver a prévia.</p>
      <label for="email-contato">Seu e-mail</label>
      <input id="email-contato" name="email" type="email" required>
      <p class="mensagem-erro" id="erro-email" aria-live="polite"></p>
      <label for="mensagem-contato">Mensagem</label>
      <textarea id="mensagem-contato" name="mensagem" rows="4" required></textarea>
      <p class="mensagem-erro" id="erro-mensagem" aria-live="polite"></p>
      <button type="submit">Enviar mensagem</button>
      <p id="retorno-formulario" role="status"></p>
    </form>
  `;
}
