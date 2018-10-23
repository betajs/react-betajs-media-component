import React, { Component } from 'react';
import { BetaJSVideoPlayer } from 'react-betajs-media-component';
import { videos } from '../../constants';

export default class PlayerListPage extends Component {


    render() {
        console.log('0', "{{" + JSON.stringify(videos) + "}}");
        return (
            <section className="player-page">
                <h1 className="page-header">Players List Page</h1>
                <BetaJSVideoPlayer playlist={videos} />
            </section>
        );
    }
}
