allTruthy(true, true, true);      // ➞ true
allTruthy(true, false, true);    // ➞ false
allTruthy(5, 4, 3, 2, 1, 0);      // ➞ false
function allTruthy(...args) {
  return args.every(value => Boolean(value));
}
