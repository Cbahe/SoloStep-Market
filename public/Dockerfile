
FROM node

WORKDIR /index.html

COPY . .

RUN npm install && npm run build

EXPOSE 1234

CMD ["node", "server.js"]