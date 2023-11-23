FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g @angular/cli@15.0.0
#build takes too long
#RUN npm run build 

EXPOSE 4200
#configuration k8s for kubernetes, remove to deploy or use on local machine. Use ng serve with RUN npm run build
# CMD ["ng", "serve", "configuration=k8s", "--host", "0.0.0.0"]
CMD ["npm", "run","start" "configuration=k8s", "--" "--host=0.0.0.0"]
