# base image
FROM node:9.6.1

# set working directory
WORKDIR /usr/src/frontend

# install and cache app dependencies
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
# start app
CMD ["npm", "start"]