# ProjectRTC

## WebRTC Live Streaming

- Node.js server
- Desktop client
- [Android client](https://github.com/pchab/AndroidRTC)

The signaling part is done with [socket.io](socket.io).
The client follows a MVVM pattern [knockoutjs](http://knockoutjs.com/)

## Install

It requires [node.js](http://nodejs.org/download/)

* git clone https://github.com/pchab/ProjectRTC.git
* cd ProjectRTC/
* npm install
* npm start

The server will run on port 3000.
You can test it in the (Chrome) browser at localhost:3000.

## User Database

Using a local MongoDB

* mongod --dbpath ./data --port 1664

You can configure the url in /config/database.js

## Author

- Pierre Chabardes
