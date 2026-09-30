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
    conteudo: "Adicione aqui as informações de contato do projeto.",
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

window.addEventListener("popstate", () => {
  mostrarPagina(window.location.hash.slice(1) || "inicio");
});

const paginaInicial = window.location.hash.slice(1) || "inicio";
mostrarPagina(paginaInicial);
