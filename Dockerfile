FROM node

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start"]

