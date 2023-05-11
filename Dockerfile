FROM node:latest

RUN mkdir ./.npm

RUN chown -R 1000650000:0 "/.npm"

WORKDIR /app

COPY package.json .

RUN npm install

COPY app.js .

EXPOSE 5000

CMD [ "npm", "start" ]