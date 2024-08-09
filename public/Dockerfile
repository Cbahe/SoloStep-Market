FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build  # Ensure build command is executed

EXPOSE 3000
CMD [ "node", "server.js" ]
