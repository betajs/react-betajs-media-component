import React, { Component } from 'react';
import { BetaJSVideoRecorder } from 'react-betajs-media-component';
import { FLASH_FILE } from '../../constants';

export default class RecorderPage extends Component {

    static recorderInstance = null;

    constructor (props) {
        super(props);
        this.state = {
            test: false,
            filename: null
        }
    }

    /**
     *
     */
    componentDidMount() {
        let BetaJS = window.BetaJS;
        let filename = "video-" + BetaJS.Time.now();
        let recorder = this.child.recorderInstance();
        let nanoMediaServer = 'https://localhost:5050';  // https://github.com/Jsonize/nano-media-server

        /**
         * Example of nano server run
         * node node_modules/nano-media-server/server.js --staticserve . --port='5050'
         * --sslkey='/path/to/key.pem' --sslcert='/path/to/cert.pem' --ffmpegopt='{ "test_info": { "encoders": ["aac"] } }'
         */

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

    playing = () => {
        console.log('it\'s playing, your action here');
    };

    paused = () => {
        console.log('it\'s paused, your action when pause');
    };

    playerEnded = () => {
        console.log('Player ended');
    };

    playerAttached = () => {
        console.log('Recorder Player attached');
    };

    playerLoaded = () => {
        console.log('Player loaded');
    };

    playerSeek = () => {
        console.log('Player seeking');
    };

    recorderError = () => {
        console.log('Recorder error');
    };

    recorderManuallySubmitted = () => {
        console.log('Recorder onRecorderManuallySubmitted');
    };

    recorderRecording = () => {
        console.log('Recorder onRecorderRecording');
    };

    recorderUploaded = () => {
        console.log('Upload Completed');
    };

    recorderUploadSelected = (file) => {
        console.log('Recorder onRecorderUploadSelected', file);
    };

    recorderUploading = () => {
        console.log('Recorder onRecorderUploading');
    };

    recorderRerecord = () => {
        console.log('Recorder onRecorderRerecord');
    };

    recorderCountdown = () => {
        console.log('Recorder onRecorderCountdown');
    };

    recorderRecordingProgress = (time) => {
        console.log('Recorder onRecorderRecordingProgress', time);
    };

    recorderUploadProgress = (uploaded, total) => {
        console.log('Recorder onRecorderUploadProgress', uploaded, total);
    };

    recorderAccessForbidden = () => {
        console.log('Recorder recorderAccessForbidden');
    };

    recorderAccessGranted = () => {
        console.log('Recorder onRecorderAccessGranted');
    };

    recorderCameraUnresponsive = () => {
        console.log('Recorder onRecorderCameraUnresponsive');
    };

    recorderVerified = () => {
        console.log('Recorder onRecorderVerified');
    };

    recorderNoCamera = () => {
        console.log('Recorder onRecorderNoCamera');
    };

    recorderNoMicrophone = () => {
        console.log('Recorder onRecorderNoMicrophone');
    };

    render() {
        return (
            <section className="recorder-page">
                <h1 className="page-header">Recorder Page</h1>
                <p className="alert alert-success">
                    This app based on awesome <a href="https://betajs.com">BetaJS</a> JS framework
                </p>
                <BetaJSVideoRecorder
                    height={'280'}
                    width={'420'}
                    locale={'en'}
                    onRef={ref => (this.child = ref)}
                    flashFile={FLASH_FILE}
                    preventReRenderOnUpdate={true}
                    flip-camera={false}
                    onPlaying={this.playing}
                    onPaused={this.paused}
                    onEnded={this.playerEnded}
                    onAttached={this.playerAttached}
                    onLoaded={this.playerLoaded}
                    onSeek={this.playerSeek}
                    onError={this.recorderError}
                    onManuallySubmitted={this.recorderManuallySubmitted}
                    onUploaded={this.recorderUploaded}
                    onUploadSelected={this.recorderUploadSelected}
                    onRecording={this.recorderRecording}
                    onUploading={this.recorderUploading}
                    onRerecord={this.recorderRerecord}
                    onCountdown={this.recorderCountdown}
                    onRecordingProgress={this.recorderRecordingProgress}
                    onUploadProgress={this.recorderUploadProgress}
                    onAccessForbidden={this.recorderAccessForbidden}
                    onAccessGranted={this.recorderAccessGranted}
                    onCameraUnresponsive={this.recorderCameraUnresponsive}
                    onVerified={this.recorderVerified}
                    onNoCamera={this.recorderNoCamera}
                    onNoMicrophone={this.recorderNoMicrophone}
                />

                <div className="text-left">
                    <h5 className="text-center"> ES6 Code Sample </h5>
                    <h6>Open console to see events attached to this Component</h6>
                    <pre>
                        {"import React from 'react';"} <br/>
                        {"import {BetaJSRecorder} from 'react-betajs-media-recorder';"}<br/>
                        <br/>
                        <br/>
                        ...
                        <br/>
                        <br/>
                        {"reError = () => { console.log('Recorder error'); };"}
                        <br/>
                        {"recorderRecording = () => { console.log('Recorder onRecorderUploading'); };"}
                        <br/>
                        <br/>
                        ...
                        <br/>
                        <br/>
                        {'<BetaJSRecorder' +
                        '\n\t allowupload={false}' +
                        '\n\t allowrecord={false}' +
                        "\n\t onRecorderError={this.recorderError} \n\t onRecorderRecording={this.recorderRecording}" +
                        '\n/>'}
                        <br/>
                        ...
                    </pre>
                </div>
            </section>
        );
    }
}
