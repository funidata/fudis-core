FROM node:24.13.0

WORKDIR /usr/src/app
COPY package*.json ./
COPY core/package*.json ./core/

RUN npm ci

COPY . .
