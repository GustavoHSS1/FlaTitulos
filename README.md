# 🔴⚫ FlaTitulos

Dashboard esportivo para visualização e catalogação histórica dos títulos do Clube de Regatas do Flamengo.

## 📋 Sobre o projeto

O FlaTitulos nasceu para resolver um problema comum entre torcedores e historiadores esportivos: a dificuldade de visualizar, de forma centralizada e cronológica, todos os títulos conquistados pelo clube — sem precisar recorrer a várias fontes diferentes ou tabelas confusas.

A proposta é permitir que qualquer torcedor, independente da idade ou do nível de familiaridade com internet, consiga consultar rapidamente o histórico de conquistas do Flamengo, seja para tirar uma dúvida durante uma discussão de bar ou apenas para relembrar a trajetória do clube.

### 🎯 Público-alvo

- Torcedores entusiastas e historiadores esportivos
- Pessoas de todas as idades com conhecimento básico de internet
- Usuários que buscam consultas rápidas durante discussões esportivas ou acompanhamento de histórico

### ✅ Critério de sucesso

O usuário deve conseguir filtrar e visualizar os detalhes de qualquer título histórico do clube em **menos de três interações** na tela.

## 🏗️ Arquitetura do projeto

A organização dos estilos segue a metodologia **ITCSS** (Inverted Triangle CSS), separando o CSS em camadas com responsabilidades bem definidas:

- **Settings** — variáveis globais (cores, fontes, etc.)
- **Base** — estilos base e reset de elementos HTML
- **Layout** — estrutura geral das páginas
- **Components** — componentes reutilizáveis da interface
- **Utilities** — classes utilitárias e ajustes pontuais

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura das páginas
- **CSS3** — estilização, seguindo a metodologia ITCSS
- **JavaScript** — interatividade e filtros do dashboard

## 📁 Estrutura do projeto

```
FlaTitulos/
├── assets/       # Imagens e recursos estáticos
├── css/          # Estilos organizados em camadas ITCSS
├── js/           # Scripts de interatividade
├── pages/        # Páginas adicionais do site
├── index.html    # Página principal
└── README.md
```

## 🚀 Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/GustavoHSS1/FlaTitulos.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd FlaTitulos
   ```
3. Abra o arquivo `index.html` no seu navegador de preferência.

Não é necessário nenhuma instalação de dependências — o projeto utiliza apenas HTML, CSS e JavaScript nativos.

## 👨‍💻 Autor

Desenvolvido por [@GustavoHSS1](https://github.com/GustavoHSS1).
