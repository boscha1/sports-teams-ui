# Sports UI React App
This is a frontend application built with React and Chakra UI that consumes data from a server that serves NFL data. This app allows users to view information about NFL teams, players, games, and statistics.

## Installation

### Install and run using node:

To run this application locally using node, you will need the following node version 16.15.1^ installed.
1. Change into the project directory using ```cd nfl-react-app```
2. Install the project dependencies using ```npm install```
3. Start the development server using ```npm start```
4. Open ```http://localhost:3000``` to view the app in the browser

### Install and run using docker:

1. Change into the project directory using ```cd nfl-react-app```
2. Build using docker: ```docker build -t sports-ui . ```
3. Run the docker image: ```docker run -p 3000:3000 sports-ui```
4. Open ```http://localhost:3000``` to view the app in the browser

## Features
- View a list of all NFL teams and their information
- View a list of all NFL head coaches and their information

## Technologies Used
- React JS
- Chakra UI
