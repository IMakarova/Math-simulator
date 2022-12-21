import React, { useContext, useState, useEffect, useRef } from 'react';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';
import AuthContext from '../../../../context/auth-context';

const Timer = () => {
  const context = useContext(SidebarContext);
  const loginContext = useContext(AuthContext);
  const [timeLeft, setTimeLeft] = useState(70);
  const [min, setMin] = useState (0);
  const [sec, setSec] = useState (0);
  const timer = useRef(null);

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
      // console.log('component mounted');
      context.startTimerAction();
      timer.current = setInterval(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
return clearInterval(timer.current);
  }, []);
  
  useEffect(() => {
    timerDisplay(timeLeft);
      if(!timeLeft && timer && timer.current){
          // clearInterval(timer.current);
          context.endTimerAction();
          console.log('endTimerAction')
          // document.getElementById('timer').innerHTML =`Time is over!`;
          if(context.score < 0) {
            context.negativeResultAction();
            console.log('negativeResultAction')
          }
          if(localStorage.getItem(loginContext.username) && context.score > localStorage.getItem(loginContext.username)) {
            context.bestResultAction();
            console.log('bestResultAction')
           }
          localStorage.setItem(loginContext.username, 
            localStorage.getItem(loginContext.username) > context.score ? localStorage.getItem(loginContext.username) : 
            context.score > 0 ? context.score : 0);
            console.log(localStorage.getItem(loginContext.username));
      }
  }, [timeLeft])

    return (
      // <SidebarContext.Consumer>
      //   {(context) => {
      //     return (
            <>
              {/* <div id='timer' className={!context.timeIsOver ? 'hidden' : ''}></div> */}
                <div id='timer-container'>{min} : {twoDigits(sec)}</div></>

                /* {context.quizIsStart && <>{!context.timerIsStart && }</> } */
      //     )
      //   }}
      // </SidebarContext.Consumer>
    );
  // }
}

export default Timer;