import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import {
    PlayButton,
    PrevButton,
    NextButton,
    Progress,
    Timer,
    VolumeControl
} from 'react-soundplayer/components';

class RadioComponentInner extends Component {
    constructor() {
        super();

        this.state = {
            activeIndex: 0
        };
    }

    playTrackAtIndex(playlistIndex) {
        const { soundCloudAudio } = this.props;

        this.setState({activeIndex: playlistIndex});

        soundCloudAudio.play({ playlistIndex });
    }

    nextIndex() {
        const { playlist } = this.props;
        let { activeIndex } = this.state;

        if (activeIndex >= playlist.tracks.length - 1) {
            return;
        }

        if (activeIndex || activeIndex === 0) {
            this.setState({activeIndex: ++activeIndex});
        }
    }

    prevIndex() {
        let { activeIndex } = this.state;

        if (activeIndex <= 0) {
            return;
        }

        if (activeIndex || activeIndex === 0) {
            this.setState({activeIndex: --activeIndex});
        }
    }

    renderTrackList() {
        const { playlist } = this.props;

        if (!playlist) {
            return <div className="p2 center">Loading...</div>;
        }

        const tracks = playlist.tracks.map((track, i) => {
            const classNames = ClassNames('flex flex-center full-width left-align button button-transparent', {
                'is-active': this.props.soundCloudAudio._playlistIndex === i
            });

            return (
                <button
                    key={track.id}
                    className={classNames}
                    onClick={this.playTrackAtIndex.bind(this, i)}>
                    <span className="flex-auto semibold">{track.user.username} - {track.title}</span>
                    <span className="h6 regular">{Timer.prettyTime(track.duration / 1000)}</span>
                </button>
            );
        });

        return (
            <div>{tracks}</div>
        );
    }

    render() {
        let { playlist, currentTime, duration } = this.props;

        return (
            <div className="bg-darken-1 red mt1 mb3 rounded">
                {/*<iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/851001995&color=%237fb5d8&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>*/}
                <div className="p2">
                    <h3 className="h2 nowrap caps mt0 mb2 semibold">{playlist ? playlist.title : ''}</h3>
                    <div className="flex flex-center">
                        <Timer className="h6 mr1 regular" duration={duration || 0} currentTime={currentTime} {...this.props} />

                        <PrevButton
                            className="flex-none h3 button button-narrow button-transparent button-grow rounded"
                            onPrevClick={this.prevIndex.bind(this)}
                            {...this.props} />
                        <PlayButton
                            className="play"
                            {...this.props}
                            onReady={() => console.log('track is loaded!')} />
                        <NextButton
                            className="next"
                            onNextClick={this.nextIndex.bind(this)}
                            {...this.props} />
                        <VolumeControl
                            className='flex flex-center mr2'
                            buttonClassName="flex-none h4 button button-transparent button-grow rounded"
                            {...this.props} />
                        <Progress
                            className="mt1 mb1 rounded"
                            innerClassName="rounded-left"
                            value={(currentTime / duration) * 100 || 0}
                            {...this.props} />
                    </div>
                </div>
                {/*{this.renderTrackList()}*/}
            </div>
        );
    }
}

RadioComponentInner.propTypes = {
    resolveUrl: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired
};

export default withSoundCloudAudio(RadioComponentInner);
