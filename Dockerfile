FROM node:14.0.0-alpine3.11 as builder
RUN mkdir application
WORKDIR application/
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm install
RUN npm install --save-dev  --unsafe-perm node-sass
RUN ls
RUN ng build --prod



FROM nginx:alpine as runer
COPY --from=builder application/dist/ usr/share/nginx/html/

