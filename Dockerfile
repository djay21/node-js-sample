FROM node:10

USER root

EXPOSE 3000

WORKDIR /src/

COPY . .
WORKDIR /src/website
run ls -lrt
CMD ls -lrt && npm start