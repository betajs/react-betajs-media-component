import { string, number, bool, arrayOf, func, array, object, oneOfType } from 'prop-types';

// ####################### Player/Recorder Attributes #############################
// When using HTML embed methods, all parameters should be prefixed with ba-
export const betaJSCommonMediaComponentPropTypes = {
    "theme": string,
    'themecolor': string,
    'width': oneOfType([number, string]),
    'height': oneOfType([number, string]),
};

export const betaJSRecorderAttributesPropTypes = {

    /* Configuration */
    "enforce-duration": bool,
    "forceflash": bool,
    "flashincognitosupport": bool,
    "localplayback": bool,
    "noaudio": bool,
    "noflash": bool,
    "onlyaudio": bool,
    "playerattrs": object,
    "shortMessage": bool,
    "uploadoptions": object,

    /* Settings */
    "allowcancel": bool,
    "allowcustomupload": bool,
    "allowedextensions": bool,
    "allowmultistreams": bool,
    "allowscreen": bool,
    "allowrecord": bool,
    "allowtexttrackupload": bool,
    "allowupload": bool,
    "audio-test-mandatory": bool,
    "autorecord": bool,
    "autoplay": bool,
    "camerafacefront": bool,
    "custom-covershots": bool,
    "display-timer": bool,
    "early-rerecord": bool,
    "faceoutline": bool,
    "flip-camera": bool,
    "manual-upload": bool,
    "manualsubmit": bool,
    "nofullscreen": bool,
    "orientation": bool,
    "pausable": bool,
    "picksnapshots": bool,
    "primaryrecord": bool,
    "recordermode": bool,
    "rerecordable": bool,
    "stretch": bool,
    "screen": object,
    "skipinitial": bool,
    "skipinitialonrerecord": bool,
    "webrtcstreaming": bool,
    "webrtconmobile": bool,
    "webrtcstreamingifnecessary": bool,

    /* Options */
    "addstreampositionx": number,
    "addstreampositiony": number,
    "addstreampositionwidth": number,
    "addstreampositionheight": number,
    "audiobitrate": number,
    "countdown": number,
    "filesizelimit": bool,
    "framerate-warning": number,
    "framerate": number,
    "gallerysnapshots": number,
    "minuploadingwidth": oneOfType([number, string]),
    "maxuploadingwidth": oneOfType([number, string]),
    "minuploadingheight": oneOfType([number, string]),
    "maxuploadingheight": oneOfType([number, string]),
    "microphone-volume": number,
    "playbacksource": string,
    "playbackposter": string,
    "recordings": number,
    "recordingwidth": oneOfType([number, string]),
    "recordingheight": oneOfType([number, string]),
    "snapshotmax": number,
    "snapshottype": string,
    "timelimit": number,
    "timeminlimit": number,
    "rtmpstreamtype": string,
    "rtmpmicrophonecodec": string,
    "uploadlocales": arrayOf(object),
    "videobitrate": number

};

export const betaJSPlayerAttributesPropTypes = {
    // Related only for react component not existing in BetaJS Media Component
    "flashFile": string,
    "locale": string,

    // BetaJS Media Component options
    "width": oneOfType([number, string]),
    "height": oneOfType([number, string]),
    "popup-width": oneOfType([number, string]),
    "popup-height": oneOfType([number, string]),

    /* Themes */
    "theme": string,
    "themecolor": string,

    /* Attributes */
    "poster": string, //"",
    "source": string, // "",
    "sources": arrayOf(object), //[],
    "sourcefilter": object, // {},
    "streams": arrayOf(object), // [],
    "currentstream": object, // null,
    "playlist": oneOfType([array, object, string]), // null,
    "volume": number, // 1.0,
    "title": string, // "",
    "initialseek": number, // null,
    "sharevideo": oneOfType([array, string]),
    "sharevideourl": string, // "",
    "visibilityfraction": number, // 0.8,

    /* Configuration */
    "forceflash": bool, // false,
    "noflash": bool, // false,
    "reloadonplay": bool, // false,
    "playonclick": bool, // true,

    /* Ads */
    "adprovider": string, // "adsense", "vast"
    "preroll": bool, // false,

    /* Options */
    "rerecordable": bool, // false,
    "submittable": bool, // false,
    "autoplay": bool, // false,
    "preload": bool, // false,
    "loop": bool, // false,
    "popup": bool, // false,
    "nofullscreen": bool, // false,
    "playfullscreenonmobile": bool, // false,
    "stretch": bool, // false,
    "popup-stretch": bool, // false,
    "hideoninactivity": bool, // true,
    "hidebarafter": number, // 5000,
    "preventinteraction": bool, // false,
    "skipinitial": bool, // false,
    "playwhenvisible": bool, // false,
    "disablepause": bool, // false,
    "disableseeking": bool, // false,
    "airplay": bool, // false,
    "chromecast": bool, // false,
    "skipseconds": number, // 5,
    "tracktags": arrayOf(object),
    "tracktagsstyled": bool, // true,
    "showsettings": bool, // true,
    "playercurrentspeed": number,
    "tracktaglang": string,
    "tracksshowselection": bool, // false,
    "settingsoptions": arrayOf(object),
    "createthumbnails": bool,

    "allowtexttrackupload": bool, // false,
    "uploadtexttracksvisible": bool, // false,
    "uploadlocales": arrayOf(object),
    //     [{
    //     lang: 'en',
    //     label: 'English'
    // }],
    "ttuploadervisible": bool // false,

// Presentational parameters
// // handle special cases
// handleVideo: function(props, propName, componentName) {
//     if( (props['video'] === undefined || props['video'].length < 1) &&
//         (props['video-profile'] === undefined || props['video-profile'].length < 1)
//     ) {
//         return new Error(
//             'Please provide with video or video-profile token to component' +
//             ' `' + componentName + '`. Validation failed'
//         )
//     }
// },
};

// #######################  DEFAULTS  ##################################

// #######################  EMBEDDING EVENTS #############################
// Javascript Embed Recorder Events
export const betaJSRecorderEmbeddingEventsPropTypes = {
    onRecording: func,
    onPlaying: func,
    onPaused: func,
    onEnded: func,
    onSeek: func,
    onManuallySubmitted: func,
    onRecordingProgress: func,
    onUploaded: func,
    onUploadSelected: func,
    onUploading: func,
    onRerecord: func,
    onCountdown: func,
    onProgress: func,
    onUploadProgress: func,
    // onProcessing: func,
    // onProcessed: func,
    onAccessForbidden: func,
    onAccessGranted: func,
    onCameraUnresponsive: func,
    onCameraResponsive: func,
    onVerified: func,
    onNoCamera: func,
    onHasCamera: func,
    onNoMicrophone: func,
    onHasMicrophone: func,
    onRef: func
};

export const betaJSPlayerEmbeddingEventsPropTypes = {
    onPlaying: func,
    onPaused: func,
    onEnded: func,
    onSeek: func,
    onReadyToPlay: func,
    onRef: func
};

export const betaJSCommonEmbeddingEventsPropTypes = {
    onAttached: func,
    onLoaded: func,
    onError: func
};

// #######################  betaJS METHODS  ##############################
// Methods
export const betaJSMethods = {
    play: func,
    record: func,
    upload: func,
    rerecord: func,
    stop: func,
    stopRecord: func,
    hidePopup: func,
    reset: func,
    lightLevel: func,
    soundLevel: func,
    averageFrameRate: func,
    isRecording: func,
    width: func,
    height: func,
    isFlash: func,
    videoWidth: func,
    videoHeight: func,
    destroy: func
};


// #######################    ##############################
// Common Events
export const betaJSApiEventsPropTypes = {
    onEventPlay: func,
    onEventPause: func,
    onEventStop: func,
    onEventErrorPlayer: func,
    onEventSubmitted: func,
    onEventPlayerSeek: func,
    onEventManuallySubmitted: func,
    onEventUploaded: func,
    onEventUploadSelected: func,
    onEventRecording: func,
    onEventUploading: func,
    onEventFinished: func,
    onEventDiscarded: func,
    onEventErrorRecorder: func,
    onEventCountdown: func,
    onEventElapsed: func,
    onEventUploadProgress: func,
    onEventProcessingProgress: func,
    onEventReadyToRecord: func,
    onEventReadyToPlay: func,
    onEventAccessForbidden: func,
    onEventAccessGranted: func,
    onEventAccessRevoked: func,
    onEventRecorderProcessed: func
};

// #######################  React Common Options  ##############################
export const reactCustomOptions = {
    preventReRenderOnUpdate: bool
};

export const betaJSRecorderApplicationOptions = {
    // application options
    webrtc_streaming: bool,
    auth: bool,
    debug: bool,
    testing_application: bool,

    // screenoptions
    chrome_extension_id: string,
    chrome_extension_install_link: string,
    opera_extension_id: string,
    opera_extension_install_link: string
};

export const betaJSPlayerApplicationOptions = {
    // application options
};

export const screenRecorderOptions = {
};