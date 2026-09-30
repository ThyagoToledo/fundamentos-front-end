const paginas = {
  inicio: {
    titulo: "Início",
    conteudo: "Bem-vindo à página inicial da Experiência Prática III.",
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

const areaConteudo = document.querySelector("#conteudo-principal");
const linksNavegacao = document.querySelectorAll("nav [data-page]");

function mostrarPagina(nomePagina) {
  const pagina = paginas[nomePagina] ?? paginas.inicio;

  areaConteudo.innerHTML = `<h2>${pagina.titulo}</h2><p>${pagina.conteudo}</p>`;

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
