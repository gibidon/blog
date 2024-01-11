FROM node:18

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client-side
RUN npm i
RUN npm run build

WORKDIR /usr/src/app/server-side
RUN npm i

EXPOSE 3001

CMD ["node","app.js"]