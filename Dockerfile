FROM node

COPY package.json package.json
RUN npm i

COPY . /app
WORKDIR /app

CMD npm start
