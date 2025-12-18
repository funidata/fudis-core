FROM node:24.12.0

WORKDIR /usr/src/app
COPY . .
RUN npm ci

CMD ["npx", "playwright", "test"]
