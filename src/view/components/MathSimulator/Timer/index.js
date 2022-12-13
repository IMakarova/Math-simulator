import React, { useContext, useState, useEffect, useRef } from 'react';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';
import moment from './../../../../../node_modules/moment';


// class Timer extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//         props,
//         isQuiz: true
//     }
//   }
const Timer = () => {
  const context = useContext(SidebarContext);
  const [timeLeft, setTimeLeft] = useState(70);
  const [min, setMin] = useState (0);
  const [sec, setSec] = useState (0);
  const timer = useRef(null);

  const momentTime = moment.duration({
    seconds: 0,
    minutes: 2,
  })

  const twoDigits = (n) => {
    return (n <= 9 ? "0" + n : n);
  }

  const timerDisplay = (timeLeft) => {
        const time = new Date(timeLeft * 1000);
        setMin(time.getUTCMinutes());
        setSec(time.getUTCSeconds());
        // console.log(`${min} : ${twoDigits(sec)}`);
  }

  useEffect(() => {
      console.log('component mounted');
      context.startTimerAction();
      timer.current = setInterval(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

  }, []);
  
  useEffect(() => {
    timerDisplay(timeLeft);
      if(!timeLeft && timer && timer.current){
          clearInterval(timer.current);
          context.endTimerAction();
          console.log('endTimerAction')
          // document.getElementById('timer').innerHTML =`Time is over!`;
          if(context.score < 0) {
            context.negativeResultAction();
            console.log('negativeResultAction')
          }
          if(localStorage.getItem(context.username) && context.score > localStorage.getItem(context.username)) {
            context.bestResultAction();
            console.log('bestResultAction')
           }
          localStorage.setItem(context.username, 
            localStorage.getItem(context.username) > context.score ? localStorage.getItem(context.username) : 
            context.score > 0 ? context.score : 0);
            console.log(localStorage.getItem(context.username));
      }
  }, [timeLeft])




  //   function twoDigits (n) {
  //     return (n <= 9 ? "0" + n : n);
  //   }
    //       time = new Date(timeLeft);
  //       min = time.getUTCMinutes();
  //       sec = time.getUTCSeconds();
  //       // console.log(`${min} : ${twoDigits(sec)}`);


  //   const switch = () => {
  //   this.props.switchTimerIsStart(true);
  // }

  // const timer = (minutes, seconds) => {
  //   context.startTimerAction();
  //   let time, min, sec, timeLeft, endTime;

  //   function twoDigits (n) {
  //     return (n <= 9 ? "0" + n : n);
  //   }

  //   const quizTimeout = () => {
  //     setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
  //   }

  //   const updateTimer = () => {
  //     timeLeft = endTime - Number(new Date);
  //     // console.log(timeLeft, typeof timeLeft)
  //     if(!document.getElementById('timer')) {
  //       clearTimeout(quizTimeout);
  //     } else {
  //     if (timeLeft < 1000) {
  //       // this.setState({timeIsOver: true});
  //       // this.props.switchIsWrong(false);
  //       // this.props.switchTimeIsOver(true);
  //       // this.props.switchQuizIsStart(false);
  //       // console.log(this.state);
  //       context.endTimerAction();
  //       document.getElementById('timer').innerHTML =`Time is over!`;
  //       // console.log(this.props.state.username);
  //       if(this.props.state.score < 0) {
  //         // this.props.changeScore(0);
  //         context.negativeResultAction();
  //         // console.log(this.props.state.score);
  //       }
  //       if(localStorage.getItem(context.username) && context.score > localStorage.getItem(context.username)) {
  //         // this.props.switchBestScore(true);
  //         context.bestResultAction();
  //         // console.log('best result', this.props.state.bestScore, this.props.state.isTable, this.props.switchBestScore)
  //        }
  //       localStorage.setItem(context.username, 
  //         localStorage.getItem(context.username) > context.score ? localStorage.getItem(context.username) : 
  //         context.score > 0 ? context.score : 0);
       
  //       // console.log(localStorage.getItem(this.props.state.username), 'test', myLocalStorage);
  //     } else {
  //       time = new Date(timeLeft);
  //       min = time.getUTCMinutes();
  //       sec = time.getUTCSeconds();
  //       quizTimeout();
  //       // console.log(`${min} : ${twoDigits(sec)}`);
  //       document.getElementById('timer').innerHTML = `${min} : ${twoDigits(sec)}`;

  //     }
      
  //   }
  //   }

  //   endTime = Number(new Date) + 1000 * (60 * minutes + seconds) + 500;
  //   return updateTimer();
  // }

  // componentDidMount () {
  //   // localStorage.clear();
  //   // console.log(localStorage)
  // }
  // render() {
    return (
      <SidebarContext.Consumer>
        {(context) => {
          return (
            <>
              {/* <div id='timer' className={!context.timeIsOver ? 'hidden' : ''}></div> */}
                <div id='timer-container'>{min} : {twoDigits(sec)}</div></>

                /* {context.quizIsStart && <>{!context.timerIsStart && }</> } */
          )
        }}
      </SidebarContext.Consumer>
    );
  // }
}

export default Timer;