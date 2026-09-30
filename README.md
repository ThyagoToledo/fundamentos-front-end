<p align="center">
  <img src="imagens/estudos.jpg" alt="Banner de estudos e programação" width="100%">
</p>

# Experiência Prática IV — Desenvolvimento Front-end

## Sobre o projeto

Aplicação web estática acadêmica com uma Single Page Application (SPA), navegação entre seções sem recarregar a página e um formulário demonstrativo. O projeto reúne conteúdos de HTML, CSS e JavaScript e serve como base para a Experiência Prática IV.

A interface atual ainda apresenta textos de demonstração da Experiência Prática III. O formulário não envia dados para um servidor: as informações válidas ficam armazenadas somente no `localStorage` do navegador.

## Funcionalidades

- Navegação entre as seções Início, Sobre e Contato sem recarregar a página, com suporte ao histórico do navegador.
- Geração de cartões de tecnologias a partir de dados JavaScript usando Template Literals e `innerHTML`.
- Interação por clique nos cartões de tecnologia.
- Formulário de contato com prévia do nome, validação de campos obrigatórios e formato do e-mail, e mensagens de erro junto aos campos.
- Salvamento dos dados válidos no `localStorage` e restauração quando a seção Contato é aberta novamente.
- Mensagem de sucesso com SweetAlert2 após salvar os dados.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript com módulos ES6
- APIs do navegador: DOM, History, `FormData` e `localStorage`
- SweetAlert2 11.26.25, carregada por CDN

## Estrutura de diretórios

```text
.
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── css/
│   └── style.css
├── html/
│   └── index.html
├── imagens/
│   ├── estudos.jpg
│   └── .gitkeep
├── js/
│   ├── armazenamento.js
│   ├── dados.js
│   ├── eventos.js
│   ├── navegacao.js
│   ├── script.js
│   ├── templates.js
│   └── validacao.js
└── README.md
```

## Instalação e execução local

O projeto não possui dependências locais de JavaScript, `package.json` ou etapa de build. O SweetAlert2 é carregado pela internet via CDN. Para servir a página localmente, é necessário ter Git e Python 3 disponíveis.

1. Clone o repositório:

   ```bash
   git clone https://github.com/ThyagoToledo/fundamentos-front-end.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd fundamentos-front-end
   ```

3. Para usar a versão de desenvolvimento da Experiência Prática IV, mude para a branch correspondente:

   ```bash
   git switch feature/experiencia-pratica-iv
   ```

4. Inicie um servidor HTTP simples na raiz do projeto. No Windows, use:

   ```powershell
   py -m http.server 8000
   ```

   Em outros ambientes com Python 3, use `python3 -m http.server 8000`.

5. Abra [http://localhost:8000/html/](http://localhost:8000/html/) no navegador. Para encerrar o servidor, volte ao terminal e pressione `Ctrl+C`.

## Versionamento

O repositório usa Git e mantém a versão estável separada do desenvolvimento em andamento. A versão estável inicial é `v1.0.0`, marcada antes das tarefas da Experiência Prática IV.

## GitFlow

- `main`: branch da versão estável do projeto.
- `develop`: branch de integração das alterações em desenvolvimento.
- `feature/`: prefixo das branches criadas a partir de `develop` para novas funcionalidades ou tarefas. Exemplo: `feature/experiencia-pratica-iv`.
- Após a revisão, alterações de uma branch `feature/` são propostas para `develop` por Pull Request. A publicação de uma versão estável ocorre a partir de `main`.

## Conventional Commits

As mensagens seguem o formato:

```text
tipo(escopo): descrição curta
```

Não inclua espaço antes de `tipo`. Exemplos existentes no histórico:

```text
feat(formulario): persiste dados validos no navegador
refactor: organiza JavaScript em módulos ES6
docs(github): adiciona modelo de pull request
```

Use tipos que indiquem o propósito da alteração, como `feat` para funcionalidade, `fix` para correção, `refactor` para reorganização interna, `docs` para documentação e `chore` para manutenção.

## Releases e versionamento semântico

O projeto usa versionamento semântico no formato `MAJOR.MINOR.PATCH`:

- `MAJOR`: mudança incompatível com a versão anterior.
- `MINOR`: funcionalidade nova compatível com o que já existia.
- `PATCH`: correção compatível.

A versão atual é `v1.0.0`, uma tag anotada que marca a base estável inicial. Existe a tag no repositório, mas ainda não há uma Release publicada na página de Releases do GitHub.
