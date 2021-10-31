FROM node:14 as build
WORKDIR /opt/app
COPY package* ./
RUN npm ci --verbose
COPY . .
RUN npm run build:doc

FROM nginx:alpine
COPY --from=build /opt/app/doc/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
