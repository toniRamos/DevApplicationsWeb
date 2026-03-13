FROM node:24-alpine AS base
WORKDIR /app

FROM base AS dev
COPY package*.json ./
RUN npm install --silent
EXPOSE 4321
CMD ["npm", "run", "dev"]
