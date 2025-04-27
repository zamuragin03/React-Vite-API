FROM node:alpine as BUILD

WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:mainline
EXPOSE 80

COPY --from=BUILD /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]