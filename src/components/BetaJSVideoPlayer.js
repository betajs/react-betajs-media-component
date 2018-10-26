import React, { Component } from 'react';
import {
    betaJSPlayerAttributesPropTypes, betaJSPlayerEmbeddingEventsPropTypes, betaJSCommonEmbeddingEventsPropTypes,
    betaJSPlayerApplicationOptions, reactCustomOptions
} from '../constants';
import { string, bool, arrayOf, func } from 'prop-types';

export default class BetaJSVideoPlayer extends Component {

    static player;
    static previousVideo;

    /**
     * PropTypes
     */
    static propTypes = {
        // Related only for react component not existing in BetaJS Media Component
        "flashFile": string,
        "locale": string,

        // BetaJS Media Component options
        ...betaJSPlayerAttributesPropTypes,
        ...betaJSPlayerEmbeddingEventsPropTypes,
        ...betaJSCommonEmbeddingEventsPropTypes,
        ...betaJSPlayerApplicationOptions,
        ...reactCustomOptions
    };

    /**
     * Default settings
     */
    static defaultProps = {
        // Presentational parameters
        'width': 480,
        'height': 270,

        // only react related options
        'preventReRenderOnUpdate': true,

        "settingsoptions": [{
            id: 'playerspeeds',
            label: 'player-speed',
            defaultValue: 1.0,
            visible: 'media-all',
            flashSupport: false,
            mobileSupport: true,
            className: 'player-speed',
            options: [{
                label: 0.50,
                value: 0.50
            },
                {
                    label: 0.75,
                    value: 0.75
                },
                {
                    label: 1.00,
                    value: 1.00
                },
                {
                    label: 1.25,
                    value: 1.25
                },
                {
                    label: 1.50,
                    value: 1.50
                },
                {
                    label: 2.00,
                    value: 2.00
                }
            ],
            events: [{
                type: 'click touchstart',
                method: 'set_speed',
                argument: true
            }]
        }],

        // Default events to no-op
        ...Object.keys(Object.assign(betaJSPlayerEmbeddingEventsPropTypes, betaJSCommonEmbeddingEventsPropTypes)).reduce((defaults, event) => {
            defaults[event] = () => {};
            return defaults;
        }, {})
    };

    /**
     * Component will mount
     * Initializing an application
     */
    componentWillMount() {
        try {
            this.initApplication(function(err, context) {
                if (err)
                    throw new Error(err);
            }, this);
        } catch (e) {
            console.warn(e);
        }
    }

    // Trigger when state is changes
    shouldComponentUpdate (nextProps, nextState) {
        const { preventReRenderOnUpdate } = nextProps || true;
        return !preventReRenderOnUpdate;
    }

    // BetaJS Player requires an existing DOM element to attach to
    // So why we can't use _buildPlayer in componentWillMount
    componentDidMount() {
        this._buildPlayer();
    };

    componentWillUpdate (nextProps, nextState) {
        // set undefined paren onRef call
        this.props.onRef(undefined);
        try {
            this.player.destroy();
            this.initApplication(function(err, context) {
                if (err)
                    throw new Error(err);
            }, this);
        } catch (e) {
            console.warn(e);
        }
    }

    componentDidUpdate (prevProps, prevState) {
        this.previousVideo = prevProps.source || prevProps.sources;

        this._buildPlayer();
    }

    componentWillUnmount () {
        // Will receive error 'Cannot read property 'urls' of undefined'
        if (this.player)
            this.player.destroy();

        this.props.onRef(undefined);
    }

    render() {
        return (
            <div ref={e => { this.element = e ; }} {...this._elementProps}> </div>
        );
    };

    _buildPlayer = () => {
        if (this.player) this.player.destroy();

        this.player = new BetaJS.MediaComponents.VideoPlayer.Dynamics.Player({
            element: this.element,
            attrs: this._betaJSPlayerAttributes
        });

        // this.player = new BetaJS.Dynamics.Player({
        //     element: this.element,
        //     attrs: this._betaJSPlayerAttributes
        // });

        this.player.activate();

        Object.entries(this._betaJSEvents).forEach(([event, func]) => {
            this.player.on(event, func.bind(this, this.player.get()));
        });

        this.props.onRef(this);
    };

    _betaJSEvents = Object.keys(Object.assign(betaJSPlayerEmbeddingEventsPropTypes, betaJSCommonEmbeddingEventsPropTypes)).reduce((memo, propName) => {
        const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3)
            .replace(/(recorder_|player_)/g, '');
        memo[eventName] = (...args) => {
            this.props[propName](...args)
        };
        return memo;
    }, {});

    initApplication (callback, context) {
        const { source, sources, playlist, locale, flashFile } = this.props;

        try {
            // Set locale
            if (typeof locale !== "undefined")
                BetaJS.MediaComponents.Assets.strings.setLocale(locale);

            // Set external flash player
            if (typeof flashFile !== "undefined") {
                BetaJS.Flash.options = {
                    flashFile: flashFile,
                    forceReload: true
                };
            }

            if (!source && !sources && !playlist)
                callback('Video source is mandatory. Please provide one of the props "source(-s)" or "playlist"', null);
        } catch (exe) {
            console.warn(exe);
            callback(exe, null);
        }
    }

    /**
     * BetaJS Player attributes provided by props
     * @return {{}}
     * @private
     */
    get _betaJSPlayerAttributes () {
        return Object.keys(this.props).filter(k => betaJSPlayerAttributesPropTypes[k]).reduce((props, k) => {
            props[k] = this.props[k];
            return props;
        }, {});
    }

    // Props which are not related to BetaJS Player
    get _elementProps () {
        return Object.keys(this.props).filter(k => !this.constructor.propTypes[k]).reduce((props, k) => {
            props[k] = this.props[k];
            return props;
        }, {});
    }

    // Delegate ziggeo attrs to the player
    playerInstance = () => this.player;
}
