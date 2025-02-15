FROM node:20.11-slim

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN node initdb.js

RUN npm run build

EXPOSE  3000

CMD [ "npm", "run", "dev" ]