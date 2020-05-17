FROM node:lts-buster-slim
WORKDIR /usr/src/app
ENV PORT 3001
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD npm start