FROM node
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
RUN npm install 
RUN npm rebuild sqlite3
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]