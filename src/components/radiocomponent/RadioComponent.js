import React, { Component } from 'react';
import { Rnd } from "react-rnd/lib/index";
import RadioComponentInner from "./RadioComponentInner";

import './RadioComponentStyles.css';
import bars from '../../assets/images/bars.gif';

const clientId = 'YLsAf0yyZQtvlBtU0W7TOuhCeq6dZIXs';
const resolveUrl = 'https://api.soundcloud.com/tracks?client_id=';

class RadioComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 280,
            height: 220,
            x: 100,
            y: 100,
        };
    }

    render() {
        return (
            <Rnd
                dragHandleClassName="drag-header"
                enableResizing="disable"
                bounds=".draggable-bounds"
                size={{
                    width: this.state.width,
                    height: this.state.height,
                }}
                position={{
                    x: this.state.x,
                    y: this.state.y,
                }}
                onDragStop={(e, d) => {
                    this.setState({ x: d.x, y: d.y });
                }}
                // onResize={(e, direction, ref, delta, position) => {
                //     this.setState({
                //         width: ref.offsetWidth,
                //         height: ref.offsetHeight,
                //         ...position,
                //     });
                // }}
            >
                <span className="drag-header">
                    <span className="icon"></span>
                    <span className="spacer">
                        <i></i><i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <p>Experius FM</p>
                </span>

                <div className="inner-wrapper">
                    <div className="bars-wrapper is-playing">
                        <img src={bars} alt="Experius FM" />
                    </div>
                    <RadioComponentInner
                        clientId={clientId}
                        resolveUrl={resolveUrl}
                    />
                </div>
            </Rnd>
        )
    }
}

export default RadioComponent
