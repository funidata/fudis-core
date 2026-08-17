FROM mcr.microsoft.com/playwright:v1.62.1-noble

WORKDIR /usr/src/app
COPY . .
RUN npm ci

CMD ["npx", "playwright", "test"]
