import React, { Component } from 'react'
import logo from '../../assets/images/fm.png';
import Clock from '../clock/Clock';

class AppHeader extends Component {

    render() {
        return (
            <header>
                <ul>
                   <li className="logo">
                       <img src={logo} alt="Experius FM" />
                       <span>Experius FM</span>
                   </li>
                    <li className="mobile-hide"><span>A</span>bout</li>
                    <li className="mobile-hide"><span>T</span>hemes</li>
                    <li className="mobile-hide"><span>S</span>ign In/Up</li>
                </ul>
                <aside>
                    <span className="mobile-hide"><a href="google.com" target="_blank" className="item">Link</a></span>
                    <span className="volume-slider">
                    <div className="item mobile-hide">Volume</div>
                    </span>
                    <span className="fullscreen item mobile-hide">Fullscreen</span>
                    <Clock />
                </aside>
            </header>
        )
    }
}

export default AppHeader
