## BetaJS's React component
Project is based BetaJS javascript frameworks, for easy integration on React projects

It's include with a lot of options and events:
 - video recorder 
 - video player
 - ... soon will be added audio player/recorder also

## Demo
 - [Video Player](https://94q7v38124.codesandbox.io/player)
 - [Video Recorder](https://94q7v38124.codesandbox.io/recorder) -- Only initial view, you need run local server to see in action

## Video Recorder
To be able recorder start work as expected you need also virtual server, perfect for testing is [Nano Media Server](`https://github.com/Jsonize/nano-media-server`).
After installation you can run below on terminal, which will start server on `https://localhost:5050`:

```$xslt
node node_modules/nano-media-server/server.js --staticserve . --port='5050' --sslkey='/path/to/key.pem' --sslcert='/path/to/cert.pem' --ffmpegopt='{ "test_info": { "encoders": ["aac"] } }'
```

Example code:
```$xslt
import React from 'react'
import {BetaJSVideoRecorder} from 'react-betajs-media-component'
...
    recorderRecording = () => {
        console.log('Recorder onRecording');
    };

    recorderUploading = () => {
        console.log('Recorder uploading');
    };
 
...
 
    <BetaJSVideoRecorder
        height={180}
        width={320}
        onRecording={this.recorderRecording}
        onUploading={this.recorderUploading}
    />
 
...
```

##### Available `events` for Recorder

```react2html
   
  - onPlaying
  - onPaused
  - onAttached
  - onLoaded
  - onEnded
  - onSeek 
  - onError
  - onManuallySubmitted
  - onUploaded
  - onUploadSelected
  - onRecording
  - onUploading
  - onRerecord
  - onCountdown
  - onRecordingProgress
  - onUploadProgress
  - onAccessForbidden
  - onAccessGranted
  - onCameraUnresponsive
  - onVerified
  - onNoCamera
  - onNoMicrophone
  - onRef
```

### Recorder option Screen Recorder
Screen Capture is currently supported by Firefox, Chrome and Opera.
- Firefox: Direct support -- no extensions or plugins required
- Chrome + Opera: use extension builder located in your application manager

```
    <BetaJSVideoRecorder
        allowscreen={true}
        allowrecord={false} // Optional you can even set it to true
        allowupload={false} // Optional you can even set it to true
        chrome_extension_id={YOUR_CHROME_EXTENSION_ID}
        chrome_extension_install_link={YOUR_CHROME_EXTENSION_INSTALLATION_LINK}
        opera_extension_id={YOUR_OPERA_EXTENSION_ID}
        opera_extension_install_link={YOUR_OPERA_EXTENSION_INSTALLATION_LINK}
        ...
    />
```

## Video Player

```$xslt
import React from 'react'
import {BetaJSVideoPlayer} from 'react-betajs-media-component'
 
...
 
    playing = (embedding /* player instance */) => {
        console.log('it\'s playing, your action here');
    };
 
    paused = (embedding /* player instance */) => {
        console.log('it\'s paused, your action when pause');
    };
 
...
    <BetaJSVideoPlayer
        source={VIDEO_SOURCE}
        theme={'modern'}
        themecolor={'red'}
        skipinitial={false}
        onPlaying={this.playing}
        onPaused={this.paused}
        ...
    />
...
```

##### Available `events listeners` for Player
```react2html
   
   - onPlaying
   - onPaused
   - onAttached
   - onLoaded
   - onEnded
   - onError
   - onSeek 
   - onRef
```