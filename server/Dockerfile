FROM node:10

WORKDIR /usr/src/app/server


COPY package.json yarn.lock ./

RUN yarn install

EXPOSE 8080

CMD ["yarn", "dev"]