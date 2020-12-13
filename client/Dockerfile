FROM node:10

WORKDIR /usr/src/app/client

COPY package.json yarn.lock ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]