FROM node:6.10-alpine

RUN apk add --no-cache --virtual build-deps make gcc g++ python curl
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /keystone_boilerplate

COPY .npmrc yarn.lock package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "index.js"]
