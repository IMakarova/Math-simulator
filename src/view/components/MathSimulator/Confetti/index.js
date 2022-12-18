// import { canvas-confetti } from 'canvas-confetti';

import confetti from 'canvas-confetti';
import { useEffect } from 'react';

const Confetti = () => {
//   const confetti = require('canvas-confetti');
//   confetti.Promise = MyPromise;
useEffect(() => {
    confetti()
}, [])
  const count = 300;
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

//   return (
//     {confetti}
// )
};

export default Confetti;