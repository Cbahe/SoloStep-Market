FROM node

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build  # Ensure build command is executed

EXPOSE 1234
CMD [ "node", "npm start" ]
