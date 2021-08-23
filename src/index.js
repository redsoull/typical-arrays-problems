
exports.min = function min (array = [0]) {

if (array.length !== 0) {
  return Math.min.apply(null, array);
}
  return 0;
};

exports.max = function max (array = [0]) {
  if (array.length !== 0) {
    return Math.max.apply(null, array);
  }
    return 0;
}

exports.avg = function avg (array = [0]) {
if (array.length !== 0) {
  let sum = 0;
  for (i = 0; i < array.length; i +=1) {
    sum = sum + array[i];
  }
  return sum / array.length;
}

  return 0;
}
