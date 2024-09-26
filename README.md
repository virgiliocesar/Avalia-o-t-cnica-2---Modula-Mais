# 🦫 Catálogo de Capivaras - Zoológico

## 📜 Descrição
Este projeto foi desenvolvido para auxiliar um biólogo na catalogação de capivaras em um zoológico. Ele permite gerenciar informações sobre as capivaras, como nome, idade, peso, habitat, comportamento, dieta e observações gerais. O sistema possui um filtro por habitat e um CRUD completo (Criar, Ler, Atualizar e Deletar registros).
## 🚀 Funcionalidades
- Filtro de habitat: Filtra as capivaras por habitat.
- CRUD completo: Permite criar, visualizar, atualizar e deletar registros.
- Gerenciamento completo: Informações detalhadas de comportamento, dieta e observações.

## 🛠 Tecnologias Utilizadas
<strong> Backend </strong>
   <ul>
     <li><a href="https://nodejs.org/">Node.js</a></li>
     <li><a href="https://expressjs.com/pt-br/">Express</a></li>
     <li><a href="https://www.mongodb.com/pt-br?msockid=3c27632a75dc682b1d74778a74cd6924">MongoDB</a></li>
     <li><a href="https://mongoosejs.com/">Mongoose (ORM para MongoDB)</a></li>
     <li><a href="https://www.docker.com/">Docker (opcional para deploy local)</a></li>
   </ul>
   <strong> Frontend </strong>
   <ul>
     <li><a href="https://pt-br.legacy.reactjs.org/">React</a></li>
     <li><a href="https://www.w3schools.com/Css/">CSS (para estilização)</a></li>
   </ul>

## ⚙️ Requisitos
### Ferramentas Necessárias:

1. Node.js (versão >= 14.x)
2. MongoDB (local ou MongoDB Atlas)
3. Docker (opcional, para ambiente de desenvolvimento)
4. Git (para clonar o repositório)
5. Insomnia ou Postman (para testar as rotas da API)

## 💻 Instalação e Execução

### 1. Clonar o repositório

```bash
  git clone https://github.com/virgiliocesar/Modula-Mais-teste.git
```
```bash
cd Modula-Mais-teste
```
## 2. Configurar o Backend

### 2.1 Instalar dependências
Navegue até a pasta do backend:
```bash
cd backend
```
```bash
npm install
```
### 2.2 Executar o servidor
```bash
npm run start:dev
```
O servidor será iniciado em http://localhost:3000.

## 3. Testar a API
### 3.1. Testar com Insomnia ou Postman
A API possui as seguintes rotas principais:
- GET <code>/api/capivaras/code> - Lista todas as capivaras.
- GET <code>/api/capivaras/:id/code> - Obtém uma capivara específica.
- POST <code>/api/capivaras/code> - Cria uma nova capivara.
- PUT <code>/api/capivaras/:id/code> - Atualiza as informações de uma capivara.
- DELETE <code>/api/capivaras/:id</code> - Remove uma capivara.


