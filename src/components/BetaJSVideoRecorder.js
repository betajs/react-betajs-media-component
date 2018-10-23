/* BetaJSReorder */
import React from 'react';
import {
    reactCustomOptions, betaJSRecorderAttributesPropTypes,
    betaJSRecorderEmbeddingEventsPropTypes, betaJSCommonEmbeddingEventsPropTypes, betaJSRecorderApplicationOptions
} from '../constants';
import { string, bool, arrayOf, func, object  } from 'prop-types';

export default class BetaJSVideoRecorder extends React.Component {

    static recorder = null;

    /**
     * Prop Types
     */
    static propTypes = {
        ...betaJSRecorderAttributesPropTypes,
        ...betaJSRecorderEmbeddingEventsPropTypes,
        ...betaJSCommonEmbeddingEventsPropTypes,
        ...betaJSRecorderApplicationOptions,
        ...reactCustomOptions
    };

    /**
     * Set default props
     */
    static defaultProps = {
        // screen configuration for BetaJS extension
        chrome_extension_id: "meoefjkcilgjlkibnjjlfdgphacbeglk",
        chrome_extension_install_link: "https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk",
        opera_extension_id: "dnnolmnenehhgplebjhbcmfdbaabkepm",
        opera_extension_install_link: "https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767",

        // Default events to no-op
        ...Object.keys(Object.assign(betaJSRecorderEmbeddingEventsPropTypes, betaJSCommonEmbeddingEventsPropTypes)).reduce((defaults, event) => {
            defaults[event] = () => {};
            return defaults;
        }, {})
    };

    /**
     * Initially initialize an recorder when component will mount
     */
    componentWillMount () {
        try {
            this.initApplication(function(err, context) {
                if (err)
                    throw new Error(err);
            }, this);
        } catch (e) {
            console.warn(e);
        }
    }

    /**
     * On component did mount
     */
    componentDidMount () {
        // Don't include Application initialization, will get this context issue
        this._buildRecorder();
    };

    // Trigger when state is changes
    shouldComponentUpdate (nextProps, nextState) {
        const { preventReRenderOnUpdate } = nextProps || true;
        return !preventReRenderOnUpdate;
    }

    /**
     * In case when component will be updated
     * @param nextState
     */
    componentWillUpdate (nextState) {
        this.props.onRef(undefined);
        try {
            this.recorder.destroy();
            this.initApplication(function(err, context) {
                if (err)
                    throw new Error(err);
            }, this);
        } catch (e) {
            console.warn(e);
        }
    }

    componentDidUpdate (prevState) {
        this._buildRecorder();
    }

    componentWillUnmount () {
        // Never call this.application.destroy() !!!
        // Will receive error 'Cannot read property 'urls' of undefined'
        this.props.onRef(undefined);

        this.recorder.destroy();
    };

    render () {
        return (
            <div ref={e => { this.element = e ; }} {...this._elementProps}> </div>
        );
    }

    _betaJSEvents = Object.keys(Object.assign(betaJSRecorderEmbeddingEventsPropTypes, betaJSCommonEmbeddingEventsPropTypes))
        .reduce((memo, propName) => {
            const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3)
                .replace(/(recorder_|player_)/g, '');
            memo[eventName] = (...args) => {
                this.props[propName](...args)
        };
        return memo;
    }, {});

    /**
     * Initialize recorder
     * @param callback
     * @param context
     */
    initApplication (callback, context) {
        const { locale, flashUrl } = this.props;

        try {
            // Set locale
            if (typeof locale !== "undefined")
                BetaJS.MediaComponents.Assets.strings.setLocale(locale);

            // Set external flash player
            if (typeof flashUrl !== "undefined") {
                BetaJS.Flash.options = {
                    flashFile: flashUrl,
                    forceReload: true
                };
            }
            BetaJS.Dynamics.Dynamic.activate();

            callback(null, context);
        } catch (exe) {
            console.warn(exe);
            callback('Could not initialize an app', null, context);
        }
    }

    /**
     * Build all recorder attributes
     * @return {{}}
     */
    get _recorderAttributes () {
        return Object.keys(this.props).filter(k => betaJSRecorderAttributesPropTypes[k]).reduce((props, k) => {
            props[k] = this.props[k];
            return props;
        }, {});
    }

    // Props which are not related to BetaJS recorder
    get _elementProps () {
        return Object.keys(this.props).filter(k => !this.constructor.propTypes[k]).reduce((props, k) => {
            props[k] = this.props[k];
            return props;
        }, {});
    }

    get _recorderOptions () {
        return Object.keys(this.props)
            .filter(k => betaJSRecorderApplicationOptions[k]).reduce((props, k) => {
                props[k] = this.props[k];
                return props;
            }, {});
    }

    /**
     * Activate recorder
     * @private
     */
    _buildRecorder = () => {
        this.recorder = new BetaJS.MediaComponents.VideoRecorder.Dynamics.Recorder({
            element: this.element,
            attrs: this._recorderAttributes
        });

        this.recorder.activate();

        Object.entries(this._betaJSEvents).forEach(([event, func]) => {
            this.recorder.on(event, func.bind(this, this.recorder.get()));
        });

        this.props.onRef(this);

    };

    recorderInstance = () => this.recorder;

}
