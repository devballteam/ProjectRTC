# ProjectRTC

# This is temporary fork with HTTPS version
You need generated certificate. [HERE](https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-16-04) is instruction how to do it.
You have to run command:
* sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
and answer on few questions.

Then run server:
* CERTPATH=cert-file-path.crt KEYPATH=key-file-path.key node app.js

When server is up, then you can open page via https:// protocol.

# TODO
- clean up

## WebRTC Live Streaming

- Node.js server
- Desktop client
- [Android client](https://github.com/pchab/AndroidRTC)

You can also check this iOS client from Digix Technology:

- [iOS client](https://github.com/digixtechnology/iOSRTC)

The signaling part is done with [socket.io](socket.io).
The client is built with [angularjs](https://angularjs.org/).

## Install

It requires [node.js](http://nodejs.org/download/)

* git clone https://github.com/pchab/ProjectRTC.git
* cd ProjectRTC/
* npm install
* npm start

The server will run on port 3000.
You can test it in the (Chrome or Firefox) browser at localhost:3000.

## Author

- [Pierre Chabardes](mailto:pierre@chabardes.net)
