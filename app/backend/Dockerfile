FROM node:16-alpine

WORKDIR /backend

COPY . /backend

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 3001