FROM node:18-alpine

RUN mkdir -p /home/node/next-ssr/node_modules && chown -R node:node /home/node/next-ssr

WORKDIR /home/node/next-ssr

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

ENV NODE_ENV=prod

EXPOSE 3000

CMD ["npm", "run", "start:dev"]