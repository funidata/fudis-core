FROM node:20.17.0

WORKDIR /usr/src/app
COPY package.json package-lock.json ./

RUN npm ci

COPY . .
