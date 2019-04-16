This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project is based BetaJS javascript frameworks, for easy integration on React projects.

All code samples you can find in [React BetaJS Media Component repo](https://github.com/betajs/react-betajs-media-component).

It's include with a lot of options and events:
 - video recorder (You can use [Nano Media Server](https://github.com/Jsonize/nano-media-server) for virtual server)
 - video player
 - ... will be added audio player/recorder also
  
Simple start:
```asp
 npm isntall
 HTTPS=true npm start
```

Run virtual server for recorder:
- Install [Nano Media Server](https://github.com/Jsonize/nano-media-server)
- You can manage your own server like in example `src\pages\recorder\RecorderPage` `componentDidMount` life cycle method.
- Generate local SSL certificates and run (for player it's not mandatory):

```asp
node node_modules/nano-media-server/server.js --staticserve . --port='5050' --sslkey='/path/to/key.pem' --sslcert='/path/to/cert.pem' --ffmpegopt='{ "test_info": { "encoders": ["aac"] } }' 
```

### Changelogs
v 0.0.9 fixed bugs like fullscreen on player, stretch, camera detection on recorder. Added mobile recorder via WebRTC.

