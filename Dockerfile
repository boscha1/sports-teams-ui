# Use the official Node.js 14 image as the base image
FROM node:14

# Create a working directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

# Build the app
RUN npm run build

# Serve the app on port 80
EXPOSE 3000
CMD [ "npm", "run", "start" ]
