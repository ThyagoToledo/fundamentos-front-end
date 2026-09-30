const paginas = {
  inicio: {
    titulo: "Início",
    conteudo: "Bem-vindo à página inicial da Experiência Prática III.",
    mostrarTecnologias: true,
  },
  sobre: {
    titulo: "Sobre",
    conteudo: "Esta é uma demonstração simples de navegação SPA com JavaScript.",
  },
  contato: {
    titulo: "Contato",
    conteudo: "Envie uma mensagem usando o formulário abaixo.",
  },
};

const tecnologias = [
  {
    nome: "HTML",
    descricao: "Organiza a estrutura e o conteúdo das páginas.",
  },
  {
    nome: "CSS",
    descricao: "Define a apresentação visual e o layout.",
  },
  {
    nome: "JavaScript",
    descricao: "Adiciona interatividade e atualiza o conteúdo da SPA.",
  },
];

const areaConteudo = document.querySelector("#conteudo-principal");
const linksNavegacao = document.querySelectorAll("nav [data-page]");

function mostrarPagina(nomePagina) {
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
    ${nomePagina === "contato" ? `
      <form id="formulario-contato">
        <label for="nome-contato">Seu nome</label>
        <input id="nome-contato" name="nome" type="text" required>
        <p id="previa-nome" aria-live="polite">Digite seu nome para ver a prévia.</p>
        <label for="mensagem-contato">Mensagem</label>
        <textarea id="mensagem-contato" name="mensagem" rows="4" required></textarea>
        <button type="submit">Enviar mensagem</button>
        <p id="retorno-formulario" role="status"></p>
      </form>
    ` : ""}
  `;

  linksNavegacao.forEach((link) => {
    if (link.dataset.page === nomePagina) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

linksNavegacao.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    const nomePagina = link.dataset.page;
    history.pushState({ pagina: nomePagina }, "", `#${nomePagina}`);
    mostrarPagina(nomePagina);
  });
});

areaConteudo.addEventListener("click", (evento) => {
  const botaoTecnologia = evento.target.closest("[data-tecnologia]");

  if (!botaoTecnologia) return;

  const tecnologia = botaoTecnologia.dataset.tecnologia;
  const cartao = botaoTecnologia.closest(".cartao-tecnologia");
  const aviso = document.createElement("p");
  aviso.className = "aviso-tecnologia";
  aviso.textContent = `${tecnologia} selecionado para estudo.`;
  cartao.querySelector(".aviso-tecnologia")?.remove();
  cartao.append(aviso);
});

areaConteudo.addEventListener("input", (evento) => {
  if (evento.target.id !== "nome-contato") return;

  const previa = document.querySelector("#previa-nome");
  previa.textContent = evento.target.value
    ? `Olá, ${evento.target.value}! Sua mensagem está quase pronta.`
    : "Digite seu nome para ver a prévia.";
});

areaConteudo.addEventListener("submit", (evento) => {
  if (evento.target.id !== "formulario-contato") return;

  evento.preventDefault();

  const nome = new FormData(evento.target).get("nome");
  const retorno = document.querySelector("#retorno-formulario");
  retorno.textContent = `Obrigado, ${nome}! Sua mensagem foi registrada nesta demonstração.`;
  evento.target.reset();
  document.querySelector("#previa-nome").textContent = "Digite seu nome para ver a prévia.";
});

window.addEventListener("popstate", () => {
  mostrarPagina(window.location.hash.slice(1) || "inicio");
});

const paginaInicial = window.location.hash.slice(1) || "inicio";
mostrarPagina(paginaInicial);
