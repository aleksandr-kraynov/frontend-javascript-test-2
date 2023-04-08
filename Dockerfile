FROM node:latest

WORKDIR /frontend-javascript-test

EXPOSE 5173

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]