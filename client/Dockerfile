
FROM node:16.17-alpine

WORKDIR /app

COPY package.json /app

RUN npm config set unsafe-perm true

RUN npm install --force

COPY . /app

RUN chown -R node /app/node_modules

USER node


CMD ["npm","start"]