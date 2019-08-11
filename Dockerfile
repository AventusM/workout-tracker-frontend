FROM node:latest
WORKDIR /workout-tracker-front-end
COPY . .
EXPOSE 3000
RUN npm install
CMD npm start