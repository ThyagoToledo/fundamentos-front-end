const chavePreferenciaTema = "experiencia-pratica-iv-tema";
const preferenciaDoSistema = window.matchMedia("(prefers-color-scheme: dark)");

function lerPreferenciaSalva() {
  try {
    const temaSalvo = localStorage.getItem(chavePreferenciaTema);
    return temaSalvo === "claro" || temaSalvo === "escuro" ? temaSalvo : null;
  } catch {
    return null;
  }
}

function aplicarTema(tema, botao) {
  document.documentElement.dataset.theme = tema;
  botao.setAttribute("aria-pressed", String(tema === "escuro"));
}

export function iniciarAlternanciaTema(botao) {
  let temaSalvo = lerPreferenciaSalva();
  let temaAtual = temaSalvo ?? (preferenciaDoSistema.matches ? "escuro" : "claro");

  aplicarTema(temaAtual, botao);

  botao.addEventListener("click", () => {
    temaAtual = temaAtual === "escuro" ? "claro" : "escuro";
    temaSalvo = temaAtual;
    aplicarTema(temaAtual, botao);

    try {
      localStorage.setItem(chavePreferenciaTema, temaAtual);
    } catch {
      // A alternância continua disponível mesmo se o navegador bloquear o armazenamento.
    }
  });

  preferenciaDoSistema.addEventListener("change", (evento) => {
    if (temaSalvo) return;

    temaAtual = evento.matches ? "escuro" : "claro";
    aplicarTema(temaAtual, botao);
  });
}
