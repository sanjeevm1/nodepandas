FROM node

COPY . /app
WORKDIR /app

RUN npm i
CMD npm start
