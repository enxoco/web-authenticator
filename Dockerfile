FROM node:18 AS Build
WORKDIR /app/node/
COPY . .
RUN yarn
RUN yarn build

FROM nginx AS Production
WORKDIR /usr/share/nginx/html
COPY --from=Build /app/node/dist /usr/share/nginx/html/
