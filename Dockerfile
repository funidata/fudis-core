FROM node:24.22.1

WORKDIR /usr/src/app
COPY package*.json ./
COPY core/package*.json ./core/

RUN npm ci

COPY . .
