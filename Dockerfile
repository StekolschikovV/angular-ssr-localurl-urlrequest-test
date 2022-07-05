## Use Node Slim image
FROM node:16-alpine

WORKDIR /usr/src/app

## Copy source code
COPY . .
RUN yarn
RUN yarn run build:ssr

## Start the application
CMD ["yarn", "serve:ssr"]
