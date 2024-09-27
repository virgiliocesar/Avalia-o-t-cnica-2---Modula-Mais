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
     <li><a href="https://axios-http.com/">Axios</a></li>
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
- GET <code>/api/animals</code> - Lista todas as capivaras.
- GET <code>/api/animals/:id</code> - Obtém uma capivara específica.
- POST <code>/api/animals</code> - Cria uma nova capivara.  
- PUT <code>/api/animals/:id</code> - Atualiza as informações de uma capivara.
- DELETE <code>/api/animals/:id</code> - Remove uma capivara.

## 4. Configurar o Frontend
### 4.1. Instalar dependências
Navegue até a pasta do frontend:

```bash
cd frontend
```
```bash
npm install
```
### 4.2. Executar o frontend
```bash
npm run start:dev
```
A interface estará disponível em <code>http://localhost:3001.</code>

## 5. Utilizar Docker (Opcional)
### 5.1. Build e execução com Docker
Caso prefira utilizar o Docker, na pasta raiz do projeto:
```bash
docker-compose up --build
```
Isso vai rodar tanto o backend quanto o frontend.

# 📂 Estrutura do Projeto
<prev><code>
/Modula-Mais-teste
│
├── backend
│   └── src
│   │    ├── controllers
│   │    ├── models
│   │    ├── routes
│   │    ├── db
│   │    ├── models
│   │    └── App.js
│   └── Dockerfile
│
├── frontend
│   ├── src
│   │   └── App.js  
│   ├── svg
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md

</code></prev>

# 📡 Endpoints da API
   <table>
        <thead>
            <tr>
                <th>Método</th>
                <th>Endpoint</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>GET</td>
                <td><code>/api/animals</code></td>
                <td>Lista todas as capivaras</td>
            </tr>
            <tr>
                <td>GET</td>
                <td><code>/api/animals/:id</code></td>
                <td>Retorna uma capivara específica</td>
            </tr>
            <tr>
                <td>POST</td>
                <td><code>/api/animals</code></td>
                <td>Cria um novo registro de capivara</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td><code>/api/animals/:id</code></td>
                <td>Atualiza um registro de capivara</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td><code>/api/animals/:id</code></td>
                <td>Remove uma capivara</td>
            </tr>
        </tbody>
    </table>
    
# 🔍 Funcionalidades do Frontend

- Listagem de Capivaras: Mostra todas as capivaras cadastradas.
- Filtro por Habitat: Filtra capivaras com base no habitat.
- CRUD Completo: Permite adicionar, editar e excluir capivaras diretamente na interface.

# 🤝 Contribuição
Contribuições são muito bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

# 📝 Licença
Este projeto está licenciado sob a MIT License.

<p>Se você tiver dúvidas ou sugestões, entre em contato em <a href="mailto:virgilio_cesar.dev@outlook.com">virgilio_cesar.dev@outlook.com.</p>









