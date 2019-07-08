export function sum(a, b) {
  return (a + b);
}

export function powerWithClosure(exponent) {
  function myFuncPow(a, b) {
    return Math.pow(2, 2);
  }

  return myFuncPow;
}
