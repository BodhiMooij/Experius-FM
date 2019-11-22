import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        var objToday = new Date(),
            curYear = objToday.getFullYear() - 30,
            months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
            curMonth = months[objToday.getMonth()],
            weekday = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'),
            dayOfWeek = weekday[objToday.getDay()],
            dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
            curHour = objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours(),
            curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes();

        var today = curHour + ":" + curMinute + " - " + dayOfWeek + " " + dayOfMonth + " " + curMonth + " " + curYear;

        return (
            <p className="clock item">
                {today}
            </p>
        );
    }
}

export default Clock
