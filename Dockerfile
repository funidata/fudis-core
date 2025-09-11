FROM node:20.19.5

WORKDIR /usr/src/app
COPY package*.json ./
COPY core/package*.json ./core/

RUN npm ci

COPY . .
