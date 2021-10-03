FROM node:16-alpine AS builder

# Create app directory
WORKDIR /usr/app/front-end
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY front-end/package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm ci

# Bundle app source
COPY front-end .

CMD [ "npm", "run", "build" ]


FROM node:16-alpine

# Create app directory
WORKDIR /usr/app/back-end
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY back-end/package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm ci

# Bundle app source
COPY back-end ./
COPY --from=builder /usr/app/front-end/build /usr/app/front-end

EXPOSE 3000
CMD [ "npm", "run", "start" ]