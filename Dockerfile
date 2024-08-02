FROM node:20.12.2-alpine AS base-stage

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --chown=node:node .npmrc .npmrc
COPY --chown=node:node package*.json ./
RUN npm ci --ignore-scripts && npm cache clean --force
COPY --chown=node:node . ./
RUN rm -f .npmrc

FROM base-stage AS build-stage
RUN npm run generate:hyperchain:docker

FROM base-stage AS production-stage
COPY --chown=node:node --from=build-stage /usr/src/app/dist ./dist

RUN npm i -g http-server

ARG PORT=3000
ENV PORT $PORT

USER node
WORKDIR /usr/src/app/dist

CMD http-server -p $PORT -c-1 --proxy="http://127.0.0.1:$PORT/index.html?"
