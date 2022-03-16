FROM node:16-alpine

WORKDIR /frontend

COPY . /frontend

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 3000
