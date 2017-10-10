FROM node:8.5-alpine

RUN apk add --no-cache --virtual build-deps make gcc g++ python curl

WORKDIR /keystone_boilerplate

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

CMD ["node", "index.js"]
