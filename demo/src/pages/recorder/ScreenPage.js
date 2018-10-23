import React, { Component } from 'react';
import { BetaJSVideoRecorder } from 'react-betajs-media-component';

export default class ScreenPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            test: false
        }
    }

    componentWillReceiveProps () {
        this.setState({ test: true });
    }


    render() {
        return (
            <section className="recorder-page">
                <h1 className="page-header">Screen Recorder Page</h1>
                <p className="alert alert-success">
                    This app based on awesome <a href="https://betajs.com">BetaJS</a> JS framework. <br/>
                    Screen recorder for now works only with FireFox w/o any extension
                </p>
                <BetaJSVideoRecorder
                    height={280}
                    width={420}
                    allowrecord={false}
                    allowscreen={true}
                    allowupload={false}
                    preventReRenderOnUpdate={true}
                />
            </section>
        );
    }
}
