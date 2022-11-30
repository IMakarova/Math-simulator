const maxNum = 100;

export const mixedOperation = () => {
  const mix = [];
  mix.push(add(), sub(), mul(), div());
  return mix;
}

export const add = function () {
  const a = Math.floor(Math.random() * maxNum);
  const b = randomB(1, maxNum - a);
  function randomB(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const ab = a + b;

  return [a, b, ab, '+'];
};

export const sub = function () {
  const a = randomNum(maxNum / 2, maxNum);
  const b = randomNum(1, a - 1);
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const ab = a - b;
  return [a, b, ab, '-'];
};

export const mul = function () {
  const randomAB = randomNum(maxNum / 2, maxNum);
  const b = randomNum(1, randomAB / 2);
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const a = Math.floor(randomAB / b);
  const ab = a * b;
  return [a, b, ab, '*'];
};

export const div = function () {
  const randomAB = randomNum(maxNum / 2, maxNum);
  const ab = randomNum(1, randomAB / 2);
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const b = Math.floor(randomAB / ab);
  const a = ab * b;
  return [a, b, ab, '/'];
};