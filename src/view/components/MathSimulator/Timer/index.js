import React, { PureComponent } from 'react';
import './style.css';

class Timer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        props,
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
      // console.log(timeLeft, typeof timeLeft)
      if(!document.getElementById('timer')) {
        clearTimeout(quizTimeout);
      } else {
      if (timeLeft < 1000) {
        // this.setState({timeIsOver: true});
        this.props.switchIsWrong(false);
        this.props.switchTimeIsOver(true);
        // this.props.switchQuizIsStart(false);
        console.log(this.state);
        document.getElementById('timer').innerHTML =`Time is over!`;
        console.log(this.props.state.username);
        if(this.props.state.score < 0) {
          this.props.changeScore(0);
          console.log(this.props.state.score);
        }
        if(localStorage.getItem(this.props.state.username) && this.props.state.score > localStorage.getItem(this.props.state.username)) {
          this.props.switchBestScore(true);
          console.log('best result', this.props.state.bestScore, this.props.state.isTable, this.props.switchBestScore)
         }
        localStorage.setItem(this.props.state.username, 
          localStorage.getItem(this.props.state.username) > this.props.state.score ? localStorage.getItem(this.props.state.username) : 
          this.props.state.score > 0 ? this.props.state.score : 0);
       
        // console.log(localStorage.getItem(this.props.state.username), 'test', myLocalStorage);
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

  componentDidMount () {
    // localStorage.clear();
    // console.log(localStorage)
  }
  render() {return (
    <><div id='timer' className={!this.props.state.quizIsStart ? 'hidden' : ''}></div>
    <>{this.props.state.quizIsStart && <>{!this.props.state.timerIsStart && <div id='timer-container'>{!this.props.state.timeIsOver && this.timer(0, 10)}</div>}</>}</>
    {/* <>{this.swith()}</> */}
    </>
  );
  }
}

export default Timer;