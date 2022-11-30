import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // timeIsOver: false,
        isQuiz: true
    }
  }

  switch = () => {
    this.props.switchTimerIsStart(true);
  }

  timer = (minutes, seconds) => {
    this.switch();
    let time, min, sec, timeLeft, endTime;

    function twoDigits (n) {
      return (n <= 9 ? "0" + n : n);
    }

    const quizTimeout = () => {
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }

    const updateTimer = () => {
      timeLeft = endTime - Number(new Date);
      if(!document.getElementById('timer')) {
        clearTimeout(quizTimeout);
      } else {
      if (timeLeft < 1000) {
        // this.setState({timeIsOver: true});
        this.props.switchTimeIsOver(true);
        document.getElementById('timer').innerHTML =`Time is over`;
      } else {
        time = new Date(timeLeft);
        min = time.getUTCMinutes();
        sec = time.getUTCSeconds();
        quizTimeout();
        // console.log(`${min} : ${twoDigits(sec)}`);
        document.getElementById('timer').innerHTML = `${min} : ${twoDigits(sec)}`;

      }
    }
    }

    endTime = Number(new Date) + 1000 * (60 * minutes + seconds) + 500;
    return updateTimer();
  }

  componentWillUnmount() {
  }
  render() {return (
    <><div id='timer' className={!this.props.state.quizIsStart ? 'hidden' : ''}></div>
    <>{this.props.state.quizIsStart && <>{!this.props.state.timerIsStart && <div id='timer-container'>{!this.props.state.timeIsOver && this.timer(0, 30)}</div>}</>}</>
    {/* <>{this.swith()}</> */}
    </>
  );
  }
}

export default Timer;