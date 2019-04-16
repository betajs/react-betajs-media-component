## BetaJS's React component
Project is based BetaJS javascript frameworks, for easy integration on React projects

It's include with a lot of options and events:
 - video recorder 
 - video player
 - ... soon will be added audio player/recorder also

## Demo
 - [Video Player](https://94q7v38124.codesandbox.io/player)
 - [Video Recorder](https://94q7v38124.codesandbox.io/recorder) -- Only initial view, you need run local server to see in action

## Change Logs
 - 0.1.0 - Added video upload and mobile recorder cover shot generator. Video thumbnails generation and view in player feature added. Mobile swipe on progressbar elements added

## Video Recorder
To be able recorder start work as expected you need also virtual server, perfect for testing is [Nano Media Server](https://github.com/Jsonize/nano-media-server).
After installation you can run below on terminal, which will start server on `https://localhost:5050`:

Install once Nano Media Server: `npm i nano-media-server` on your project folder. Generate local SSL certificates ([Useful guide](https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec)). After you can run the below command by replacing your own certificate path to be able use the media server:
```$xslt
node node_modules/nano-media-server/server.js --staticserve . --port='5050' --sslkey='/path/to/key.pem' --sslcert='/path/to/cert.pem' --ffmpegopt='{ "test_info": { "encoders": ["aac"] } }'
```

Example code:
```$xslt
import React from 'react'
import {BetaJSVideoRecorder} from 'react-betajs-media-component'
...
    /**
     *
     */
    componentDidMount() {
        let BetaJS = window.BetaJS;
        let filename = "video-" + BetaJS.Time.now();
        let recorder = this.child.recorderInstance();
        let nanoMediaServer = 'https://localhost:5050'; 

        recorder._prepareRecording = function () {
            recorder.set("uploadoptions", {
                image: {url: nanoMediaServer + "/files/" + filename + ".jpg"},
                video: {url: nanoMediaServer + "/files/" + filename + ".webm"},
                audio: {url: nanoMediaServer + "/files/" + filename + ".wav"}
            });
            recorder.set("playbacksource", nanoMediaServer + "/files/" + filename + ".mp4");
            if (recorder.recorder)
                recorder.set("playbackposter", nanoMediaServer + "/files/" + filename + ".jpg");
            return BetaJS.Promise.value(true);
        };

        recorder._verifyRecording = function () {
            return BetaJS.Ajax.Support.execute({
                method: "POST",
                uri: `${nanoMediaServer}/files/${filename}.webm/transcode/${filename}.mp4` + (recorder.recorder && recorder.recorder.localPlaybackSource().audio ? "?audio=" + filename + ".wav" : "")
            });
        };
    }
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
##### Available Player Options
```asp

    "theme": string
    'themecolor': string
    'width': oneOfType([number, string])
    'height': oneOfType([number, string]) 
    "flashFile": string
    "locale": string

    "gallerysnapshots": number
    "autorecord": bool
    "autoplay": bool
    "allowrecord": bool
    "allowupload": bool
    "allowcustomupload": bool
    "manual-upload": bool
    "camerafacefront": bool
    "primaryrecord": bool
    "allowscreen": bool
    "nofullscreen": bool
    "recordingwidth": oneOfType([number, string])
    "recordingheight": oneOfType([number, string])
    "minuploadingwidth": oneOfType([number, string])
    "maxuploadingwidth": oneOfType([number, string])
    "minuploadingheight": oneOfType([number, string])
    "maxuploadingheight": oneOfType([number, string])
    "countdown": number
    "snapshotmax": number
    "framerate-warning": number
    "framerate": number
    "audiobitrate": number
    "videobitrate": number
    "snapshottype": string
    "picksnapshots": bool
    "playbacksource": string
    "screen": object
    "playbackposter": string
    "recordermode": bool
    "skipinitial": bool
    "skipinitialonrerecord": bool
    "timelimit": number
    "timeminlimit": number
    "rtmpstreamtype": string
    "rtmpmicrophonecodec": string
    "microphone-volume": number
    "flip-camera": bool
    "early-rerecord": bool
    "custom-covershots": bool
    "manualsubmit": bool
    "allowedextensions": bool
    "filesizelimit": bool
    "faceoutline": bool
    "display-timer": bool

    /* Configuration */
    "webrtcstreaming": bool
    "webrtconmobile": bool
    "webrtcstreamingifnecessary": bool

    /* Options */
    "forceflash": bool
    "noflash": bool
    "onlyaudio": bool
    "noaudio": bool
    "flashincognitosupport": bool
    "enforce-duration": bool
    "localplayback": bool
    "uploadoptions": object
    "playerattrs": object
    "shortMessage": bool
    "createthumbnails": bool // default true
    "rerecordable": bool
    "allowcancel": bool
    "recordings": number
    "orientation": bool
    "stretch": bool
    "audio-test-mandatory": bool

    "allowtexttrackupload": bool
    "uploadlocales": arrayOf(object)
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

##### Available Player Options
```asp
    "theme": string
    'themecolor': string
    'width': oneOfType([number, string])
    "popup-width": oneOfType([number, string])
    "popup-height": oneOfType([number, string])
    'height': oneOfType([number, string])
    "locale": string  

    /* Attributes */
    "poster": string,
    "source": string,
    "sources": arrayOf(object)
    "sourcefilter": object
    "streams": arrayOf(object)
    "currentstream": object
    "playlist": oneOfType([array, object, string]),
    "volume": number
    "title": string
    "initialseek": number
    "sharevideo": oneOfType([array, string])
    "sharevideourl": string
    "visibilityfraction": number

    /* Configuration */
    "forceflash": bool
    "noflash": bool
    "reloadonplay": bool
    "playonclick": bool

    /* Ads */
    "adprovider": string // "adsense", "vast"
    "preroll": bool

    /* Options */
    "rerecordable": bool
    "submittable": bool
    "autoplay": bool
    "preload": bool
    "loop": bool
    "popup": bool
    "nofullscreen": bool
    "playfullscreenonmobile": bool
    "ready": bool
    "stretch": bool
    "popup-stretch": bool
    "hideoninactivity": bool
    "hidebarafter": number // 5000
    "preventinteraction": bool
    "skipinitial": bool
    "playwhenvisible": bool
    "disablepause": bool
    "disableseeking": bool
    "airplay": bool
    "chromecast": bool
    "skipseconds": number // 5
    "tracktags": arrayOf(object)
    "tracktagsstyled": bool
    "showsettings": bool
    "playercurrentspeed": number
    "tracktaglang": string
    "tracksshowselection": bool
    "settingsoptions": arrayOf(object),

    "allowtexttrackupload": bool, // false,
    "uploadtexttracksvisible": bool, // false,
    "uploadlocales": arrayOf(object),
    //     [{
    //     lang: 'en',
    //     label: 'English'
    // }],
    "ttuploadervisible": bool, // false,

```

### Themes
Theme Names set with `theme`:
```
    - cube
    - elevate
    - minimalist
    - modern
    - space
    - theatre
```
Theme Colors set with `themecolor`:
```
    - red
    - blue
    - green
```