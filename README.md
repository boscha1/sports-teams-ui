# Sports UI React App
This is a frontend application built with React and Chakra UI that consumes data from a server that serves NFL data. This app allows users to view information about NFL teams, players, games, and statistics.

## Installation

### Install and run using node:

To run this application locally using node, you will need the following node version 16.15.1^ installed.
1. Install the project dependencies using ```npm install```
2. Start the development server using ```npm start```
3. Open ```http://localhost:3000``` to view the app in the browser

### Install and run using docker:

#### Without the backend:

1. Build using docker: ```docker build -t sports-ui . ```
2. Run the docker image: ```docker run -p 3000:3000 sports-ui```
3. Open ```http://localhost:3000``` to view the app in the browser

#### With the backend:
1. Run ```docker-compose up```
2. Open ```http://localhost:3000``` to view the app in the browser

## Features
- View a list of all NFL teams and their information
- View a list of all NFL head coaches and their information

## Technologies Used
- React JS
- Chakra UI
