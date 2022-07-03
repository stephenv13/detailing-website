FROM node:14 AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY ./ ./
# Builds files in server/
RUN npm run build

CMD ["npm", "run", "start"]