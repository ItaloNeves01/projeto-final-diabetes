

# Documentação do Site "CAD"

## Visão Geral

A documentação fornece informações detalhadas sobre o site "Nome do Seu Site". Ela é projetada para ajudar desenvolvedores, designers, e outros membros da equipe a entenderem a estrutura, funcionalidades e implementações do site.

### Escopo

Esta documentação abrange:

- **Arquitetura do Projeto:** Descrição geral da estrutura do projeto.
- **Componentes e Páginas:** Detalhes sobre os componentes e páginas principais.
- **Estilos e Temas:** Informações sobre os estilos e temas utilizados no site.
- **Integrações:** Descrição de integrações externas, se aplicável.
- **Como Contribuir:** Guia para contribuir para o desenvolvimento do site.

## Arquitetura do Projeto

### Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS:** Linguagem de estilo para a apresentação visual do site.
- **Google Maps API:** Para a integração do mapa.

### Estrutura de Pastas

```
src/
|-- components/
|-- data/
|-- map/
|-- styles/
|-- App.js
|-- index.js
```

### Fluxo de Dados

- Descreva como os dados são obtidos e manipulados no site.
- Identifique as APIs utilizadas e como os dados são consumidos.

## Componentes e Páginas

### Componentes Principais

1. **Home:** Página principal do site.
2. **Template:** Componente para exibir notícias e informações.
3. **MapComponent:** Componente para exibir o mapa com a localização dos hospitais.
4. **Chat:** Componente para interação por meio de chat bot.

### Páginas

1. **Home:** Página principal com notícias, mapa e recursos úteis.
2. **Detalhes da Notícia:** Página que exibe detalhes de uma notícia específica.

## Estilos e Temas

### Estilos Responsivos

- **CSS Media Queries:** Utilizadas para estilos responsivos em diferentes tamanhos de tela.

### Paleta de Cores

- **#22433b:** Verde escuro.
- **#4caf50:** Verde limão.
- **#f1f1f1:** Cinza claro.
- **#f44336:** Vermelho.

## Integrações

### Google Maps

- **Integração com Google Maps API:** O mapa é incorporado ao site para mostrar a localização dos hospitais.

## Como Contribuir

- Instruções detalhadas sobre como contribuir para o desenvolvimento do site.
- Políticas de ramificação, revisão de código, e envio de pull requests.

## Notas de Versão

- **v1.0 (Data):**
  - Lançamento inicial do site.

## Recursos Adicionais

- **Links Úteis:** URLs importantes relacionadas ao desenvolvimento e manutenção do site.

---





##############################################

# Documentação do Código - Site "Nome do Seu Site"

## Arquivo: `index.js`

### Função: `ReactDOM.createRoot(document.getElementById('root')).render(...)`

- **Descrição:** Renderiza o componente principal `Home` no elemento com o ID 'root'.
- **Parâmetros:**
  - `Home`: Componente principal do site.

## Arquivo: `Template.jsx`

### Componente: `Template`

- **Propriedades:**
  - `id`: Identificador único do template.
  - `title`: Título do template.
  - `content`: Conteúdo do template.
  - `onClick`: Função a ser chamada quando o template é clicado.

### Estado:

- `contentLength`: Armazena o comprimento do conteúdo do template.

### Função: `handleClick`

- **Descrição:** Manipula o clique no template, chamando a função `onClick` e impedindo a propagação do evento.

### Função: `useEffect`

- **Descrição:** Atualiza o estado `contentLength` com o comprimento do conteúdo sempre que ele muda.

### Função: `render`

- **Descrição:** Renderiza o componente `Template` com base nas propriedades e estado fornecidos.

## Arquivo: `styles/TemplateWeb.css`

- **Descrição:** Arquivo de estilo para o componente `Template` em layouts da web.

## Arquivo: `styles/TemplateMobile.css`

- **Descrição:** Arquivo de estilo para o componente `Template` em layouts móveis.

## Arquivo: `MapComponent.jsx`

### Componente: `MapComponent`

- **Descrição:** Componente que exibe um mapa incorporado do Google Maps.

## Arquivo: `styles/MapComponentWeb.css`

- **Descrição:** Arquivo de estilo para o componente `MapComponent` em layouts da web.

## Arquivo: `styles/MapComponentMobile.css`

- **Descrição:** Arquivo de estilo para o componente `MapComponent` em layouts móveis.

## Arquivo: `Home.jsx`

### Componente: `Home`

- **Descrição:** Componente principal que compõe a página inicial do site.

### Estado:

- `selectedNews`: Armazena os detalhes da notícia selecionada.
- `isChatOpen`: Indica se o componente de chat está aberto.

### Função: `handleTemplateClick`

- **Descrição:** Atualiza o estado `selectedNews` com os detalhes da notícia selecionada.

### Função: `useEffect`

- **Descrição:** Adiciona um ouvinte de evento para fechar o `selectedNews` quando o usuário clica fora da área da notícia.

### Função: `handleChatButttonClick`

- **Descrição:** Alterna o estado `isChatOpen` ao clicar no botão de chat.

### Função: `render`

- **Descrição:** Renderiza o componente `Home` com notícias, detalhes da notícia, mapa e recursos úteis.

## Arquivo: `Chat.jsx`

### Componente: `Chat`

- **Descrição:** Componente que fornece um chat bot para interação.

### Estado:

- `isOpen`: Indica se o chat está aberto.
- `selectedQuestion`: Armazena os detalhes da pergunta selecionada.

### Função: `handleChatButtonToggle`

- **Descrição:** Alterna o estado `isOpen` do chat.

### Função: `handleQuestionClick`

- **Descrição:** Atualiza o estado `selectedQuestion` com os detalhes da pergunta selecionada.

### Função: `handleCloseModal`

- **Descrição:** Limpa o estado `selectedQuestion` e fecha o chat.

### Função: `render`

- **Descrição:** Renderiza o componente `Chat` com botões e perguntas/respostas.

## Arquivo: `styles/ChatMobile.css`

- **Descrição:** Arquivo de estilo para o componente `Chat` em layouts móveis.

Essa documentação fornece uma visão geral das principais funcionalidades e estruturas do seu código. Personalize conforme necessário e adicione mais detalhes se houver outros componentes, funções ou estruturas significativas no seu projeto.