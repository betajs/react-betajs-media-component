import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlayerPage from '../pages/player/PlayerPage';
import RecorderPage from '../pages/recorder/RecorderPage';
import ScreenPage from '../pages/recorder/ScreenPage';
import PlayerListPage from '../pages/player/PlayerListPage';

class MainContent extends Component {
    render() {
        return (
            <main className="App-intro container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/player" component={PlayerPage} />
                    <Route exact path="/recorder" component={RecorderPage} />
                    <Route exact path="/screen" component={ScreenPage} />
                    <Route exact path="/player-list" component={PlayerListPage} />
                </Switch>
            </main>
        );
    }
}

export default MainContent;