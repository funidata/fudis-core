FROM node:24.14.1

WORKDIR /usr/src/app
COPY . .
RUN npm ci

CMD ["npx", "playwright", "test"]
