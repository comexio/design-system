FROM node:12

WORKDIR /var/www/design-system

ENV HOST 0.0.0.0

CMD ["sh", "-c", "yarn install && yarn dev"]
