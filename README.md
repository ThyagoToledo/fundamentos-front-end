<p align="center">
  <img src="imagens/estudos.jpg" alt="Pessoa estudando programação em um quarto com computador e referências de tecnologia" width="100%">
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
- Alternância entre temas claro e escuro, com preferência salva no `localStorage` e suporte à preferência de cores do sistema.
- Link para pular ao conteúdo, foco visível e estrutura semântica com suporte a tecnologias assistivas.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript com módulos ES6 e APIs do navegador: DOM, History, `FormData` e `localStorage`
- Vite 8.3.1 e `html-minifier-terser` para desenvolvimento e build de produção
- Node.js e npm para instalar e executar as ferramentas de build
- SweetAlert2 11.26.25, carregada por CDN

## Estrutura de diretórios

```text
.
├── .gitignore
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── css/
│   └── style.css
├── dist/                         # gerada por npm run build; não versionada
│   ├── assets/                   # CSS e JavaScript minificados com nomes hash
│   ├── .gitkeep                  # arquivo vazio copiado da pasta pública
│   ├── estudos.jpg               # cópia estática da pasta imagens/
│   └── index.html
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
│   ├── tema.js
│   ├── templates.js
│   └── validacao.js
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Instalação e execução local

É necessário ter Node.js `^20.19.0` ou `>=22.12.0` e npm. As ferramentas Vite e `html-minifier-terser` são dependências de desenvolvimento instaladas pelo npm. O SweetAlert2 continua sendo carregado pela internet via CDN.

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

4. Instale as dependências de desenvolvimento:

   ```bash
   npm install
   ```

5. Inicie o servidor de desenvolvimento do Vite:

   ```bash
   npm run dev
   ```

   Abra o endereço local informado pelo Vite no terminal.

6. Para gerar e visualizar a build de produção:

   ```bash
   npm run build
   npm run preview
   ```

   A build é criada em `dist/`, que não é versionada. A pasta `imagens/` é copiada sem transformação; a otimização de imagens fica para uma etapa posterior.

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
