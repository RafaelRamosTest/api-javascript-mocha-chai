# API Automation Project 🚀

Uma suíte de testes automatizados robusta desenvolvida para garantir a qualidade e a integridade da API do **ServeRest**. O projeto utiliza uma abordagem de testes focada em contratos e comportamento, integrada a um ecossistema de CI/CD para validação contínua e feedback rápido.

---

## 🛠 Tecnologias Utilizadas

*   **Node.js & JavaScript** (Stack de desenvolvimento)
*   **Mocha & Chai** (Framework de testes e biblioteca de asserção)
*   **Chai-json-schema** (Validação rigorosa de contratos de API)
*   **Allure Framework** (Relatórios visuais detalhados)
*   **GitHub Actions** (Automação de CI com `start-server-and-test`)
*   **Docker & Docker Compose** (Orquestração de ambiente de teste)

---

## 📋 Funcionalidades

*   **Testes Automatizados:** Cobertura de cenários de API usando Mocha e Chai.
*   **Testes de Contrato:** Validação de Schema (JSON) para garantir que a API respeite o contrato de dados.
*   **Testes de Comportamento:** Validação de fluxos E2E e regras de negócio.
*   **Relatórios Inteligentes:** Geração de dashboards interativos com Allure Report.
*   **CI/CD Pipeline:** Execução automática e eficiente no GitHub Actions.
*   **Logs Otimizados:** Estrutura de logs personalizada que facilita a leitura no console do CI.

---

## 📁 Estrutura do Projeto

```text
├── .github/workflows/    # Configurações do CI (GitHub Actions)
├── allure-results/       # Resultados brutos dos testes
├── config/               # Configurações de ambiente (URLs, tokens)
├── factories/            # Geradores de massa de dados (faker)
├── services/             # Abstração das chamadas de API (Requests)
├── test/                 # Suíte de testes (especificações e contratos)
│   └── schemas/          # Schemas para validação de contrato (JSON)
├── utils/                # Hooks globais e utilitários
├── package.json          # Dependências e scripts
└── reporter-config.json  # Configuração dos reporters

🚀 Como rodar o projeto
Pré-requisitos
Node.js (versão 20 ou superior)

NPM ou Yarn

Instalação
Clone o repositório e instale as dependências:

Bash
git clone [seu-link-aqui]
cd [seu-projeto]
npm install
Executando os testes localmente
Para rodar os testes e gerar o relatório Allure:

Bash
npm run ci:test
Para abrir o relatório após a execução:

Bash
npx allure open allure-report