import React, { Component } from 'react';
import { BetaJSVideoPlayer } from 'react-betajs-media-component';
import WarningMessage from '../../components/WarningMessage';
import { POSTER, VIDEO } from '../../constants';

export default class PlayerPage extends Component {

    playing = (embedding) => {
        console.log('it\'s playing, your action here', embedding);
    };

    readyToPlay = (embedding) => {
        console.log('it\'s ready to play', embedding);
    };

    paused = (embedding) => {
        console.log('it\'s paused, your action when pause', embedding);
    };

    playerEnded = (embedding) => {
        console.log('Player ended', embedding);
    };

    playerAttached = () => {
        console.log('Player attached');
    };

    playerLoaded = (embedding) => {
        console.log('Player loaded', embedding);
    };

    playerError = (embedding) => {
        console.log('Player error', embedding);
    };

    playerSeek = (embedding) => {
        console.log('Player seeking', embedding);
    };

    render() {
        return (
            <section className="player-page">
                <h1 className="page-header">Player Page</h1>
                {!VIDEO && <WarningMessage message={"Video Link is required"} />}

                <BetaJSVideoPlayer
                    source={VIDEO}
                    poster={POSTER}
                    theme={"cube"}
                    locale={'en'}
                    height={270}
                    width={480}
                    onPlaying={this.playing}
                    onPaused={this.paused}
                    onEnded={this.playerEnded}
                    onAttached={this.playerAttached}
                    onLoaded={this.playerLoaded}
                    onError={this.playerError}
                    onSeek={this.playerSeek}
                    onReadyToPlay={this.readyToPlay}
                />
                <div className="text-left">
                    <h5 className="text-center"> ES6 Code Sample </h5>
                    <h6>Open console to see events attached to this Component</h6>
                    <pre>
                        {"import React from 'react';"} <br/>
                        {"import {BetaJSVideoPlayer} from 'react-betajs-media-component';"}<br/>
                        {"import { VIDEO, POSTER } from '../constants';"}
                        <br/>
                        <br/>
                        ...
                        <br/>
                        <br/>
                        {"playerLoaded = () => { console.log('Player loaded'); };"}
                        <br/>
                        {"playing = () => { console.log(\"it's playing, your action here\"); };"}
                        <br/>
                        <br/>
                        ...
                        <br/>
                        <br/>
                        {"<BetaJSVideoPlayer \n\t source=\"your video source\" \n\t source=\"your video source\"" +
                        "\n\t onLoaded={this.playerLoaded} \n\t onPlaying={this.playing}" +
                        "\n/>"}
                        <br/>
                        ...
                    </pre>
                </div>
            </section>
        );
    }
}
