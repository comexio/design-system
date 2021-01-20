FROM node:12

WORKDIR /src

ENV HOST 0.0.0.0

CMD ["sh", "-c", "yarn install && yarn dev"]
