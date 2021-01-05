FROM node:12

WORKDIR /src
COPY .env.local .env

ENV HOST 0.0.0.0

CMD ["sh", "-c", "yarn install && cp .env.local .env && yarn dev"]
