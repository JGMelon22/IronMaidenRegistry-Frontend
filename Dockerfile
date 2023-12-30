# Build Stage
FROM node:20-alpine AS build_stage
WORKDIR /app/react-app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 5173
CMD [ "npm", "run", "dev" ]