# Gestão de Capivaras
## Como executar a aplicação

## Executar a aplicação

### Pré-requisitos:
- Node.js
- MongoDB (ou credenciais do banco de dados em nuvem)
- Docker (se for usar)

### Instruções:
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
2.  Instale as dependências: 
   ```bash
   npm install
3. Configure o banco de dados MongoDB em um arquivo
   ```bash
   .env
4. Execute a aplicação:
   ```bash
   npm run start:dev

## estruturas de pastas
<pre><code>

server/
└── backend/
     ├── src/ onde fica todo codigo do projeto
     ├   ├── controllers/ para mensagens ex: inseridos com sucesso
     ├   ├── DB/ tratar a conexão com banco de dados MONGODB
     ├   ├── models/ contato com banco de dados que va dizer os modelos da aplicação com mongoose
     ├   ├── routes/ Centralizar as rotas da aplicação
     ├   └── utils/
     └──app.js

</code></pre>

