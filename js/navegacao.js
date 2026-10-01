export function iniciarNavegacao(links, mostrarPagina, paginas) {
  function navegarPara(nomePagina, moverFoco = false) {
    const paginaAtual = paginas[nomePagina] ? nomePagina : "inicio";
    mostrarPagina(paginaAtual);
    atualizarLinkAtivo(links, paginaAtual);

    if (moverFoco) {
      document.querySelector("#titulo-pagina")?.focus();
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", (evento) => {
      evento.preventDefault();
      const nomePagina = link.dataset.page;
      history.pushState({ pagina: nomePagina }, "", `#${nomePagina}`);
      navegarPara(nomePagina, true);
    });
  });

  window.addEventListener("popstate", () => {
    navegarPara(window.location.hash.slice(1) || "inicio", true);
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
