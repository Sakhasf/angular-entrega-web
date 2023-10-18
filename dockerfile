FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g @angular/cli@15.0.0

RUN npm run build 

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]