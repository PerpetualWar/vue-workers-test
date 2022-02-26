// import * as Comlink from 'comlink';
// importScripts('https://unpkg.com/comlink/dist/umd/comlink.js');

export const obj = {
  calcHeavy(baseNumber) {
    let result = 0;
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }

    return result;
  },
};

export const calcHeavy = (baseNumber) => {
  let result = 0;
  for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }

  return result;
};

// Comlink.expose(obj);
