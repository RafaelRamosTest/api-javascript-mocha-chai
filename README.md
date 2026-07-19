🚀 API Automation Project - ServeRest
Este projeto contém a suíte de testes automatizados para a API do ServeRest. O objetivo é garantir a integridade das funcionalidades da API através de testes de contrato e comportamento, utilizando uma infraestrutura de CI robusta com integração de relatórios via Allure.

📋 Funcionalidades
Testes Automatizados: Cobertura de cenários de API usando Mocha e Chai.

CI/CD Pipeline: Execução automática no GitHub Actions com start-server-and-test.

Relatórios Inteligentes: Geração de relatórios visuais com Allure Report.

Deploy Automatizado: Publicação dos relatórios no GitHub Pages.

Logs Otimizados: Estrutura de logs facilitando a leitura no console do CI.

🛠 Tecnologias
Linguagem: JavaScript (Node.js)

Framework de Testes: Mocha

Biblioteca de Asserção: Chai

Orquestração: ServeRest

Relatórios: Allure Framework

CI: GitHub Actions

🚀 Como rodar o projeto
Pré-requisitos
Node.js (versão 20 ou superior)

NPM ou Yarn

Instalação
Clone o repositório:

Bash
git clone [seu-link-aqui]
cd [seu-projeto]
Instale as dependências:

Bash
npm install
Executando os testes localmente
Para rodar os testes e gerar o relatório Allure:

Bash
npm run ci:test
Para abrir o relatório após a execução:

Bash
npx allure open allure-report
📁 Estrutura do Projeto
Plaintext
├── .github/workflows/    # Configurações do CI (GitHub Actions)
├── allure-results/       # Resultados brutos dos testes
├── config/               # Configurações de ambiente (URLs, tokens base)
├── factories/            # Geradores de massa de dados (faker)
├── services/             # Abstração das chamadas de API (Requests)
├── test/                 # Suíte de testes (especificações e contratos)
│   └── schemas/          # Schemas para validação de contrato (JSON)
├── utils/                # Hooks globais e utilitários de configuração
├── package.json          # Dependências e scripts de execução
└── reporter-config.json  # Configuração dos reporters (spec + allure)
⚙️ Configurações Principais
Reporter: Utilizamos mocha-multi-reporters para ter visibilidade em tempo real no console (spec) e geração de dados para o Allure.

Logs: O arquivo utils/mocha-setup.js garante que o console do CI exiba o nome de cada arquivo sendo executado, facilitando a identificação de falhas em larga escala.

CI Strategy: O pipeline utiliza start-server-and-test para garantir que o servidor esteja pronto antes dos testes começarem, e limpa o ambiente após a execução.

📝 Boas Práticas Adotadas
Fail-Safe CI: O pipeline utiliza || true para garantir que o relatório Allure seja gerado mesmo se algum teste falhar (evitando que o CI pare abruptamente).

Organização: Testes são isolados por funcionalidades (ex: login, usuários, produtos).

Ambiente: O CI é configurado para ser efêmero (limpo a cada execução), garantindo que não existam resíduos de testes anteriores no banco de dados.