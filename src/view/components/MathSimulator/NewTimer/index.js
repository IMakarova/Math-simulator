import React, { PureComponent, useContext, useEffect, useState, useRef } from 'react';
const NewTimer = (props) => {
// const timerLength = moment.duration({ seconds: 0, minutes: 3 });
const [timeLeft, setTimeLeft] = useState(10);
const timer = useRef(null);

useEffect(() => {
    console.log('component mounted')
    timer.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000)
}, []);

useEffect(() => {
    if(!timeLeft && timer && timer.current){
        clearInterval(timer.current)
    }
}, [timeLeft])
    return (
        <div id='newTimer' className='someClass'>{timeLeft}</div>
)
}
export default NewTimer;