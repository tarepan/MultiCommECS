FROM node

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN ["npm", "ci"]

COPY ./src/* ./

CMD ["node", "/usr/src/app/checkSecrets.js"]
