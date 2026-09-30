export function iniciarNavegacao(links, mostrarPagina, paginas) {
  function navegarPara(nomePagina) {
    const paginaAtual = paginas[nomePagina] ? nomePagina : "inicio";
    mostrarPagina(paginaAtual);
    atualizarLinkAtivo(links, paginaAtual);
  }

  links.forEach((link) => {
    link.addEventListener("click", (evento) => {
      evento.preventDefault();
      const nomePagina = link.dataset.page;
      history.pushState({ pagina: nomePagina }, "", `#${nomePagina}`);
      navegarPara(nomePagina);
    });
  });

  window.addEventListener("popstate", () => {
    navegarPara(window.location.hash.slice(1) || "inicio");
  });

  navegarPara(window.location.hash.slice(1) || "inicio");
}

function atualizarLinkAtivo(links, nomePagina) {
  links.forEach((link) => {
    if (link.dataset.page === nomePagina) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}
