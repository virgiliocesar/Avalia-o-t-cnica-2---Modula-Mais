# Utilizar a imagem oficial do Node.js
FROM node:alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /src/app

# Copiar o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos do projeto para dentro do container
COPY . .

# Expor a porta que o servidor usa
EXPOSE 3000


# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
