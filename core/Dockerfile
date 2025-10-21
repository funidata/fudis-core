FROM node:20.19.0

# Install dependencies.
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["npx","storybook", "dev", "-p", "6007", "--no-open", "--host", "0.0.0.0", "--host", "core-storybook"]
