FROM node:20.19.6

WORKDIR /usr/src/app
COPY . .
RUN npm ci

CMD ["npx", "playwright", "test"]
