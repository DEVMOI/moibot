FROM node:lts

#Creates Working App
WORKDIR /usr/app
#copy's package.json file and installs deps
COPY package.json ./
RUN npm i -g npm yarn --quiet
RUN yarn
#bundles source
COPY . .
