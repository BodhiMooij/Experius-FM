import React, { Component } from 'react'
import '../../Reset.css'

import LoadingScreen from '../loadingscreen/LoadingScreen';
import AppHeader from '../header/AppHeader';
import RadioComponent from '../radiocomponent/RadioComponent';
// import ThemesComponent from './ThemesComponent';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { isLoading: true }
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                5000
            )
        );
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.setState({ isLoading: false });
        }
    }

    render() {

        if (this.state.isLoading) {
            return <LoadingScreen />;
        }

        return (
            <div className="App">
                <AppHeader />
                <div className="draggable-bounds global-item">
                    <RadioComponent />
                </div>
            </div>
        )
    }
}

export default App
