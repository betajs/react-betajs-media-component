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
    "gallerysnapshots": number,
    "autorecord": bool,
    "autoplay": bool,
    "allowrecord": bool,
    "allowupload": bool,
    "allowcustomupload": bool,
    "manual-upload": bool,
    "camerafacefront": bool,
    "primaryrecord": bool,
    "allowscreen": bool,
    "nofullscreen": bool,
    "recordingwidth": oneOfType([number, string]),
    "recordingheight": oneOfType([number, string]),
    "minuploadingwidth": oneOfType([number, string]),
    "maxuploadingwidth": oneOfType([number, string]),
    "minuploadingheight": oneOfType([number, string]),
    "maxuploadingheight": oneOfType([number, string]),
    "countdown": number,
    "snapshotmax": number,
    "framerate-warning": number,
    "framerate": number,
    "audiobitrate": number,
    "videobitrate": number,
    "snapshottype": string,
    "picksnapshots": bool,
    "playbacksource": string,
    "screen": object,
    "playbackposter": string,
    "recordermode": bool,
    "skipinitial": bool,
    "skipinitialonrerecord": bool,
    "timelimit": number,
    "timeminlimit": number,
    "rtmpstreamtype": string,
    "rtmpmicrophonecodec": string,
    "webrtcstreaming": bool,
    "webrtconmobile": bool,
    "webrtcstreamingifnecessary": bool,
    "microphone-volume": number,
    "flip-camera": bool,
    "early-rerecord": bool,
    "custom-covershots": bool,
    "manualsubmit": bool,
    "allowedextensions": bool,
    "filesizelimit": bool,
    "faceoutline": bool,
    "display-timer": bool,

    /* Configuration */
    "forceflash": bool,
    "noflash": bool,
    "onlyaudio": bool,
    "noaudio": bool,
    "flashincognitosupport": bool,
    "enforce-duration": bool,
    "localplayback": bool,
    "uploadoptions": object,
    "playerattrs": object,
    "shortMessage": bool,

    /* Options */
    "rerecordable": bool,
    "allowcancel": bool,
    "recordings": number,
    "orientation": bool,
    "stretch": bool,
    "audio-test-mandatory": bool,

    "allowtexttrackupload": bool,
    "uploadlocales": arrayOf(object)
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